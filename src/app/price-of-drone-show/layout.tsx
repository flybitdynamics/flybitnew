import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Price of Drone Show | Swarm Packages & Estimates | FLYBIT",
  description: "What is the price of a drone show in India? Compare standard packages for 100-300+ drone swarms and get a custom quote.",
  keywords: [
    "price of drone show",
    "drone show price",
    "drone show cost in india",
    "drone light show price"
  ],
  alternates: {
    canonical: '/price-of-drone-show',
  }
};

export default function PriceOfDroneShowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
