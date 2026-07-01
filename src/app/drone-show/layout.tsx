import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drone Show India | Spectacular Custom Sky Displays | FLYBIT",
  description: "FLYBIT Dynamics is the leading drone show provider in India. We deliver spectacular, synchronized drone shows for weddings, corporate events, and national celebrations.",
  keywords: [
    "drone show",
    "drone shows",
    "drone show india",
    "drone light show"
  ],
  alternates: {
    canonical: '/drone-show',
  }
};

export default function DroneShowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
