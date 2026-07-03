import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bespoke Drone Show for Weddings | FLYBIT Dynamics",
  description: "Illuminate your wedding sky with a synchronized wedding drone show. FLYBIT Dynamics coordinates custom initials, hearts, sangeet and wedding receptions.",
  keywords: [
    "drone show for wedding",
    "wedding drone show india",
    "drone light show wedding",
    "sangeet drone show"
  ],
  alternates: {
    canonical: '/drone-show-for-wedding',
  }
};

export default function WeddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
