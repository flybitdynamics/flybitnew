import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Premium Drone Show for Product Launch | FLYBIT Dynamics",
  description: "Create unmatched brand virality with a product launch drone show. FLYBIT Dynamics designs 3D product representations, logos, and glowing brand slogans.",
  keywords: [
    "drone show for product launch",
    "product launch drone show cost",
    "brand activation drone show",
    "marketing campaign drone show"
  ],
  alternates: {
    canonical: '/drone-show-for-product-launch',
  }
};

export default function ProductLaunchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
