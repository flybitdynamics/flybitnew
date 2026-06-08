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
  title: "FLYBIT Dynamics — India's Premier Drone Light Show",
  description: "We paint your sky with 1000+ precision drones — crafting breathtaking aerial spectacles for weddings, corporate events, and national celebrations across India.",
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
        className="bg-black text-text font-sans antialiased overflow-x-hidden select-none md:cursor-none"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
