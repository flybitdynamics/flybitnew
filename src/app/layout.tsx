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
  title: "Best Drone Show Company in India | FLYBIT Dynamics",
  description: "FLYBIT Dynamics delivers India's most spectacular drone light shows — weddings, corporate launches, festivals & national events. 100-250+ drones. Book now.",
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
    "corporate drone show india",
    "drone show cost in india",
    "drone light show price india"
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.flybitdynamics.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: "2UdPh9itL4H4EMhqwpl5L6XuIEebz5zQ3DziAkdLRHQ",
  }
};

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.flybitdynamics.com/#organization",
        "name": "FLYBIT Dynamics",
        "url": "https://www.flybitdynamics.com",
        "logo": "https://www.flybitdynamics.com/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/flybitdynamics/",
          "https://www.instagram.com/flybitdynamics",
          "https://www.youtube.com/@FlybitDynamics",
          "https://www.facebook.com/share/1DBPwVktrz/"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.flybitdynamics.com/#localbusiness",
        "name": "FLYBIT Dynamics",
        "image": "https://www.flybitdynamics.com/logo.png",
        "telephone": "+919979850863",
        "url": "https://www.flybitdynamics.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        },
        "priceRange": "$$$",
        "areaServed": ["India", "Ahmedabad", "Jaipur", "Udaipur", "Delhi", "Mumbai"]
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${cormorantGaramond.variable} ${dmSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body 
        className="bg-black text-text font-sans antialiased overflow-x-hidden md:cursor-none"
        suppressHydrationWarning
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
