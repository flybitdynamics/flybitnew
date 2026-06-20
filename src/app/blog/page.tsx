import type { Metadata } from 'next';
import { getPublishedBlogsServer } from '@/lib/blogs/queries-server';
import BlogListingPageView from '@/components/blog/BlogListingPageView';

export const revalidate = 60;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.flybitdynamics.com';

export const metadata: Metadata = {
  title: 'Insights, Stories & Innovations in Drone Technology | FLYBIT Dynamics Blog',
  description: 'In-depth technical guides, behind-the-scenes case studies, sangeet/wedding choreographies, and corporate drone show wisdom from FLYBIT Dynamics.',
  alternates: {
    canonical: `${BASE}/blog`,
  },
  openGraph: {
    title: 'Insights, Stories & Innovations in Drone Technology | FLYBIT Dynamics Blog',
    description: 'In-depth technical guides, behind-the-scenes case studies, sangeet/wedding choreographies, and corporate drone show wisdom from FLYBIT Dynamics.',
    url: `${BASE}/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights, Stories & Innovations in Drone Technology | FLYBIT Dynamics Blog',
    description: 'In-depth technical guides, behind-the-scenes case studies, sangeet/wedding choreographies, and corporate drone show wisdom from FLYBIT Dynamics.',
  },
};

export default async function BlogPage() {
  const blogs = await getPublishedBlogsServer();

  return <BlogListingPageView blogs={blogs} />;
}
