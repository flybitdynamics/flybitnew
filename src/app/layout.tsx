import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Drone Show Company in India | FLYBIT Dynamics — Drone Light Shows",
  description: "FLYBIT Dynamics is the premium drone show company in India. We design spectacular, precision-engineered drone light shows for weddings, corporate launches, national celebrations, and private events across Jaipur, Udaipur, Rajasthan, Delhi, Gujarat, Ahmedabad, and nationwide.",
  keywords: [
    "Drone show india",
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
    "drone light show india",
    "wedding drone show india",
    "corporate drone show india"
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${cormorantGaramond.variable} ${dmSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body 
        className="bg-black text-text font-sans antialiased overflow-x-hidden md:cursor-none"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
