import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drone Show Cost | Transparent Pricing Packages | FLYBIT",
  description: "How much does a drone show cost? View package details for 100-300+ drone light displays, licensing fees, and transport costs.",
  keywords: [
    "drone show cost",
    "drone show cost in india",
    "drone light show cost",
    "price of drone show"
  ],
  alternates: {
    canonical: '/drone-show-cost',
  }
};

export default function DroneShowCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
