import type { Timestamp } from 'firebase/firestore';
import type { BlogPost, BlogPostFaq, BlogStatus } from './types';

function toIso(value: unknown): string {
  if (!value) return new Date().toISOString();
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && value !== null && 'toDate' in value) {
    return (value as Timestamp).toDate().toISOString();
  }
  return new Date().toISOString();
}

export function mapFirestoreDoc(id: string, data: Record<string, unknown>): BlogPost {
  return {
    id,
    title: String(data.title || ''),
    slug: String(data.slug || ''),
    description: String(data.description || ''),
    content: String(data.content || ''),
    date: String(data.date || new Date().toISOString().split('T')[0]),
    author: String(data.author || 'Admin'),
    authorImage: String(data.authorImage || '/logo.png'),
    authorBio: String(data.authorBio || ''),
    category: String(data.category || 'Technology'),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    image: String(data.image || '/about_hero.png'),
    featured: Boolean(data.featured),
    published: Boolean(data.published),
    status: (data.status === 'draft' ? 'draft' : 'published') as BlogStatus,
    views: typeof data.views === 'number' ? data.views : 0,
    readingTime: String(data.readingTime || '3 min'),
    faqs: Array.isArray(data.faqs) ? (data.faqs as BlogPostFaq[]) : [],
    createdAt: toIso(data.createdAt),
    updatedAt: toIso(data.updatedAt),
  };
}

export function blogToFirestore(blog: Partial<BlogPost>): Record<string, unknown> {
  return {
    title: blog.title ?? '',
    slug: blog.slug ?? '',
    description: blog.description ?? '',
    content: blog.content ?? '',
    date: blog.date ?? new Date().toISOString().split('T')[0],
    author: blog.author ?? 'Admin',
    authorImage: blog.authorImage ?? '/logo.png',
    authorBio: blog.authorBio ?? '',
    category: blog.category ?? 'Technology',
    tags: blog.tags ?? [],
    image: blog.image ?? '/about_hero.png',
    featured: blog.featured ?? false,
    published: blog.published ?? false,
    status: blog.status ?? 'draft',
    views: blog.views ?? 0,
    readingTime: blog.readingTime ?? '3 min',
    faqs: blog.faqs ?? [],
  };
}
