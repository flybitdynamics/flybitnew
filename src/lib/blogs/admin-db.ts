import { FieldValue } from 'firebase-admin/firestore';
import { FIREBASE_BLOGS_COLLECTION } from '../firebase/config';
import { getAdminFirestore, getAdminStorage, isAdminSdkConfigured } from '../firebase/admin-server';
import { mapFirestoreDoc, blogToFirestore } from './firestore-mapper';
import { SEED_BLOGS } from './seed';
import type { BlogPost, BlogPostInput } from './types';
import { calculateReadingTime } from '../stories/utils';

function sortBlogs(blogs: BlogPost[]): BlogPost[] {
  return [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function listAllBlogsAdminDb(): Promise<BlogPost[]> {
  if (!isAdminSdkConfigured()) return sortBlogs(SEED_BLOGS);

  try {
    const snap = await getAdminFirestore()
      .collection(FIREBASE_BLOGS_COLLECTION)
      .orderBy('date', 'desc')
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
  const contentHtml = input.content;
  const ref = await getAdminFirestore()
    .collection(FIREBASE_BLOGS_COLLECTION)
    .add({
      ...blogToFirestore(input as Partial<BlogPost>),
      readingTime: input.readingTime || calculateReadingTime(contentHtml),
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
  folder: 'blog-thumbnails' | 'blog-contents',
  blogId: string,
  ext: string
): Promise<string> {
  const path = `content/${folder}/${blogId}.${ext}`;
  const bucket = getAdminStorage().bucket();
  const file = bucket.file(path);

  await file.save(buffer, {
    metadata: { contentType: mimeType },
    resumable: false,
  });

  await file.makePublic();

  const bucketName = bucket.name;
  return `https://storage.googleapis.com/${bucketName}/${path}`;
}

export async function getPublishedBlogsDb(limitCount?: number): Promise<BlogPost[]> {
  if (!isAdminSdkConfigured()) {
    const seed = SEED_BLOGS.filter((b) => b.published || b.status === 'published');
    return limitCount ? seed.slice(0, limitCount) : seed;
  }

  try {
    const snap = await getAdminFirestore()
      .collection(FIREBASE_BLOGS_COLLECTION)
      .where('status', '==', 'published')
      .get();

    const published = snap.docs.map((d) => mapFirestoreDoc(d.id, d.data() as Record<string, unknown>));
    
    // Sort in memory by date descending to avoid requiring composite Firestore index
    published.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return limitCount ? published.slice(0, limitCount) : published;
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
      if (blog.status === 'published' || blog.published) return blog;
    }
  } catch {
    /* fall through */
  }

  return SEED_BLOGS.find((b) => b.slug === slug && (b.published || b.status === 'published')) ?? null;
}

