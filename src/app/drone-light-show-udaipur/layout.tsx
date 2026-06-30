import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Drone Light Show in Udaipur | Cost & Booking | FLYBIT",
  description: "Illuminating Udaipur's lake skies. Custom drone light shows for destination weddings, luxury resorts, and celebrations in Udaipur, Rajasthan. Get a free estimate.",
  keywords: [
    "drone light show udaipur",
    "drone show udaipur",
    "drone show in udaipur",
    "udaipur drone show cost",
    "wedding drone show udaipur",
    "destination wedding drone show"
  ],
  alternates: {
    canonical: '/drone-light-show-udaipur',
  }
};

export default function UdaipurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
