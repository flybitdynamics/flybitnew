import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

let client: S3Client | null = null;

export function isZataConfigured(): boolean {
  return !!(
    process.env.ZATA_ACCESS_KEY_ID &&
    process.env.ZATA_SECRET_ACCESS_KEY &&
    process.env.ZATA_ENDPOINT &&
    process.env.ZATA_BUCKET
  );
}

export function getZataClient(): S3Client {
  if (!isZataConfigured()) {
    throw new Error('Zata storage is not configured. Add ZATA_* variables to .env.local');
  }

  if (!client) {
    client = new S3Client({
      endpoint: process.env.ZATA_ENDPOINT,
      region: process.env.ZATA_REGION || 'us-east-1',
      credentials: {
        accessKeyId: process.env.ZATA_ACCESS_KEY_ID!,
        secretAccessKey: process.env.ZATA_SECRET_ACCESS_KEY!,
      },
      forcePathStyle: process.env.ZATA_FORCE_PATH_STYLE !== 'false',
    });
  }

  return client;
}

export function getZataPublicUrl(objectKey: string): string {
  const prefix = (
    process.env.ZATA_PREFIX || `${process.env.ZATA_ENDPOINT}/${process.env.ZATA_BUCKET}`
  ).replace(/\/$/, '');
  const key = objectKey.replace(/^\//, '');
  return `${prefix}/${key}`;
}

export type StoryMediaFolder = 'thumbnails' | 'cover-images' | 'videos';

const STORY_MEDIA_FILE: Record<StoryMediaFolder, string> = {
  thumbnails: 'thumbnail',
  'cover-images': 'cover',
  videos: 'video',
};

/** stories/{storyId}/thumbnail.jpg | cover.jpg | video.mp4 */
export function buildStoryMediaKey(
  storyId: string,
  folder: StoryMediaFolder,
  ext: string
): string {
  const safeId = sanitizeId(storyId);
  const fileBase = STORY_MEDIA_FILE[folder];
  const safeExt = sanitizeExt(ext);
  return `stories/${safeId}/${fileBase}.${safeExt}`;
}

export type BlogMediaField = 'image' | 'authorImage';

const BLOG_MEDIA_FILE: Record<BlogMediaField, string> = {
  image: 'featured',
  authorImage: 'author',
};

/** blogs/{blogId}/featured.jpg | author.jpg */
export function buildBlogMediaKey(blogId: string, field: BlogMediaField, ext: string): string {
  const safeId = sanitizeId(blogId);
  const fileBase = BLOG_MEDIA_FILE[field];
  const safeExt = sanitizeExt(ext);
  return `blogs/${safeId}/${fileBase}.${safeExt}`;
}

function sanitizeId(id: string): string {
  return id.replace(/[^a-zA-Z0-9_-]/g, '');
}

function sanitizeExt(ext: string): string {
  return ext.replace(/[^a-zA-Z0-9]/g, '') || 'bin';
}

export async function uploadBufferToZata(
  objectKey: string,
  buffer: Buffer,
  contentType: string
): Promise<string> {
  const bucket = process.env.ZATA_BUCKET!;
  const s3 = getZataClient();

  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: objectKey,
    Body: buffer,
    ContentType: contentType,
  });

  try {
    await s3.send(command);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Zata upload failed';
    throw new Error(message);
  }

  return getZataPublicUrl(objectKey);
}
