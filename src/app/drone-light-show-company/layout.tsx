import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Professional Drone Light Show Company | FLYBIT Dynamics",
  description: "Learn about FLYBIT Dynamics, India's leading drone light show company. We design and animate bespoke swarm light displays.",
  keywords: [
    "drone light show company",
    "drone show company",
    "best drone light show company in india",
    "drone show company in india"
  ],
  alternates: {
    canonical: '/drone-light-show-company',
  }
};

export default function DroneLightShowCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
