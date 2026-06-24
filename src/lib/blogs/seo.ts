import type { BlogPost } from './types';
import { DEFAULT_BLOG_IMAGE, DEFAULT_LOGO } from '@/lib/public-assets';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.flybitdynamics.com';

export function getBlogCanonicalUrl(slug: string): string {
  return `${BASE}/blog/${slug}`;
}

export function buildBlogPostingJsonLd(blog: BlogPost) {
  const url = getBlogCanonicalUrl(blog.slug);
  const image = blog.image || DEFAULT_BLOG_IMAGE;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.description,
    image: [image],
    datePublished: blog.date || blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
    author: {
      '@type': 'Person',
      name: blog.author || 'FLYBIT Dynamics Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FLYBIT Dynamics',
      logo: {
        '@type': 'ImageObject',
        url: DEFAULT_LOGO,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: blog.tags.join(', '),
  };
}

export function buildBreadcrumbJsonLd(blog: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
      {
        '@type': 'ListItem',
        position: 3,
        name: blog.title,
        item: getBlogCanonicalUrl(blog.slug),
      },
    ],
  };
}

export function buildFAQPageJsonLd(blog: BlogPost) {
  if (!blog.faqs || blog.faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: blog.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FLYBIT Dynamics',
    url: BASE,
    logo: DEFAULT_LOGO,
    sameAs: [
      'https://twitter.com/flybitdynamics',
      'https://www.linkedin.com/company/flybitdynamics',
    ],
  };
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FLYBIT Dynamics',
    url: BASE,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE}/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildBlogMetadata(blog: BlogPost) {
  const title = `${blog.title} | FLYBIT Dynamics Blog`;
  const description = blog.description;
  const image = blog.image;
  const url = getBlogCanonicalUrl(blog.slug);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: blog.date || blog.createdAt,
      modifiedTime: blog.updatedAt || blog.createdAt,
      authors: [blog.author],
      tags: blog.tags,
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: blog.title }] } : {}),
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
    keywords: blog.tags,
  };
}
