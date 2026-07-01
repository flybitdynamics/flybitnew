import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Premium Drone Light Shows | Stunning Sky Choreography | FLYBIT",
  description: "Transform your event with spectacular drone light shows. FLYBIT Dynamics is India's leading drone light show company.",
  keywords: [
    "drone light show",
    "drone light show company",
    "drone show",
    "drone show company"
  ],
  alternates: {
    canonical: '/drone-light-show',
  }
};

export default function DroneLightShowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
