import type { Timestamp } from 'firebase/firestore';
import type { ContentStory, ShowType, StoryStatus } from './types';
import { SHOW_TYPES } from './types';

function toIso(value: unknown): string {
  if (!value) return new Date().toISOString();
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && value !== null && 'toDate' in value) {
    return (value as Timestamp).toDate().toISOString();
  }
  return new Date().toISOString();
}

export function mapFirestoreDoc(id: string, data: Record<string, unknown>): ContentStory {
  const showType = SHOW_TYPES.includes(data.showType as ShowType)
    ? (data.showType as ShowType)
    : 'Social Events';

  return {
    id,
    title: String(data.title || ''),
    slug: String(data.slug || ''),
    showType,
    shortDescription: String(data.shortDescription || ''),
    content: String(data.content || ''),
    thumbnailUrl: String(data.thumbnailUrl || ''),
    coverImageUrl: String(data.coverImageUrl || ''),
    videoUrl: String(data.videoUrl || ''),
    instagramUrl: String(data.instagramUrl || ''),
    metaTitle: String(data.metaTitle || ''),
    metaDescription: String(data.metaDescription || ''),
    seoKeywords: Array.isArray(data.seoKeywords) ? (data.seoKeywords as string[]) : [],
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    author: String(data.author || 'Admin'),
    readingTime: String(data.readingTime || '3 min'),
    featured: Boolean(data.featured),
    status: (data.status === 'draft' ? 'draft' : 'published') as StoryStatus,
    views: typeof data.views === 'number' ? data.views : 0,
    createdAt: toIso(data.createdAt),
    updatedAt: toIso(data.updatedAt),
  };
}

export function storyToFirestore(story: Partial<ContentStory>): Record<string, unknown> {
  return {
    title: story.title ?? '',
    slug: story.slug ?? '',
    showType: story.showType ?? 'Social Events',
    shortDescription: story.shortDescription ?? '',
    content: story.content ?? '',
    thumbnailUrl: story.thumbnailUrl ?? '',
    coverImageUrl: story.coverImageUrl ?? '',
    videoUrl: story.videoUrl ?? '',
    instagramUrl: story.instagramUrl ?? '',
    metaTitle: story.metaTitle ?? '',
    metaDescription: story.metaDescription ?? '',
    seoKeywords: story.seoKeywords ?? [],
    tags: story.tags ?? [],
    author: story.author ?? 'Admin',
    readingTime: story.readingTime ?? '3 min',
    featured: story.featured ?? false,
    status: story.status ?? 'draft',
    views: story.views ?? 0,
  };
}
