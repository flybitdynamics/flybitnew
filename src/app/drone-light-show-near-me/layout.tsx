import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drone Light Show Near Me | Best Swarm Shows in India | FLYBIT",
  description: "Find premium drone light shows near you. FLYBIT Dynamics designs safe, legal drone shows in Delhi NCR, Mumbai, Ahmedabad, Jaipur, Udaipur, and all major cities in India. Book a show today.",
  keywords: [
    "drone light show near me",
    "drone show near me",
    "drone show company in india",
    "drone light show india",
    "drone show india",
    "book drone show near me"
  ],
  alternates: {
    canonical: '/drone-light-show-near-me',
  }
};

export default function DroneShowNearMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
