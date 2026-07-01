import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drone Light Show Price | Swarm Light Costs | FLYBIT",
  description: "Check the drone light show price for custom swarms. We offer clear pricing guidelines for sangeet, wedding, and corporate events across India.",
  keywords: [
    "drone light show price",
    "drone light show price india",
    "drone show price",
    "price of drone show"
  ],
  alternates: {
    canonical: '/drone-light-show-price',
  }
};

export default function DroneLightShowPriceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
