import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Drone Show Portfolio | Drone Show Rajasthan, Delhi, Gujarat — FLYBIT Dynamics',
  description:
    'Experience the best drone show company in India. View case studies and reels of our spectacular drone light shows in Jaipur, Udaipur, Ahmedabad, Gujarat, Rajasthan, and Delhi.',
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
  openGraph: {
    title: 'Our Drone Show Portfolio | FLYBIT Dynamics',
    description:
      'Drone light show gallery, reels, and case studies across Jaipur, Udaipur, Delhi, and Ahmedabad from the best drone show company in India.',
    type: 'website',
  },
};

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
