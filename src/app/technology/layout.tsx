import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Advanced Drone Show Technology | FLYBIT Dynamics",
  description: "Discover our state-of-the-art precision drone technology, hardware, and software. Delivering safe and magnificent drone light shows across Jaipur, Udaipur, Gujarat, Delhi, and India.",
  keywords: [
    "drone show india",
    "Best drone show company in India",
    "premium drone show company in india",
    "drone show rajasthan",
    "drone show jaipur",
    "drone show udaipur",
    "drone show delhi",
    "drone show gujarat",
    "drone shows in jaipur",
    "drone shows in ahmedabad",
    "drone shows in gujarat",
    "drone light show india",
    "drone show technology"
  ],
  alternates: {
    canonical: '/technology',
  }
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
