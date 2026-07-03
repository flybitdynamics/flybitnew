import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Premium Drone Show for Corporate Events | FLYBIT Dynamics",
  description: "Engage your clients and partners with a high-impact corporate event drone show. FLYBIT Dynamics coordinates VVIP logos, conference openings, and annual milestones.",
  keywords: [
    "drone show for corporate",
    "corporate event drone show",
    "brand drone show",
    "conference drone show"
  ],
  alternates: {
    canonical: '/drone-show-for-corporate',
  }
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
