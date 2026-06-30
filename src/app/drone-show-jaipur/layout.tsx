import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Drone Show Company in Jaipur | Drone Light Shows | FLYBIT",
  description: "Host spectacular drone light shows in Jaipur. FLYBIT Dynamics is India's leading drone show provider for royal weddings, corporate events, and festivals in Rajasthan.",
  keywords: [
    "drone show jaipur",
    "drone show in jaipur",
    "drone light show jaipur",
    "drone light show jaipur cost",
    "drone show company in rajasthan",
    "wedding drone show jaipur"
  ],
  alternates: {
    canonical: '/drone-show-jaipur',
  }
};

export default function JaipurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
