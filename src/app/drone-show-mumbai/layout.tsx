import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Drone Show Company in Mumbai | FLYBIT Dynamics",
  description: "Illuminating Mumbai skies. High-density drone shows in Mumbai for corporate milestones, weddings, sports openings, and entertainment events. DGCA certified.",
  keywords: [
    "drone show mumbai",
    "drone show in mumbai",
    "drone light show mumbai",
    "drone show company in mumbai",
    "mumbai drone show cost",
    "wedding drone show mumbai"
  ],
  alternates: {
    canonical: '/drone-show-mumbai',
  }
};

export default function MumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
