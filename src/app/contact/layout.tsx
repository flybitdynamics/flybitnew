import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact FLYBIT Dynamics | Best Drone Show Company in India",
  description: "Get in touch with FLYBIT Dynamics to book premium drone light shows. Enquire for weddings, corporate events, and festivals in Delhi, Jaipur, Udaipur, Ahmedabad, Gujarat, Rajasthan, and nationwide.",
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
    "book drone show india"
  ],
  alternates: {
    canonical: '/contact',
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
