import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drone Light Show | Stunning Sky Choreography | FLYBIT Dynamics",
  description: "Transform your event with a spectacular drone light show. FLYBIT Dynamics is India's leading drone light show company — book drone light show india displays nationwide.",
  keywords: [
    "drone light show",
    "drone light show india",
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
