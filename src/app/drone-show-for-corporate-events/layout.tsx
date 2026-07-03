import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Spectacular Drone Show for Corporate Events | FLYBIT Dynamics",
  description: "Engage your client network with a high-impact corporate event drone show. FLYBIT Dynamics coordinates VVIP logos, conference openings, and annual milestones.",
  keywords: [
    "drone show for corporate events",
    "corporate event drone show",
    "brand drone show",
    "corporate light show"
  ],
  alternates: {
    canonical: '/drone-show-for-corporate-events',
  }
};

export default function CorporateEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
