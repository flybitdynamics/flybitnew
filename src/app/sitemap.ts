import type { MetadataRoute } from 'next';
import { getAllPublishedSlugsServer } from '@/lib/stories/queries-server';
import { getAllPublishedSlugsServer as getBlogSlugs } from '@/lib/blogs/queries-server';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.flybitdynamics.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllPublishedSlugsServer();
  const blogSlugs = await getBlogSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/pricing`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/technology`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stories`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/drone-show-jaipur`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/drone-light-show-udaipur`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/drone-show-ahmedabad`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/drone-show-delhi`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/drone-show-mumbai`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ];

  const storyRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE}/stories/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...storyRoutes, ...blogRoutes];
}
