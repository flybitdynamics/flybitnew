import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import StoryPageView from '@/components/stories/StoryPageView';
import { getStoryBySlugServer, getRelatedStoriesServer } from '@/lib/stories/queries-server';
import { buildStoryMetadata, buildArticleJsonLd, buildVideoJsonLd, buildBreadcrumbJsonLd } from '@/lib/stories/seo';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStoryBySlugServer(slug);
  if (!story) return { title: 'Story Not Found' };
  return buildStoryMetadata(story);
}

export async function generateStaticParams() {
  const { getAllPublishedSlugsServer } = await import('@/lib/stories/queries-server');
  const slugs = await getAllPublishedSlugsServer();
  return slugs.map((slug) => ({ slug }));
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const story = await getStoryBySlugServer(slug);
  if (!story) notFound();

  const relatedStories = await getRelatedStoriesServer(story.slug, story.showType, 3);

  const articleLd = buildArticleJsonLd(story);
  const videoLd = buildVideoJsonLd(story);
  const breadcrumbLd = buildBreadcrumbJsonLd(story);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {videoLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <StoryPageView story={story} relatedStories={relatedStories} />
    </>
  );
}
