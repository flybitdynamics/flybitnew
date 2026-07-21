import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drone Light Show India | Premium Swarm Performances | FLYBIT",
  description: "Experience the best drone light show india services. FLYBIT Dynamics delivers fully approved, spectacular drone light shows nationwide.",
  keywords: [
    "drone light show india",
    "drone show india",
    "best drone light show company in india",
    "drone light show company"
  ],
  alternates: {
    canonical: '/drone-light-show-in-india',
  }
};

export default function DroneLightShowIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
