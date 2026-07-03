import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "National & Government Festival Drone Shows | FLYBIT Dynamics",
  description: "Illuminate public festivals and national summits safely. FLYBIT Dynamics coordinates fully compliant drone shows for government events and municipal tourism.",
  keywords: [
    "drone show for government",
    "government drone show cost",
    "national event drone show",
    "tourism drone show india"
  ],
  alternates: {
    canonical: '/drone-show-for-government',
  }
};

export default function GovernmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
