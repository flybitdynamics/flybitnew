import { getPublishedBlogsDb, getBlogBySlugDb } from './admin-db';
import { getStaticBlogs } from './mdx';
import type { BlogPost } from './types';

// Helper to merge and sort db and static blogs
export async function getPublishedBlogsServer(limitCount?: number): Promise<BlogPost[]> {
  const dbBlogs = await getPublishedBlogsDb();
  let staticBlogs: BlogPost[] = [];
  
  try {
    staticBlogs = getStaticBlogs();
  } catch (e) {
    console.error('Failed to load static blogs:', e);
  }

  // Merge, prioritizing Firestore blogs if slugs match
  const blogMap = new Map<string, BlogPost>();
  for (const sb of staticBlogs) {
    blogMap.set(sb.slug, sb);
  }

  const activeSlugs = new Set<string>();
  for (const db of dbBlogs) {
    let finalSlug = db.slug;
    if (activeSlugs.has(finalSlug)) {
      finalSlug = `${db.slug}-${db.id}`;
      db.slug = finalSlug;
    }
    activeSlugs.add(finalSlug);
    blogMap.set(finalSlug, db);
  }

  const merged = Array.from(blogMap.values()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return limitCount ? merged.slice(0, limitCount) : merged;
}

export async function getBlogBySlugServer(slug: string): Promise<BlogPost | null> {
  // Check if slug ends with a 20-character Firestore ID (alphanumeric)
  const idMatch = slug.match(/-([a-zA-Z0-9]{20})$/);
  if (idMatch) {
    const id = idMatch[1];
    const { getBlogByIdAdminDb } = await import('./admin-db');
    const dbBlog = await getBlogByIdAdminDb(id);
    if (dbBlog) {
      dbBlog.slug = slug;
      return dbBlog;
    }
  }

  // Try Firestore first
  const dbBlog = await getBlogBySlugDb(slug);
  if (dbBlog) return dbBlog;

  // Try static MDX
  try {
    const staticBlogs = getStaticBlogs();
    const found = staticBlogs.find((b) => b.slug === slug);
    if (found) return found;
  } catch (e) {
    console.error('Failed to load static blogs:', e);
  }

  return null;
}

export async function getRelatedBlogsServer(
  currentSlug: string,
  category: string,
  limitCount = 3
): Promise<BlogPost[]> {
  const published = await getPublishedBlogsServer();
  const related = published
    .filter((b) => b.slug !== currentSlug && b.category.toLowerCase() === category.toLowerCase())
    .slice(0, limitCount);

  if (related.length >= limitCount) return related;

  // Fill up with others if not enough related in same category
  const others = published
    .filter((b) => b.slug !== currentSlug && b.category.toLowerCase() !== category.toLowerCase())
    .slice(0, limitCount - related.length);

  return [...related, ...others];
}

export async function getAllPublishedSlugsServer(): Promise<string[]> {
  const blogs = await getPublishedBlogsServer();
  return blogs.map((b) => b.slug);
}
