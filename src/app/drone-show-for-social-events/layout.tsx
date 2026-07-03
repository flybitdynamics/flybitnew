import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bespoke Drone Show for Social Events | FLYBIT Dynamics",
  description: "Transform private galas, community gatherings, and reunions with a custom social event drone show. FLYBIT Dynamics coordinates permissions and custom animations.",
  keywords: [
    "drone show for social events",
    "social event drone show",
    "private party drone show",
    "community drone show"
  ],
  alternates: {
    canonical: '/drone-show-for-social-events',
  }
};

export default function SocialEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
