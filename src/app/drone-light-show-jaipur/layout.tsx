import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Drone Light Show in Jaipur | Cost & Booking | FLYBIT",
  description: "Breathe life into the Pink City's heritage sky. Custom drone light shows in Jaipur, Rajasthan for royal destination weddings, sangeet, and corporate openings.",
  keywords: [
    "drone light show jaipur",
    "drone show jaipur",
    "drone light show jaipur cost",
    "wedding drone show jaipur"
  ],
  alternates: {
    canonical: '/drone-light-show-jaipur',
  }
};

export default function DroneLightShowJaipurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
