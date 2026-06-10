import { FieldValue } from 'firebase-admin/firestore';
import { FIREBASE_COLLECTION } from '../firebase/config';
import { getAdminFirestore, isAdminSdkConfigured } from '../firebase/admin-server';
import { buildStoryMediaKey, isZataConfigured, uploadBufferToZata, type StoryMediaFolder } from '../zata/client';
import { mapFirestoreDoc, storyToFirestore } from './firestore-mapper';
import { SEED_STORIES } from './seed';
import type { ContentStory, ContentStoryInput } from './types';
import { calculateReadingTime } from './utils';

function sortStories(stories: ContentStory[]): ContentStory[] {
  return [...stories].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

function publishedSeed(): ContentStory[] {
  return sortStories(SEED_STORIES.filter((s) => s.status === 'published'));
}

export async function listAllStoriesAdminDb(): Promise<ContentStory[]> {
  if (!isAdminSdkConfigured()) return sortStories(SEED_STORIES);

  try {
    const snap = await getAdminFirestore()
      .collection(FIREBASE_COLLECTION)
      .orderBy('createdAt', 'desc')
      .get();
    if (snap.empty) return sortStories(SEED_STORIES);
    return snap.docs.map((d) => mapFirestoreDoc(d.id, d.data() as Record<string, unknown>));
  } catch (error) {
    console.error('listAllStoriesAdminDb failed fetching from Firestore:', error);
    return sortStories(SEED_STORIES);
  }
}

export async function getPublishedStoriesDb(limitCount?: number): Promise<ContentStory[]> {
  if (!isAdminSdkConfigured()) {
    const seed = publishedSeed();
    return limitCount ? seed.slice(0, limitCount) : seed;
  }

  try {
    const snap = await getAdminFirestore()
      .collection(FIREBASE_COLLECTION)
      .orderBy('createdAt', 'desc')
      .get();

    const published = snap.docs
      .map((d) => mapFirestoreDoc(d.id, d.data() as Record<string, unknown>))
      .filter((s) => s.status === 'published');

    if (published.length > 0) {
      return limitCount ? published.slice(0, limitCount) : published;
    }
  } catch (error) {
    console.error('getPublishedStoriesDb failed fetching from Firestore:', error);
    /* fall through */
  }

  const seed = publishedSeed();
  return limitCount ? seed.slice(0, limitCount) : seed;
}

export async function getStoryBySlugDb(slug: string): Promise<ContentStory | null> {
  if (!isAdminSdkConfigured()) {
    return SEED_STORIES.find((s) => s.slug === slug && s.status === 'published') ?? null;
  }

  try {
    const snap = await getAdminFirestore()
      .collection(FIREBASE_COLLECTION)
      .where('slug', '==', slug)
      .limit(1)
      .get();

    if (!snap.empty) {
      const d = snap.docs[0]!;
      const story = mapFirestoreDoc(d.id, d.data() as Record<string, unknown>);
      if (story.status === 'published') return story;
    }
  } catch {
    /* fall through */
  }

  return SEED_STORIES.find((s) => s.slug === slug && s.status === 'published') ?? null;
}

export async function getStoryByIdAdminDb(id: string): Promise<ContentStory | null> {
  if (!isAdminSdkConfigured()) {
    return SEED_STORIES.find((s) => s.id === id) ?? null;
  }

  try {
    const snap = await getAdminFirestore().collection(FIREBASE_COLLECTION).doc(id).get();
    if (snap.exists) {
      return mapFirestoreDoc(snap.id, snap.data() as Record<string, unknown>);
    }
  } catch {
    /* fall through */
  }

  return SEED_STORIES.find((s) => s.id === id) ?? null;
}

export async function createStoryDb(input: ContentStoryInput): Promise<string> {
  const ref = await getAdminFirestore()
    .collection(FIREBASE_COLLECTION)
    .add({
      ...storyToFirestore(input as Partial<ContentStory>),
      readingTime: input.readingTime || calculateReadingTime(input.content),
      views: 0,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  return ref.id;
}

export async function updateStoryDb(id: string, input: Partial<ContentStoryInput>): Promise<void> {
  const data: Record<string, unknown> = {
    ...storyToFirestore(input as Partial<ContentStory>),
    updatedAt: FieldValue.serverTimestamp(),
  };

  if (input.content) {
    data.readingTime = calculateReadingTime(input.content);
  }

  await getAdminFirestore().collection(FIREBASE_COLLECTION).doc(id).update(data);
}

export async function deleteStoryDb(id: string): Promise<void> {
  await getAdminFirestore().collection(FIREBASE_COLLECTION).doc(id).delete();
}

export async function duplicateStoryDb(story: ContentStory): Promise<string> {
  const { id: _id, views: _v, createdAt: _c, updatedAt: _u, ...rest } = story;
  return createStoryDb({
    ...rest,
    title: `${story.title} (Copy)`,
    slug: `${story.slug}-copy-${Date.now()}`,
    status: 'draft',
    featured: false,
  });
}

export async function uploadStoryFileDb(
  buffer: Buffer,
  mimeType: string,
  folder: StoryMediaFolder,
  storyId: string,
  ext: string
): Promise<string> {
  if (!isZataConfigured()) {
    throw new Error('Zata storage is not configured. Add ZATA_* variables to .env.local');
  }

  const objectKey = buildStoryMediaKey(storyId, folder, ext);
  return uploadBufferToZata(objectKey, buffer, mimeType);
}

export const STORY_MEDIA_FIELD: Record<StoryMediaFolder, 'thumbnailUrl' | 'coverImageUrl' | 'videoUrl'> = {
  thumbnails: 'thumbnailUrl',
  'cover-images': 'coverImageUrl',
  videos: 'videoUrl',
};
