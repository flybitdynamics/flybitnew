import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPageView from '@/components/blog/BlogPageView';
import { getBlogBySlugServer, getRelatedBlogsServer } from '@/lib/blogs/queries-server';
import {
  buildBlogMetadata,
  buildBlogPostingJsonLd,
  buildBreadcrumbJsonLd,
  buildFAQPageJsonLd,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
} from '@/lib/blogs/seo';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlugServer(slug);
  if (!blog) return { title: 'Blog Not Found' };
  return buildBlogMetadata(blog);
}

export async function generateStaticParams() {
  const { getAllPublishedSlugsServer } = await import('@/lib/blogs/queries-server');
  const slugs = await getAllPublishedSlugsServer();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlugServer(slug);
  if (!blog) notFound();

  const relatedBlogs = await getRelatedBlogsServer(blog.slug, blog.category, 3);

  const postingLd = buildBlogPostingJsonLd(blog);
  const faqLd = buildFAQPageJsonLd(blog);
  const breadcrumbLd = buildBreadcrumbJsonLd(blog);
  const orgLd = buildOrganizationJsonLd();
  const websiteLd = buildWebSiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postingLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <BlogPageView blog={blog} relatedBlogs={relatedBlogs} />
    </>
  );
}
