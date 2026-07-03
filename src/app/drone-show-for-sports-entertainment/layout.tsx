import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sports & Concert Drone Shows | FLYBIT Dynamics",
  description: "Thrill stadium audiences and concert crowds. FLYBIT Dynamics coordinates stadium halftime shows, massive countdown clocks, and custom concert visualizers.",
  keywords: [
    "drone show for sports and entertainment",
    "concert drone show",
    "stadium drone show",
    "music festival drone show"
  ],
  alternates: {
    canonical: '/drone-show-for-sports-entertainment',
  }
};

export default function SportsEntertainmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
