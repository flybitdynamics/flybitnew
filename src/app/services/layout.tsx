import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drone Show Services in India | FLYBIT Dynamics",
  description: "Explore our drone show services for weddings, corporate launches, festivals, and national events. Premier drone show provider in Jaipur, Udaipur, Delhi, and Gujarat.",
  keywords: [
    "drone show india",
    "Best drone show company in India",
    "premium drone show company in india",
    "drone show rajasthan",
    "drone show jaipur",
    "drone show udaipur",
    "drone show delhi",
    "drone show gujarat",
    "drone shows in jaipur",
    "drone shows in ahmedabad",
    "drone shows in gujarat",
    "wedding drone show india",
    "corporate drone show india"
  ],
  alternates: {
    canonical: '/services',
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
