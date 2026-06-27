import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About FLYBIT Dynamics | Premium Drone Show Company in India",
  description: "Learn about FLYBIT Dynamics, the premier drone light show company in India. We design spectacular, precision drone light shows across Jaipur, Udaipur, Delhi, Gujarat, and Ahmedabad.",
  keywords: [
    "premium drone show company in india",
    "Best drone show company in India",
    "drone show india",
    "drone show rajasthan",
    "drone show gujarat",
    "drone show delhi",
    "drone show jaipur",
    "drone show udaipur",
    "drone shows in jaipur",
    "drone shows in ahmedabad",
    "drone shows in gujarat"
  ],
  alternates: {
    canonical: '/about',
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
