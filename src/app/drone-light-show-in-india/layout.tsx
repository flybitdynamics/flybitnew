import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.flybitdynamics.com';
const PAGE_PATH = '/drone-light-show-in-india';

export const metadata: Metadata = {
  title: 'Drone Light Show | Drone Light Show India | FLYBIT Dynamics',
  description:
    'Book a spectacular drone light show in India. FLYBIT Dynamics is India\'s premier drone light show company — DGCA-certified synchronized displays for weddings, corporate events, and festivals nationwide.',
  keywords: [
    'drone light show',
    'drone light show india',
    'drone light show company india',
    'best drone light show india',
    'drone show india',
    'drone light show company',
    'wedding drone light show india',
    'corporate drone light show india',
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: 'Drone Light Show | Drone Light Show India | FLYBIT Dynamics',
    description:
      'India\'s leading drone light show company. Book premium drone light show india displays for weddings, corporate launches, and festivals — 100–150 drones, nationwide.',
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: 'FLYBIT Dynamics',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Light Show | Drone Light Show India | FLYBIT Dynamics',
    description:
      'Book India\'s best drone light show and drone light show india services. DGCA-certified, nationwide.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${PAGE_PATH}#webpage`,
      url: `${SITE_URL}${PAGE_PATH}`,
      name: 'Drone Light Show India | FLYBIT Dynamics',
      description:
        'Book a spectacular drone light show in India. FLYBIT Dynamics delivers DGCA-certified synchronized drone light shows nationwide.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}${PAGE_PATH}#service`,
      name: 'Drone Light Show India',
      serviceType: 'Drone Light Show',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      description:
        'Premium drone light show services across India — synchronized aerial displays for weddings, corporate events, festivals, and government celebrations.',
      url: `${SITE_URL}${PAGE_PATH}`,
    },
  ],
};

export default function DroneLightShowInIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {children}
    </>
  );
}
