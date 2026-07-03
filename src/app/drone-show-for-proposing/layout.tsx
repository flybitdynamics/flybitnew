import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Surprise Drone Show for Proposing | FLYBIT Dynamics",
  description: "Plan the ultimate marriage proposal with a custom drone show. FLYBIT Dynamics designs diamond rings, double hearts, and Will You Marry Me text in the sky.",
  keywords: [
    "drone show for proposing",
    "proposal drone show cost",
    "will you marry me drone show",
    "surprise proposal drone show"
  ],
  alternates: {
    canonical: '/drone-show-for-proposing',
  }
};

export default function ProposingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
