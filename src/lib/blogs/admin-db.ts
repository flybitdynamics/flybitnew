import { FieldValue } from 'firebase-admin/firestore';
import { FIREBASE_BLOGS_COLLECTION } from '../firebase/config';
import { getAdminFirestore, isAdminSdkConfigured } from '../firebase/admin-server';
import { buildBlogMediaKey, isZataConfigured, uploadBufferToZata, type BlogMediaField } from '../zata/client';
import { mapFirestoreDoc, blogToFirestore } from './firestore-mapper';
import { SEED_BLOGS } from './seed';
import type { BlogPost, BlogPostInput } from './types';
import { calculateReadingTime } from '../stories/utils';

function sortBlogs(blogs: BlogPost[]): BlogPost[] {
  return [...blogs].sort(
    (a, b) => new Date(b.createdAt || b.date).getTime() - new Date(a.createdAt || a.date).getTime()
  );
}

function publishedSeed(): BlogPost[] {
  return sortBlogs(SEED_BLOGS.filter((b) => b.published || b.status === 'published'));
}

function isPublished(blog: BlogPost): boolean {
  return blog.status === 'published' || blog.published;
}

export async function listAllBlogsAdminDb(): Promise<BlogPost[]> {
  if (!isAdminSdkConfigured()) return sortBlogs(SEED_BLOGS);

  try {
    const snap = await getAdminFirestore()
      .collection(FIREBASE_BLOGS_COLLECTION)
      .orderBy('createdAt', 'desc')
      .get();
    if (snap.empty) return [];
    return snap.docs.map((d) => mapFirestoreDoc(d.id, d.data() as Record<string, unknown>));
  } catch (error) {
    console.error('listAllBlogsAdminDb failed fetching from Firestore:', error);
    return [];
  }
}

export async function getBlogByIdAdminDb(id: string): Promise<BlogPost | null> {
  if (!isAdminSdkConfigured()) {
    return SEED_BLOGS.find((b) => b.id === id) ?? null;
  }

  try {
    const snap = await getAdminFirestore().collection(FIREBASE_BLOGS_COLLECTION).doc(id).get();
    if (snap.exists) {
      return mapFirestoreDoc(snap.id, snap.data() as Record<string, unknown>);
    }
  } catch {
    /* fall through */
  }

  return SEED_BLOGS.find((b) => b.id === id) ?? null;
}

export async function createBlogDb(input: BlogPostInput): Promise<string> {
  const published = input.status === 'published' || input.published;
  const ref = await getAdminFirestore()
    .collection(FIREBASE_BLOGS_COLLECTION)
    .add({
      ...blogToFirestore({
        ...input,
        status: published ? 'published' : 'draft',
        published,
      } as Partial<BlogPost>),
      readingTime: input.readingTime || calculateReadingTime(input.content),
      views: 0,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  return ref.id;
}

export async function updateBlogDb(id: string, input: Partial<BlogPostInput>): Promise<void> {
  const data: Record<string, unknown> = {
    ...blogToFirestore(input as Partial<BlogPost>),
    updatedAt: FieldValue.serverTimestamp(),
  };

  if (input.status !== undefined || input.published !== undefined) {
    const published = input.status === 'published' || input.published === true;
    data.status = published ? 'published' : 'draft';
    data.published = published;
  }

  if (input.content) {
    data.readingTime = calculateReadingTime(input.content);
  }

  await getAdminFirestore().collection(FIREBASE_BLOGS_COLLECTION).doc(id).update(data);
}

export async function deleteBlogDb(id: string): Promise<void> {
  await getAdminFirestore().collection(FIREBASE_BLOGS_COLLECTION).doc(id).delete();
}

export async function duplicateBlogDb(blog: BlogPost): Promise<string> {
  const { id: _id, views: _v, createdAt: _c, updatedAt: _u, ...rest } = blog;
  return createBlogDb({
    ...rest,
    title: `${blog.title} (Copy)`,
    slug: `${blog.slug}-copy-${Date.now()}`,
    status: 'draft',
    published: false,
    featured: false,
  });
}

export async function uploadBlogFileDb(
  buffer: Buffer,
  mimeType: string,
  field: BlogMediaField,
  blogId: string,
  ext: string
): Promise<string> {
  if (!isZataConfigured()) {
    throw new Error('Zata storage is not configured. Add ZATA_* variables to .env.local');
  }

  const objectKey = buildBlogMediaKey(blogId, field, ext);
  return uploadBufferToZata(objectKey, buffer, mimeType);
}

export const BLOG_MEDIA_FIELD: Record<BlogMediaField, 'image' | 'authorImage'> = {
  image: 'image',
  authorImage: 'authorImage',
};

export async function getPublishedBlogsDb(limitCount?: number): Promise<BlogPost[]> {
  if (!isAdminSdkConfigured()) {
    const seed = publishedSeed();
    return limitCount ? seed.slice(0, limitCount) : seed;
  }

  try {
    const snap = await getAdminFirestore()
      .collection(FIREBASE_BLOGS_COLLECTION)
      .orderBy('createdAt', 'desc')
      .get();

    const published = snap.docs
      .map((d) => mapFirestoreDoc(d.id, d.data() as Record<string, unknown>))
      .filter(isPublished);

    if (published.length > 0) {
      return limitCount ? published.slice(0, limitCount) : published;
    }
  } catch (error) {
    console.error('getPublishedBlogsDb failed fetching from Firestore:', error);
  }

  return [];
}

export async function getBlogBySlugDb(slug: string): Promise<BlogPost | null> {
  if (!isAdminSdkConfigured()) {
    return SEED_BLOGS.find((b) => b.slug === slug && (b.published || b.status === 'published')) ?? null;
  }

  try {
    const snap = await getAdminFirestore()
      .collection(FIREBASE_BLOGS_COLLECTION)
      .where('slug', '==', slug)
      .limit(1)
      .get();

    if (!snap.empty) {
      const d = snap.docs[0]!;
      const blog = mapFirestoreDoc(d.id, d.data() as Record<string, unknown>);
      if (isPublished(blog)) return blog;
    }
  } catch {
    /* fall through */
  }

  return null;
}
