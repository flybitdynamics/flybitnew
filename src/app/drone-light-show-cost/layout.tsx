import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drone Light Show Cost | Transparent Swarm Estimator | FLYBIT",
  description: "Check the drone light show cost. We offer clear pricing guidelines for sangeet, wedding, and corporate events across India.",
  keywords: [
    "drone light show cost",
    "drone light show cost in india",
    "drone show cost",
    "drone show cost in india"
  ],
  alternates: {
    canonical: '/drone-light-show-cost',
  }
};

export default function DroneLightShowCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
