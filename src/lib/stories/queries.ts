import { SEED_STORIES } from './seed';
import type { ContentStory } from './types';

function sortStories(stories: ContentStory[]): ContentStory[] {
  return [...stories].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

function filterPublished(stories: ContentStory[]): ContentStory[] {
  return stories.filter((s) => s.status === 'published');
}

function seedPublished(limitCount?: number): ContentStory[] {
  const sorted = sortStories(filterPublished(SEED_STORIES));
  return limitCount ? sorted.slice(0, limitCount) : sorted;
}

async function fetchPublishedFromApi(limitCount?: number): Promise<ContentStory[] | null> {
  try {
    const params = new URLSearchParams();
    if (limitCount) params.set('limit', String(limitCount));
    const qs = params.toString();
    const res = await fetch(`/api/stories${qs ? `?${qs}` : ''}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data.stories)) return null;
    return data.stories as ContentStory[];
  } catch {
    return null;
  }
}

export async function getPublishedStories(limitCount?: number): Promise<ContentStory[]> {
  const fromApi = await fetchPublishedFromApi(limitCount);
  if (fromApi && fromApi.length > 0) return fromApi;
  return seedPublished(limitCount);
}

export async function getFeaturedStories(limitCount = 6): Promise<ContentStory[]> {
  const published = await getPublishedStories();
  const featured = published.filter((s) => s.featured);
  if (featured.length >= limitCount) return featured.slice(0, limitCount);
  const rest = published.filter((s) => !s.featured);
  return [...featured, ...rest].slice(0, limitCount);
}

export async function getStoryBySlug(slug: string): Promise<ContentStory | null> {
  try {
    const res = await fetch(`/api/stories/${encodeURIComponent(slug)}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data.story) return data.story as ContentStory;
    }
  } catch {
    /* fall through */
  }

  return SEED_STORIES.find((s) => s.slug === slug && s.status === 'published') ?? null;
}

export async function getRelatedStories(
  currentSlug: string,
  showType: string,
  limitCount = 3
): Promise<ContentStory[]> {
  const published = await getPublishedStories();
  const related = published
    .filter((s) => s.slug !== currentSlug && s.showType === showType)
    .slice(0, limitCount);

  if (related.length >= limitCount) return related;

  const others = published
    .filter((s) => s.slug !== currentSlug && s.showType !== showType)
    .slice(0, limitCount - related.length);

  return [...related, ...others];
}

export async function getAllPublishedSlugs(): Promise<string[]> {
  const stories = await getPublishedStories();
  return stories.map((s) => s.slug);
}

/** Client-side: fetch all stories for admin via server API (Admin SDK) */
export async function getAllStoriesAdmin(): Promise<ContentStory[]> {
  try {
    const res = await fetch('/api/admin/stories', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.stories)) return data.stories;
    }
  } catch {
    /* fall through */
  }
  return sortStories(SEED_STORIES);
}

export async function getStoryByIdAdmin(id: string): Promise<ContentStory | null> {
  try {
    const res = await fetch(`/api/admin/stories/${id}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data.story) return data.story as ContentStory;
    }
  } catch {
    /* fall through */
  }
  return SEED_STORIES.find((s) => s.id === id) ?? null;
}
