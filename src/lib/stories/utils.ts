import type { ContentStory } from './types';

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function calculateReadingTime(html: string): string {
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text ? text.split(' ').length : 0;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min`;
}

export function formatStoryDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function truncateMeta(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 3).trim()}...`;
}

export function getStoryMetaTitle(story: ContentStory): string {
  const title = story.metaTitle || `${story.title} | FLYBIT Dynamics`;
  return truncateMeta(title, 60);
}

export function getStoryMetaDescription(story: ContentStory): string {
  const desc = story.metaDescription || story.shortDescription;
  return truncateMeta(desc, 155);
}

export function getCanonicalUrl(slug: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.flybitdynamics.com';
  return `${base.replace(/\/$/, '')}/stories/${slug}`;
}

/** Build an Instagram embed URL from a post/reel permalink. */
export function getInstagramEmbedUrl(url: string): string | null {
  const cleaned = url.split('?')[0].replace(/\/$/, '');
  const match = cleaned.match(/instagram\.com\/(p|reel|reels|tv)\/([A-Za-z0-9_-]+)/i);
  if (!match?.[1] || !match[2]) return null;

  const type = match[1].toLowerCase() === 'reels' ? 'reel' : match[1].toLowerCase();
  const shortcode = match[2];
  return `https://www.instagram.com/${type}/${shortcode}/embed`;
}
