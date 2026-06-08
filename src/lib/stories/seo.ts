import type { ContentStory } from './types';
import { getCanonicalUrl, getStoryMetaDescription, getStoryMetaTitle } from './utils';

export function buildArticleJsonLd(story: ContentStory) {
  const url = getCanonicalUrl(story.slug);
  const image = story.coverImageUrl || story.thumbnailUrl || `${url}/og-default`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: story.title,
    description: getStoryMetaDescription(story),
    image: [image],
    datePublished: story.createdAt,
    dateModified: story.updatedAt,
    author: {
      '@type': 'Organization',
      name: story.author || 'FLYBIT Dynamics',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FLYBIT Dynamics',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.flybitdynamics.com'}/logo.png`,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: story.seoKeywords.join(', '),
  };
}

export function buildVideoJsonLd(story: ContentStory) {
  if (!story.videoUrl) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: story.title,
    description: story.shortDescription,
    thumbnailUrl: story.thumbnailUrl || story.coverImageUrl,
    uploadDate: story.createdAt,
    contentUrl: story.videoUrl,
  };
}

export function buildBreadcrumbJsonLd(story: ContentStory) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.flybitdynamics.com';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: 'Stories', item: `${base}/stories` },
      {
        '@type': 'ListItem',
        position: 3,
        name: story.title,
        item: getCanonicalUrl(story.slug),
      },
    ],
  };
}

export function buildStoryMetadata(story: ContentStory) {
  const title = getStoryMetaTitle(story);
  const description = getStoryMetaDescription(story);
  const image = story.coverImageUrl || story.thumbnailUrl;
  const url = getCanonicalUrl(story.slug);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: story.createdAt,
      modifiedTime: story.updatedAt,
      authors: [story.author],
      tags: story.tags,
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: story.title }] } : {}),
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
    keywords: story.seoKeywords,
  };
}
