import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drone Show Price | Transparent Package Pricing | FLYBIT",
  description: "Check the drone show price for custom swarms. We offer clear pricing guidelines for sangeet, wedding, and corporate events across India.",
  keywords: [
    "drone show price",
    "drone show pricing india",
    "drone light show price",
    "price of drone show"
  ],
  alternates: {
    canonical: '/drone-show-price',
  }
};

export default function DroneShowPriceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
