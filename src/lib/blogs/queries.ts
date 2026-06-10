import { SEED_BLOGS } from './seed';
import type { BlogPost } from './types';

function sortBlogs(blogs: BlogPost[]): BlogPost[] {
  return [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

async function fetchPublishedFromApi(limitCount?: number): Promise<BlogPost[] | null> {
  try {
    const params = new URLSearchParams();
    if (limitCount) params.set('limit', String(limitCount));
    const qs = params.toString();
    const res = await fetch(`/api/blogs${qs ? `?${qs}` : ''}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data.blogs)) return null;
    return data.blogs as BlogPost[];
  } catch {
    return null;
  }
}

export async function getPublishedBlogs(limitCount?: number): Promise<BlogPost[]> {
  const fromApi = await fetchPublishedFromApi(limitCount);
  if (fromApi && fromApi.length > 0) return fromApi;
  const seed = SEED_BLOGS.filter((b) => b.published || b.status === 'published');
  return limitCount ? seed.slice(0, limitCount) : seed;
}

export async function getFeaturedBlogs(limitCount = 6): Promise<BlogPost[]> {
  const published = await getPublishedBlogs();
  const featured = published.filter((b) => b.featured);
  if (featured.length >= limitCount) return featured.slice(0, limitCount);
  const rest = published.filter((b) => !b.featured);
  return [...featured, ...rest].slice(0, limitCount);
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`/api/blogs/${encodeURIComponent(slug)}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data.blog) return data.blog as BlogPost;
    }
  } catch {
    /* fall through */
  }

  return SEED_BLOGS.find((b) => b.slug === slug && (b.published || b.status === 'published')) ?? null;
}

export async function getRelatedBlogs(
  currentSlug: string,
  category: string,
  limitCount = 3
): Promise<BlogPost[]> {
  const published = await getPublishedBlogs();
  const related = published
    .filter((b) => b.slug !== currentSlug && b.category.toLowerCase() === category.toLowerCase())
    .slice(0, limitCount);

  if (related.length >= limitCount) return related;

  const others = published
    .filter((b) => b.slug !== currentSlug && b.category.toLowerCase() !== category.toLowerCase())
    .slice(0, limitCount - related.length);

  return [...related, ...others];
}

export async function getAllBlogsAdmin(): Promise<BlogPost[]> {
  try {
    const res = await fetch('/api/admin/blogs', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.blogs)) return data.blogs;
    }
  } catch {
    /* fall through */
  }
  return sortBlogs(SEED_BLOGS);
}

export async function getBlogByIdAdmin(id: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`/api/admin/blogs/${id}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data.blog) return data.blog as BlogPost;
    }
  } catch {
    /* fall through */
  }
  return SEED_BLOGS.find((b) => b.id === id) ?? null;
}
