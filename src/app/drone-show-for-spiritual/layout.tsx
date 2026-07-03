import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Spiritual & Temple Festival Drone Shows | FLYBIT Dynamics",
  description: "Animate divine stories across the night sky. FLYBIT Dynamics coordinates custom drone shows for spiritual gatherings, temple trusts, and heritage festivals.",
  keywords: [
    "drone show for spiritual",
    "spiritual drone show india",
    "temple drone show",
    "cultural festival drone show"
  ],
  alternates: {
    canonical: '/drone-show-for-spiritual',
  }
};

export default function SpiritualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
