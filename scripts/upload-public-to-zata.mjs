/**
 * Converts all images under public/ to AVIF and uploads to Zata at public/{folder-structure}/file.avif
 * Generates src/lib/public-assets-manifest.json mapping local paths -> Zata URLs
 */
import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const MANIFEST_PATH = path.join(ROOT, 'src', 'lib', 'public-assets-manifest.json');

const IMAGE_RE = /\.(png|jpe?g|webp|gif)$/i;
const CONCURRENCY = 1;
const AVIF_QUALITY = 72;

function loadEnvFile(filePath) {
  const env = {};
  try {
    const raw = fsSync.readFileSync(filePath, 'utf8');
    for (const line of raw.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      env[key] = value;
    }
  } catch {
    // ignore missing file
  }
  return env;
}

function getZataPublicUrl(prefix, objectKey) {
  const base = prefix.replace(/\/$/, '');
  const encodedKey = objectKey
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  return `${base}/${encodedKey}`;
}

async function walkImages(dir, relativeBase = '') {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const rel = relativeBase ? `${relativeBase}/${entry.name}` : entry.name;
    const abs = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walkImages(abs, rel)));
    } else if (IMAGE_RE.test(entry.name)) {
      files.push({ abs, rel: rel.replace(/\\/g, '/') });
    }
  }

  return files;
}

async function convertToAvif(inputPath) {
  return sharp(inputPath)
    .rotate()
    .avif({ quality: AVIF_QUALITY, effort: 4 })
    .toBuffer();
}

async function runPool(items, worker) {
  const results = new Array(items.length);
  let index = 0;

  async function next() {
    while (index < items.length) {
      const i = index++;
      results[i] = await worker(items[i], i);
    }
  }

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, items.length) }, next));
  return results;
}

async function main() {
  const env = {
    ...loadEnvFile(path.join(ROOT, '.env.local')),
    ...process.env,
  };

  const required = ['ZATA_ACCESS_KEY_ID', 'ZATA_SECRET_ACCESS_KEY', 'ZATA_ENDPOINT', 'ZATA_BUCKET'];
  for (const key of required) {
    if (!env[key]) {
      throw new Error(`Missing ${key} in .env.local`);
    }
  }

  const prefix = env.ZATA_PREFIX || `${env.ZATA_ENDPOINT}/${env.ZATA_BUCKET}`;
  const s3 = new S3Client({
    endpoint: env.ZATA_ENDPOINT,
    region: env.ZATA_REGION || 'us-east-1',
    credentials: {
      accessKeyId: env.ZATA_ACCESS_KEY_ID,
      secretAccessKey: env.ZATA_SECRET_ACCESS_KEY,
    },
    forcePathStyle: env.ZATA_FORCE_PATH_STYLE !== 'false',
  });

  const images = await walkImages(PUBLIC_DIR);
  console.log(`Found ${images.length} images in public/`);

  let manifest = {};
  try {
    const existing = await fs.readFile(MANIFEST_PATH, 'utf8');
    manifest = JSON.parse(existing);
  } catch {
    // fresh run
  }

  let uploaded = 0;
  let skipped = 0;
  let failed = 0;

  await runPool(images, async (file) => {
    const localPath = `/${file.rel}`;
    if (manifest[localPath]) {
      skipped += 1;
      return;
    }

    const avifRel = file.rel.replace(IMAGE_RE, '.avif');
    const objectKey = `public/${avifRel}`;

    try {
      const buffer = await convertToAvif(file.abs);
      await s3.send(
        new PutObjectCommand({
          Bucket: env.ZATA_BUCKET,
          Key: objectKey,
          Body: buffer,
          ContentType: 'image/avif',
        })
      );

      const url = getZataPublicUrl(prefix, objectKey);
      manifest[localPath] = url;
      await fs.writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
      uploaded += 1;
      console.log(`[${uploaded + skipped}/${images.length}] ${localPath} -> ${url}`);
    } catch (err) {
      failed += 1;
      const message = err instanceof Error ? err.message : String(err);
      console.error(`FAILED ${localPath}: ${message}`);
    }
  });

  console.log(`\nDone. Uploaded: ${uploaded}, Skipped: ${skipped}, Failed: ${failed}`);
  console.log(`Manifest: ${MANIFEST_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
