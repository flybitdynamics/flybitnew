import manifest from './public-assets-manifest.json';

type PublicAssetManifest = Record<string, string>;

const manifestMap = manifest as PublicAssetManifest;

function extractRelativeManifestPath(targetUrl: string): string {
  if (!targetUrl) return '';
  for (const prefix of ['/public/', '/stories/', '/reelsthumbnail/']) {
    const idx = targetUrl.indexOf(prefix);
    if (idx !== -1) {
      return targetUrl.slice(idx);
    }
  }
  return targetUrl;
}

/** Resolve a local path or asset path to Cloudflare R2 URL (if NEXT_PUBLIC_MEDIA_BASE_URL is set) or relative path. */
export function publicAsset(localPath: string): string {
  if (!localPath) return '';

  const baseUrl = (
    process.env.NEXT_PUBLIC_MEDIA_BASE_URL ||
    process.env.NEXT_PUBLIC_CLOUDFLARE_URL ||
    ''
  ).replace(/\/$/, '');

  let relPath = localPath;

  if (/^https?:\/\//i.test(localPath)) {
    if (localPath.includes('zata.ai') || localPath.includes('r2.dev')) {
      relPath = extractRelativeManifestPath(localPath);
    } else {
      return localPath;
    }
  }

  const key = relPath.startsWith('/') ? relPath : `/${relPath}`;

  // Serve local static story thumbnails directly from local public/ directory
  if (key.startsWith('/stories/') && key.endsWith('.png')) {
    return key;
  }

  const manifestTarget = manifestMap[key];
  const finalRel = manifestTarget ? extractRelativeManifestPath(manifestTarget) : key;

  if (baseUrl) {
    const safePath = finalRel
      .split('/')
      .map((segment) => encodeURIComponent(segment))
      .join('/');
    return `${baseUrl}${safePath}`;
  }

  return finalRel;
}

export function mapPublicAssets(paths: readonly string[]): string[] {
  return paths.map(publicAsset);
}

export const DEFAULT_BLOG_IMAGE = publicAsset('/about_hero.png');
export const DEFAULT_LOGO = publicAsset('/logo.png');
