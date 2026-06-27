import type { Metadata } from 'next';
import { getPublishedBlogsServer } from '@/lib/blogs/queries-server';
import BlogListingPageView from '@/components/blog/BlogListingPageView';

export const revalidate = 60;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.flybitdynamics.com';

export const metadata: Metadata = {
  title: 'Insights, Stories & Innovations in Drone Technology | FLYBIT Dynamics Blog',
  description: 'In-depth technical guides, behind-the-scenes case studies, sangeet/wedding choreographies, and corporate drone show wisdom from FLYBIT Dynamics — weddings, corporate events, festivals, and national spectacles across India (Jaipur, Delhi, Gujarat, Ahmedabad).',
  keywords: [
    "Drone show india",
    "drone show rajasthan",
    "drone show jaipur",
    "drone show udaipur",
    "drone show delhi",
    "drone show gujarat",
    "Best drone show company in India",
    "premium drone show company in india",
    "drone shows in jaipur",
    "drone shows in ahmedabad",
    "drone shows in gujarat"
  ],
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
