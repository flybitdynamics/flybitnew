'use client';
import React, { useState } from 'react';
import ServiceImageSlider from './ServiceImageSlider';
import { SERVICE_IMAGES, type ServiceImageCategory } from '@/lib/services/serviceImages';

interface ServicesFilterDetailedProps {
  onOpenModal: (title: string, description: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'social', label: 'Social Events' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'government', label: 'Government' },
  { id: 'launch', label: 'Product Launch' },
  { id: 'spiritual', label: 'Spiritual' },
  { id: 'sports', label: 'Sports & Entertainment' },
];

type ServiceItem = {
  id: string;
  categories: string[];
  imageKey: ServiceImageCategory;
  modalTitle: string;
  modalDesc: string;
  eyebrow: string;
  title: string;
  description: string;
  pills: string[];
  cta: string;
  icon: React.ReactNode;
};

function VisualFrame({ imageKey, alt }: { imageKey: ServiceImageCategory; alt: string }) {
  const images = SERVICE_IMAGES[imageKey];

  return (
    <div className="flex justify-center lg:justify-end w-full">
      <div className="relative w-full max-w-[420px] aspect-[4/3] md:aspect-square md:max-w-[380px] md:h-[380px] bg-black border border-gold/10 rounded-[3px] overflow-hidden isolate">
        <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-gold/40 z-10 pointer-events-none" />
        <div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-gold/40 z-10 pointer-events-none" />
        <div className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-gold/40 z-10 pointer-events-none" />
        <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-gold/40 z-10 pointer-events-none" />
        <ServiceImageSlider images={images} alt={alt} />
      </div>
    </div>
  );
}

const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'social',
    categories: ['social'],
    imageKey: 'social',
    modalTitle: 'Social Events',
    modalDesc: 'Transform your most precious moments into magical aerial experiences that will be remembered for generations. From birthday spectaculars to anniversary tributes — love deserves to be written in the stars.',
    eyebrow: 'Social Events',
    title: 'Social Events',
    description: '"Because every milestone deserves the sky." Transform birthdays, anniversaries, and family reunions into magical aerial experiences that leave guests breathless.',
    pills: [
      'Custom names in the sky',
      'Birthday spectaculars',
      'Anniversary celebrations',
      'Love story animations',
      'Family reunion displays',
      'Proposal & celebration shows',
    ],
    cta: 'Get Quote for Social Events ➔',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'weddings',
    categories: ['weddings'],
    imageKey: 'weddings',
    modalTitle: 'Wedding Shows',
    modalDesc: 'From intimate 200-drone finales to 2000-drone grand celebrations — FLYBIT creates bespoke wedding drone shows with your initials, love story animations, and unforgettable sky finales above your guests.',
    eyebrow: 'Wedding Shows',
    title: 'Weddings',
    description: '"Your love story, written in light." From sangeet nights to grand finales — we choreograph initials, hearts, portraits, and cinematic sequences that make your wedding night unforgettable.',
    pills: [
      'Couple initials in the sky',
      'Wedding proposal shows',
      'Sangeet & reception finales',
      'Love story animations',
      'Portrait formations',
      'Grand wedding finales',
    ],
    cta: 'Get Quote for Weddings ➔',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    id: 'corporate',
    categories: ['corporate'],
    imageKey: 'corporate',
    modalTitle: 'Corporate Events',
    modalDesc: 'Elevate your corporate events with stunning aerial displays that showcase your brand values and create lasting impressions. Your brand deserves a grand canvas.',
    eyebrow: 'Corporate Events',
    title: 'Corporate',
    description: '"Your brand deserves a grand canvas." Elevate conferences, award nights, and brand events with aerial displays that go viral and generate press coverage worth 10× your investment.',
    pills: [
      'Logo animations in 3D',
      'Product launch reveals',
      'Conference openers',
      'Brand value storytelling',
      'Company milestone celebrations',
      'Award night finales',
    ],
    cta: 'Get Quote for Corporate ➔',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    id: 'government',
    categories: ['government'],
    imageKey: 'government',
    modalTitle: 'Government & National Events',
    modalDesc: 'Honor national pride with spectacular displays that celebrate our heritage, values, and achievements on the world stage. A new age of patriotic storytelling.',
    eyebrow: 'Government & National',
    title: 'Government',
    description: '"A new age of patriotic storytelling." Government and National Events like: Republic Day, Independence Day, G20 summits, and international events — full VVIP security clearances included.',
    pills: [
      'Republic Day celebrations',
      'Independence Day shows',
      'G20 & international events',
      'Cultural festival displays',
      'Tourism promotion shows',
      'National emblem formations',
    ],
    cta: 'Get Quote for Government ➔',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9h.01M9 12h.01M9 15h.01M9 18h.01" />
      </svg>
    ),
  },
  {
    id: 'launch',
    categories: ['launch'],
    imageKey: 'launch',
    modalTitle: 'Product Launches',
    modalDesc: 'Create buzz and excitement for your product launches with countdown displays, 3D reveals, and memorable brand messages. From sky to spotlight — launch like never before.',
    eyebrow: 'Product Launch',
    title: 'Product Launches',
    description: '"From sky to spotlight — launch like never before." A product reveal through hundreds of drone lights in the night sky generates press coverage, social virality, and audience awe — all in one unforgettable moment.',
    pills: [
      'Countdown sequences',
      '3D product reveals',
      'Brand message displays',
      'Tech & automobile showcases',
      'Fashion show openers',
      'Launch event finales',
    ],
    cta: 'Get Quote for Product Launch ➔',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 'spiritual',
    categories: ['spiritual'],
    imageKey: 'spiritual',
    modalTitle: 'Spiritual Gatherings',
    modalDesc: 'Create divine experiences with sacred symbols, deities, and spiritual geometry that inspire and uplift souls. Merge devotion with wonder.',
    eyebrow: 'Spiritual Gatherings',
    title: 'Spiritual',
    description: '"Merge devotion with wonder." Create divine aerial experiences with sacred symbols — Om, Khanda, Trishul, deity portraits — that inspire and uplift thousands of souls gathered in devotion.',
    pills: [
      'Om and spiritual symbols',
      'Deity representations',
      'Sacred geometry displays',
      'Religious ceremony shows',
      'Festival celebrations',
      'Temple inauguration finales',
    ],
    cta: 'Get Quote for Spiritual ➔',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    id: 'sports',
    categories: ['sports'],
    imageKey: 'sports',
    modalTitle: 'Sports & Entertainment',
    modalDesc: 'Electrify your audience with dynamic displays featuring team mascots, stadium activations, and high-energy pre-show entertainment. Energize your arena from the sky.',
    eyebrow: 'Sports & Entertainment',
    title: 'Sports',
    description: '"Energize your arena from the sky." Electrify your audience with team mascot animations, Olympic-scale stadium activations, and high-energy pre-game entertainment that builds to a roar.',
    pills: [
      'Team mascot animations',
      'Stadium activations',
      'Pre-game entertainment',
      'Victory celebrations',
      'Concert openers',
      'Festival activations',
    ],
    cta: 'Get Quote for Sports ➔',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    id: 'custom',
    categories: ['social', 'weddings', 'corporate', 'government', 'launch', 'spiritual', 'sports'],
    imageKey: 'custom',
    modalTitle: 'Bespoke Custom Formations',
    modalDesc: 'Anything you can imagine, we can build 150 metres above the ground. Custom portraits, brand mascots, animated 3D sequences — our in-house design team brings any vision to life.',
    eyebrow: 'Custom Formations',
    title: 'Bespoke Custom Formations',
    description: 'Have something extraordinary in mind? Our in-house animation and choreography team can create any formation — portraits, mascots, multi-sequence narratives, or fully animated 3D stories in the sky.',
    pills: [
      'Full custom design studio',
      '3D animated sequences',
      'Portraits & mascots',
      'Brand narrative stories',
      'Multi-formation choreography',
      'Any vision you imagine',
    ],
    cta: 'Discuss Your Vision ➔',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
];

