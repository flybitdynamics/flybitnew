import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Drone Show Company in Ahmedabad, Gujarat | FLYBIT",
  description: "Illuminating the sky of Ahmedabad. Precision drone light shows for corporate launches, Navratri festivals, and weddings across Gujarat. Book FLYBIT Dynamics today.",
  keywords: [
    "drone show ahmedabad",
    "drone show in ahmedabad",
    "drone light show ahmedabad",
    "drone show company in gujarat",
    "ahmedabad drone show cost",
    "corporate drone show gujarat"
  ],
  alternates: {
    canonical: '/drone-show-ahmedabad',
  }
};

export default function AhmedabadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
