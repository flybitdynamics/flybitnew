import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | FLYBIT Dynamics",
  description: "Have questions about drone light shows? Find answers regarding pricing packages, swarm sizes, wind/weather policies, and DGCA flight approvals.",
  keywords: [
    "drone show faq",
    "frequently asked questions",
    "flybit dynamics faq"
  ],
  alternates: {
    canonical: '/faqs',
  }
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
