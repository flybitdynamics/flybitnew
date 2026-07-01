import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | FLYBIT Dynamics",
  description: "Read the Terms of Service for FLYBIT Dynamics. Review our guidelines for flight permissions, weather cancelations, sangeet/wedding bookings, and safety zones.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "flybit dynamics terms"
  ],
  alternates: {
    canonical: '/terms',
  }
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
