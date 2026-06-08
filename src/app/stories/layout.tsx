import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stories & Insights | FLYBIT Dynamics',
  description:
    'Explore drone light show reels, case studies, and long-form articles from FLYBIT Dynamics — weddings, corporate events, festivals, and national spectacles across India.',
  openGraph: {
    title: 'Stories & Insights | FLYBIT Dynamics',
    description:
      'Reels, case studies, and insights from India\'s premier drone light show company.',
    type: 'website',
  },
};

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
