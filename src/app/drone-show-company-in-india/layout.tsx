import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Drone Show Company in India | Premium Swarm Swarms | FLYBIT",
  description: "Learn about FLYBIT Dynamics, the premier drone show company in India. We plan safe, legal drone shows nationwide.",
  keywords: [
    "drone show company in india",
    "best drone show company in india",
    "drone light show company in india"
  ],
  alternates: {
    canonical: '/drone-show-company-in-india',
  }
};

export default function DroneShowCompanyInIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
