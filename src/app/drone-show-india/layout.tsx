import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drone Show India | Swarm Light Displays nationwide | FLYBIT",
  description: "Experience premium drone show india services. FLYBIT Dynamics delivers synchronized drone displays across all major locations in India.",
  keywords: [
    "drone show india",
    "drone show company in india",
    "drone light show india",
    "drone light show"
  ],
  alternates: {
    canonical: '/drone-show-india',
  }
};

export default function DroneShowIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
