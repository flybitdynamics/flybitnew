import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | FLYBIT Dynamics",
  description: "Read the Privacy Policy for FLYBIT Dynamics. Review our practices regarding data privacy, contact forms, cookies, and protection measures.",
  keywords: [
    "privacy policy",
    "flybit dynamics privacy",
    "data protection"
  ],
  alternates: {
    canonical: '/privacy',
  }
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
