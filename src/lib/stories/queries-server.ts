import {
  getPublishedStoriesDb,
  getStoryBySlugDb,
} from './admin-db';
import type { ContentStory } from './types';

export async function getPublishedStoriesServer(limitCount?: number): Promise<ContentStory[]> {
  return getPublishedStoriesDb(limitCount);
}

export async function getStoryBySlugServer(slug: string): Promise<ContentStory | null> {
  return getStoryBySlugDb(slug);
}

export async function getRelatedStoriesServer(
  currentSlug: string,
  showType: string,
  limitCount = 3
): Promise<ContentStory[]> {
  const published = await getPublishedStoriesServer();
  const related = published.filter((s) => s.slug !== currentSlug && s.showType === showType).slice(0, limitCount);
  if (related.length >= limitCount) return related;
  const others = published
    .filter((s) => s.slug !== currentSlug && s.showType !== showType)
    .slice(0, limitCount - related.length);
  return [...related, ...others];
}

export async function getAllPublishedSlugsServer(): Promise<string[]> {
  const stories = await getPublishedStoriesServer();
  return stories.map((s) => s.slug);
}