function ServiceFeaturedCard({
  service,
  onOpenModal,
}: {
  service: ServiceItem;
  onOpenModal: (title: string, description: string) => void;
}) {
  return (
    <div
      className="srv-card bg-dark p-8 md:p-14 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.02] border-b border-border/10 cursor-none"
      onClick={() => onOpenModal(service.modalTitle, service.modalDesc)}
    >
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-12 h-12 border border-gold/20 rounded-[2px] flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/40 transition-colors duration-300">
            {service.icon}
          </div>

          <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2">{service.eyebrow}</div>
          <h3 className="font-cormorant text-[2rem] text-text mb-4">{service.title}</h3>

          <p className="text-[0.85rem] text-text-muted leading-[1.9] max-w-[480px] font-sans">{service.description}</p>

          <div className="grid grid-cols-2 gap-2.5 mt-8 max-w-[500px]">
            {service.pills.map((pill) => (
              <div
                key={pill}
                className="text-[0.72rem] text-text-muted py-2 px-3.5 border border-border/30 rounded-[2px] tracking-wide hover:border-gold/20 transition-all font-sans"
              >
                ⚡ {pill}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-8 text-[0.68rem] tracking-[0.18em] uppercase text-gold-dim group-hover:text-gold group-hover:gap-4 transition-all duration-300 font-sans">
            {service.cta}
          </div>
        </div>

        <VisualFrame imageKey={service.imageKey} alt={service.title} />
      </div>
    </div>
  );
}

export default function ServicesFilterDetailed({ onOpenModal }: ServicesFilterDetailedProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const matchesCategory = (cardCats: string[]) => {
    if (activeCategory === 'all') return true;
    return cardCats.includes(activeCategory);
  };

  const visibleServices = SERVICE_ITEMS.filter((service) => matchesCategory(service.categories));

  return (
    <section id="services" className="bg-black px-6 md:px-20 border-t border-border/40">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12">
          <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-4">
            Service Categories
          </div>
          <h2 className="sec-title font-cormorant text-[clamp(2.4rem,5vw,4.2rem)] font-light text-text leading-[1.08]">
            Every Vision, <span className="text-gold italic">Airborne</span>
          </h2>
        </div>

        <div className="srv-filter flex gap-2 flex-wrap mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 font-sans text-[0.7rem] tracking-[0.14em] uppercase border transition-all duration-300 rounded-[2px] cursor-none ${
                activeCategory === cat.id
                  ? 'bg-gold border-gold text-black font-medium'
                  : 'bg-transparent border-border hover:border-gold hover:text-gold text-text-muted'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-[2px] bg-border/20 rounded-[3px] overflow-hidden">
          {visibleServices.map((service) => (
            <ServiceFeaturedCard key={service.id} service={service} onOpenModal={onOpenModal} />
          ))}
        </div>
      </div>
    </section>
  );
}
