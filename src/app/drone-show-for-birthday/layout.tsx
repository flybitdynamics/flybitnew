import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Drone Show for Birthday Parties | FLYBIT Dynamics",
  description: "Make your milestone birthday unforgettable with a spectacular birthday drone show. FLYBIT Dynamics coordinates name formations, surprise sky animations, and private estate safety runs.",
  keywords: [
    "drone show for birthday",
    "birthday drone show cost",
    "drone show birthday party",
    "private event drone show"
  ],
  alternates: {
    canonical: '/drone-show-for-birthday',
  }
};

export default function BirthdayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
