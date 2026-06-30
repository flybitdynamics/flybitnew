import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Drone Show Company in Delhi NCR | FLYBIT Dynamics",
  description: "Spectacular drone light shows in Delhi, Noida, and Gurugram. Safe, DGCA-approved drone shows for national events, corporate launches, and premium weddings.",
  keywords: [
    "drone show delhi",
    "drone show in delhi",
    "drone light show delhi",
    "drone show company in delhi",
    "drone show ncr cost",
    "wedding drone show delhi"
  ],
  alternates: {
    canonical: '/drone-show-delhi',
  }
};

export default function DelhiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
