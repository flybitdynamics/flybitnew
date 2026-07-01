import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Premium Drone Show Company | Professional Air Swarms | FLYBIT",
  description: "FLYBIT Dynamics is a premium drone show company delivering world-class aerial storytelling and military-grade swarm technology across India.",
  keywords: [
    "drone show company",
    "drone show company in india",
    "drone light show company"
  ],
  alternates: {
    canonical: '/drone-show-company',
  }
};

export default function DroneShowCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
