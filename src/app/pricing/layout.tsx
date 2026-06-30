import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drone Show Cost in India 2026 | Pricing Guide | FLYBIT",
  description: "How much does a drone show cost in India? See real pricing for 100-300+ drone shows, what affects the price, and get a custom quote from FLYBIT Dynamics.",
  keywords: [
    "drone show cost",
    "price of drone show",
    "drone light show price",
    "drone light show cost",
    "drone show price",
    "drone show cost in india",
    "drone light show cost in india",
    "drone show pricing india"
  ],
  alternates: {
    canonical: '/pricing',
  }
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
