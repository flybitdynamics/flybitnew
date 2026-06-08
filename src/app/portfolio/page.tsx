'use client';

import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

// Reels Data
const reelsData: Record<string, {
  title: string;
  desc: string;
  tag: string;
  duration: string;
  bgClass?: string;
  bgStyle?: React.CSSProperties;
  info: string;
  subInfo: string;
  svg: React.ReactNode;
}> = {
  reel1: {
    title: 'Royal Wedding — Jaipur',
    desc: '200 drones created a glowing heart formation over the palace grounds for this dreamy November wedding. Duration: 2 min 34 sec.',
    tag: 'WEDDING',
    duration: '2:34',
    bgClass: 'reel-bg-1',
    info: 'Royal Wedding — Jaipur',
    subInfo: '200 drone heart formation',
    svg: (
      <svg viewBox="0 0 300 533" className="absolute inset-0 w-full h-full opacity-70" xmlns="http://www.w3.org/2000/svg">
        <g fill="var(--gold)">
          <circle cx="150" cy="220" r="3" /><circle cx="140" cy="210" r="3" /><circle cx="130" cy="205" r="3" />
          <circle cx="120" cy="208" r="3" /><circle cx="113" cy="218" r="3" /><circle cx="115" cy="228" r="3" />
          <circle cx="125" cy="238" r="3" /><circle cx="135" cy="248" r="3" /><circle cx="150" cy="265" r="3" />
          <circle cx="160" cy="210" r="3" /><circle cx="170" cy="205" r="3" /><circle cx="180" cy="208" r="3" />
          <circle cx="187" cy="218" r="3" /><circle cx="185" cy="228" r="3" /><circle cx="175" cy="238" r="3" />
          <circle cx="165" cy="248" r="3" />
          <circle cx="150" cy="220" r="5" fill="rgba(201, 168, 76, 0.3)" />
        </g>
        <ellipse cx="150" cy="480" rx="80" ry="12" fill="rgba(201, 168, 76, 0.15)" />
        <circle cx="50" cy="80" r="1.2" fill="#fff" opacity="0.8" />
        <circle cx="240" cy="60" r="1" fill="#fff" opacity="0.6" />
        <circle cx="80" cy="150" r="1" fill="#fff" opacity="0.5" />
        <circle cx="220" cy="140" r="1.5" fill="#fff" opacity="0.7" />
        <circle cx="30" cy="200" r="1" fill="#fff" opacity="0.4" />
        <circle cx="270" cy="180" r="1.2" fill="#fff" opacity="0.6" />
        <g fill="rgba(201, 168, 76, 0.2)" fontSize="8" fontFamily="monospace">
          <circle cx="60" cy="420" r="2" /><circle cx="90" cy="415" r="2" /><circle cx="120" cy="418" r="2" />
          <circle cx="150" cy="412" r="2" /><circle cx="180" cy="415" r="2" /><circle cx="210" cy="420" r="2" />
          <circle cx="240" cy="416" r="2" />
        </g>
      </svg>
    )
  },
  reel2: {
    title: 'Brand Launch — Mumbai',
    desc: 'A 500-drone logo animation above the Bandra-Kurla Complex marking the grand launch of a Fortune 500 brand. Duration: 1 min 58 sec.',
    tag: 'CORPORATE',
    duration: '1:58',
    bgClass: 'reel-bg-2',
    info: 'Brand Launch — Mumbai',
    subInfo: '500 drone logo animation',
    svg: (
      <svg viewBox="0 0 300 533" className="absolute inset-0 w-full h-full opacity-75" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none">
          <rect x="120" y="170" width="12" height="80" fill="var(--gold)" rx="2" />
          <rect x="120" y="170" width="55" height="12" fill="var(--gold)" rx="2" />
          <rect x="120" y="205" width="40" height="11" fill="var(--gold)" rx="2" />
        </g>
        <ellipse cx="150" cy="250" rx="100" ry="30" fill="none" stroke="rgba(201, 168, 76, 0.2)" strokeWidth="1.5" strokeDasharray="6,4" />
        <ellipse cx="150" cy="250" rx="130" ry="40" fill="none" stroke="rgba(201, 168, 76, 0.1)" strokeWidth="1" strokeDasharray="4,6" />
        <circle cx="250" cy="250" r="4" fill="var(--gold)" />
        <circle cx="70" cy="230" r="3.5" fill="var(--color-gold-light)" />
        <circle cx="200" cy="218" r="3" fill="var(--gold)" />
        <circle cx="40" cy="50" r="1.2" fill="#fff" opacity="0.7" />
        <circle cx="260" cy="100" r="1" fill="#fff" opacity="0.5" />
        <circle cx="100" cy="120" r="1.5" fill="#fff" opacity="0.8" />
        <circle cx="230" cy="80" r="1" fill="#fff" opacity="0.6" />
        <g fill="rgba(255,255,255,0.08)">
          <circle cx="80" cy="490" r="3" /><circle cx="100" cy="488" r="3" /><circle cx="120" cy="492" r="3" />
          <circle cx="140" cy="487" r="3" /><circle cx="160" cy="490" r="3" /><circle cx="180" cy="488" r="3" />
          <circle cx="200" cy="491" r="3" /><circle cx="220" cy="489" r="3" />
        </g>
      </svg>
    )
  },
  reel3: {
    title: 'Diwali Spectacular — Delhi',
    desc: '350 drones traced expanding mandala patterns across the Delhi sky on Diwali night, captivating 50,000+ viewers. Duration: 3 min 12 sec.',
    tag: 'FESTIVAL',
    duration: '3:12',
    bgClass: 'reel-bg-3',
    info: 'Diwali Spectacular — Delhi',
    subInfo: '350 drones · Mandala formations',
    svg: (
      <svg viewBox="0 0 300 533" className="absolute inset-0 w-full h-full opacity-75" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" strokeWidth="1">
          <circle cx="150" cy="240" r="20" stroke="rgba(201, 168, 76, 0.9)" />
          <circle cx="150" cy="240" r="40" stroke="rgba(201, 168, 76, 0.65)" />
          <circle cx="150" cy="240" r="60" stroke="rgba(201, 168, 76, 0.45)" />
          <circle cx="150" cy="240" r="85" stroke="rgba(201, 168, 76, 0.25)" />
        </g>
        <g fill="var(--gold)">
          <circle cx="150" cy="200" r="3" />
          <circle cx="190" cy="240" r="3" />
          <circle cx="150" cy="280" r="3" />
          <circle cx="110" cy="240" r="3" />
          <circle cx="180" cy="208" r="2.5" />
          <circle cx="192" cy="268" r="2.5" />
          <circle cx="120" cy="272" r="2.5" />
          <circle cx="108" cy="212" r="2.5" />
        </g>
        <g stroke="var(--color-gold-light)" strokeWidth="1.5" opacity="0.5">
          <line x1="150" y1="100" x2="150" y2="130" />
          <line x1="190" y1="112" x2="175" y2="135" />
          <line x1="218" y1="140" x2="200" y2="155" />
          <line x1="110" y1="112" x2="125" y2="135" />
          <line x1="82" y1="140" x2="100" y2="155" />
        </g>
        <circle cx="30" cy="70" r="1.5" fill="#fff" opacity="0.9" />
        <circle cx="270" cy="50" r="1" fill="#fff" opacity="0.7" />
        <circle cx="60" cy="170" r="1" fill="#fff" opacity="0.5" />
        <circle cx="250" cy="160" r="1.3" fill="#fff" opacity="0.8" />
        <circle cx="90" cy="370" r="1" fill="#fff" opacity="0.4" />
        <ellipse cx="150" cy="500" rx="120" ry="20" fill="rgba(201, 168, 76, 0.1)" />
      </svg>
    )
  },
  reel4: {
    title: 'IPL Opening — Ahmedabad',
    desc: 'Narendra Modi Stadium lit up with a ring-shaped drone formation to kick off the IPL season opener. Duration: 1 min 45 sec.',
    tag: 'SPORTS',
    duration: '1:45',
    bgStyle: { background: 'linear-gradient(135deg, #06110a, #060611, #11060a)' },
    info: 'IPL Opening — Ahmedabad',
    subInfo: 'Stadium drone display',
    svg: (
      <svg viewBox="0 0 300 533" className="absolute inset-0 w-full h-full opacity-70">
        <g fill="none" strokeWidth="2">
          <circle cx="110" cy="240" r="28" stroke="var(--gold)" opacity="0.8" />
          <circle cx="150" cy="240" r="28" stroke="var(--color-gold-light)" opacity="0.8" />
          <circle cx="190" cy="240" r="28" stroke="var(--gold)" opacity="0.8" />
        </g>
        <g fill="var(--gold)">
          <circle cx="82" cy="240" r="3.5" /><circle cx="138" cy="240" r="3.5" /><circle cx="162" cy="240" r="3.5" /><circle cx="218" cy="240" r="3.5" />
          <circle cx="110" cy="212" r="3" /><circle cx="110" cy="268" r="3" />
          <circle cx="150" cy="212" r="3" /><circle cx="150" cy="268" r="3" />
          <circle cx="190" cy="212" r="3" /><circle cx="190" cy="268" r="3" />
        </g>
        <circle cx="40" cy="90" r="1.2" fill="#fff" opacity="0.7" />
        <circle cx="260" cy="80" r="1" fill="#fff" opacity="0.5" />
        <circle cx="200" cy="400" r="1.5" fill="#fff" opacity="0.6" />
      </svg>
    )
  },
  reel5: {
    title: 'Independence Day — New Delhi',
    desc: 'India\'s largest drone show — 500 drones painting the map of India and the Tricolour above Kartavya Path. Duration: 4 min.',
    tag: 'NATIONAL',
    duration: '4:00',
    bgStyle: { background: 'linear-gradient(135deg, #110606, #06110e, #111106)' },
    info: 'Independence Day — New Delhi',
    subInfo: 'Largest India formation',
    svg: (
      <svg viewBox="0 0 300 533" className="absolute inset-0 w-full h-full opacity-70">
        <path d="M150,140 L185,160 L200,200 L195,250 L185,285 L160,320 L150,360 L140,320 L115,285 L105,250 L100,200 L115,160 Z" fill="rgba(201, 168, 76, 0.25)" stroke="var(--gold)" strokeWidth="1.5" />
        <g fill="var(--gold)">
          <circle cx="150" cy="140" r="3" /><circle cx="185" cy="160" r="2.5" /><circle cx="200" cy="200" r="2.5" />
          <circle cx="195" cy="250" r="3" /><circle cx="160" cy="320" r="2.5" /><circle cx="150" cy="360" r="3" />
          <circle cx="140" cy="320" r="2.5" /><circle cx="105" cy="250" r="3" /><circle cx="100" cy="200" r="2.5" />
          <circle cx="115" cy="160" r="2.5" />
          <circle cx="150" cy="230" r="5" fill="rgba(201, 168, 76, 0.4)" />
        </g>
        <circle cx="50" cy="60" r="1.2" fill="#fff" opacity="0.8" />
        <circle cx="250" cy="90" r="1" fill="#fff" opacity="0.6" />
        <circle cx="80" cy="400" r="1.3" fill="#fff" opacity="0.5" />
      </svg>
    )
  },
  reel6: {
    title: 'Beachside Wedding — Goa',
    desc: 'A star and wave formation above the Arabian Sea during sunset, creating a magical backdrop for the evening ceremony. Duration: 2 min 20 sec.',
    tag: 'DESTINATION',
    duration: '2:20',
    bgStyle: { background: 'linear-gradient(135deg, #060611, #110a06, #061106)' },
    info: 'Beachside Wedding — Goa',
    subInfo: 'Seaside star formation',
    svg: (
      <svg viewBox="0 0 300 533" className="absolute inset-0 w-full h-full opacity-70">
        <g fill="none" stroke="var(--gold)" strokeWidth="1.5">
          <polygon points="150,170 180,220 120,220" opacity="0.8" />
          <polygon points="150,270 180,220 120,220" opacity="0.8" />
        </g>
        <g fill="var(--gold)">
          <circle cx="150" cy="170" r="4" /><circle cx="180" cy="220" r="4" /><circle cx="120" cy="220" r="4" />
          <circle cx="150" cy="270" r="4" />
          <circle cx="150" cy="220" r="5" fill="rgba(201, 168, 76, 0.5)" />
        </g>
        <g stroke="rgba(201, 168, 76, 0.25)" strokeWidth="1">
          <line x1="150" y1="270" x2="140" y2="340" />
          <line x1="150" y1="270" x2="155" y2="340" />
          <line x1="150" y1="270" x2="165" y2="330" />
        </g>
        <circle cx="260" cy="70" r="1.5" fill="#fff" opacity="0.9" />
        <circle cx="40" cy="110" r="1" fill="#fff" opacity="0.6" />
        <circle cx="220" cy="430" r="1.2" fill="#fff" opacity="0.5" />
      </svg>
    )
  }
};

// Portfolio Items Data
const portfolioCards = [
  {
    category: 'wedding',
    categoryLabel: 'Wedding',
    featured: true,
    title: 'Sharma × Patel — Lake Palace Wedding',
    description: 'A 5-minute show above the serene waters of Udaipur\'s famous Lake Palace. 300 drones composed a heart, a couple dancing, and their initials in the sky.',
    tags: ['300 Drones', 'Udaipur', 'Custom Story'],
    bgStyle: { background: 'linear-gradient(135deg, #110826, #081120)' },
    svg: (
      <svg viewBox="0 0 600 260" className="w-full h-full absolute inset-0 opacity-80">
        <text x="300" y="90" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="42" fontWeight="800" fill="var(--gold)" opacity="0.25">SHARMA × PATEL</text>
        <g fill="var(--gold)">
          <circle cx="210" cy="150" r="3" /><circle cx="200" cy="142" r="3" /><circle cx="190" cy="138" r="3" />
          <circle cx="180" cy="140" r="3" /><circle cx="173" cy="150" r="3" />
          <circle cx="175" cy="160" r="3" /><circle cx="185" cy="170" r="3" />
          <circle cx="210" cy="190" r="3" />
          <circle cx="220" cy="142" r="3" /><circle cx="230" cy="138" r="3" />
          <circle cx="240" cy="140" r="3" /><circle cx="247" cy="150" r="3" />
          <circle cx="245" cy="160" r="3" /><circle cx="235" cy="170" r="3" />
          <circle cx="225" cy="180" r="3" />
        </g>
        <text x="400" y="160" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="18" fontWeight="700" fill="var(--gold)">UDAIPUR LAKE PALACE</text>
        <text x="400" y="185" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="13" fill="rgba(255,255,255,0.45)">Nov 2024 · 300 Drones</text>
      </svg>
    )
  },
  {
    category: 'corporate',
    categoryLabel: 'Corporate',
    featured: false,
    title: 'TATA Group Annual Summit',
    description: '200-drone logo reveal above BKC, Mumbai for their annual leadership summit.',
    tags: ['200 Drones', 'Mumbai'],
    bgStyle: { background: 'linear-gradient(135deg, #040e15, #08150a)' },
    svg: (
      <svg viewBox="0 0 300 170" className="w-full h-full absolute inset-0 opacity-85">
        <circle cx="150" cy="85" r="50" fill="none" stroke="rgba(201, 168, 76, 0.4)" strokeWidth="1.5" strokeDasharray="8,5" />
        <circle cx="150" cy="85" r="30" fill="none" stroke="rgba(201, 168, 76, 0.6)" strokeWidth="1.5" />
        <text x="150" y="90" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="16" fontWeight="800" fill="var(--gold)">TATA</text>
        <g fill="var(--color-gold-light)"><circle cx="200" cy="85" r="3.5" /><circle cx="100" cy="85" r="3.5" /><circle cx="150" cy="35" r="3.5" /><circle cx="150" cy="135" r="3.5" /></g>
      </svg>
    )
  },
  {
    category: 'festival',
    categoryLabel: 'Festival',
    featured: false,
    title: 'Kumbh Mela 2025 — Prayagraj',
    description: 'A spiritual 400-drone show depicting the sacred Ganga and celestial mandala patterns.',
    tags: ['400 Drones', 'Prayagraj'],
    bgStyle: { background: 'linear-gradient(135deg, #110605, #060a06)' },
    svg: (
      <svg viewBox="0 0 300 170" className="w-full h-full absolute inset-0 opacity-8">
        <circle cx="150" cy="85" r="22" fill="none" stroke="rgba(201, 168, 76, 0.9)" strokeWidth="2" />
        <circle cx="150" cy="85" r="45" fill="none" stroke="rgba(201, 168, 76, 0.55)" strokeWidth="1.5" />
        <circle cx="150" cy="85" r="65" fill="none" stroke="rgba(201, 168, 76, 0.3)" strokeWidth="1" />
        <g fill="var(--gold)"><circle cx="150" cy="20" r="3" /><circle cx="215" cy="85" r="3" /><circle cx="150" cy="150" r="3" /><circle cx="85" cy="85" r="3" /></g>
      </svg>
    )
  },
  {
    category: 'national',
    categoryLabel: 'National Event',
    featured: false,
    title: 'Republic Day — Kartavya Path',
    description: '500 drones painting the Tricolour above Kartavya Path, New Delhi in India\'s largest drone show.',
    tags: ['500 Drones', 'New Delhi', 'Record'],
    bgStyle: { background: 'linear-gradient(135deg, #060a11, #040904)' },
    svg: (
      <svg viewBox="0 0 300 170" className="w-full h-full absolute inset-0 opacity-85">
        <rect x="100" y="55" width="100" height="60" fill="none" stroke="rgba(201, 168, 76, 0.5)" strokeWidth="1.5" rx="3" />
        <rect x="105" y="60" width="90" height="18" fill="rgba(255,100,50,0.3)" />
        <rect x="105" y="78" width="90" height="18" fill="rgba(240,200,80,0.3)" />
        <rect x="105" y="96" width="90" height="18" fill="rgba(50,160,80,0.3)" />
        <circle cx="150" cy="85" r="12" fill="none" stroke="rgba(201, 168, 76, 0.8)" strokeWidth="2" />
        <g fill="var(--gold)">
          <circle cx="150" cy="73" r="2.5" /><circle cx="162" cy="85" r="2.5" /><circle cx="150" cy="97" r="2.5" /><circle cx="138" cy="85" r="2.5" />
        </g>
      </svg>
    )
  },
  {
    category: 'wedding',
    categoryLabel: 'Wedding',
    featured: false,
    title: 'Rohan × Ananya — Beachside Goa',
    description: 'Intimate 150-drone show weaving monograms, stars and a dance across the Goa night sky.',
    tags: ['150 Drones', 'Goa'],
    bgStyle: { background: 'linear-gradient(135deg, #0e0615, #060e15)' },
    svg: (
      <svg viewBox="0 0 300 170" className="w-full h-full absolute inset-0 opacity-8">
        <text x="150" y="95" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="38" fontWeight="800" fill="rgba(201, 168, 76, 0.7)">R × A</text>
        <circle cx="150" cy="85" r="68" fill="none" stroke="rgba(201, 168, 76, 0.2)" strokeWidth="1" strokeDasharray="6,4" />
        <g fill="var(--gold)"><circle cx="82" cy="85" r="3" /><circle cx="218" cy="85" r="3" /><circle cx="150" cy="17" r="3" /><circle cx="150" cy="153" r="3" /></g>
      </svg>
    )
  },
  {
    category: 'corporate',
    categoryLabel: 'Corporate',
    featured: false,
    title: 'Stock Exchange Listing — Bangalore',
    description: 'A rising graph formation above Brigade Road celebrating a major IPO listing night.',
    tags: ['180 Drones', 'Bangalore'],
    bgStyle: { background: 'linear-gradient(135deg, #04080d, #0a0506)' },
    svg: (
      <svg viewBox="0 0 300 170" className="w-full h-full absolute inset-0 opacity-8">
        <line x1="80" y1="130" x2="110" y2="90" stroke="var(--gold)" strokeWidth="2" /><circle cx="110" cy="90" r="4" fill="var(--gold)" />
        <line x1="110" y1="90" x2="140" y2="110" stroke="var(--gold)" strokeWidth="2" /><circle cx="140" cy="110" r="4" fill="var(--gold)" />
        <line x1="140" y1="110" x2="170" y2="70" stroke="var(--gold)" strokeWidth="2" /><circle cx="170" cy="70" r="4" fill="var(--gold)" />
        <line x1="170" y1="70" x2="200" y2="55" stroke="var(--gold)" strokeWidth="2" /><circle cx="200" cy="55" r="4" fill="var(--gold)" />
        <line x1="200" y1="55" x2="230" y2="45" stroke="var(--color-gold-light)" strokeWidth="2.5" /><circle cx="230" cy="45" r="5" fill="var(--color-gold-light)" />
      </svg>
    )
  }
];

export default function PortfolioPage() {
  const [stars, setStars] = useState<{ size: number; top: number; left: number; delay: number; duration: number; opacity: number }[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');

  // Reel modal state
  const [activeReelKey, setActiveReelKey] = useState<string | null>(null);
  const [reelModalOpen, setReelModalOpen] = useState(false);

  // Booking modal state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingModalTitle, setBookingModalTitle] = useState('');
  const [bookingModalDesc, setBookingModalDesc] = useState('');

  // Star Field Generation
  useEffect(() => {
    const generatedStars = [];
    for (let i = 0; i < 120; i++) {
      generatedStars.push({
        size: Math.random() * 2 + 0.5,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
        opacity: Math.random() * 0.7 + 0.1,
      });
    }
    setStars(generatedStars);
  }, []);

  const openReelModal = (key: string) => {
    setActiveReelKey(key);
    setReelModalOpen(true);
  };

  const closeReelModal = () => {
    setReelModalOpen(false);
    setActiveReelKey(null);
  };

  const openBookingModal = (title: string, desc: string) => {
    setBookingModalTitle(title);
    setBookingModalDesc(desc);
    setBookingModalOpen(true);
  };

  const currentReel = activeReelKey ? (reelsData as any)[activeReelKey] : null;

  return (
    <div className="portfolio-container min-h-screen font-sans selection:bg-gold selection:text-black relative">
      <Navbar onOpenModal={openBookingModal} />

      {/* Hero section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="star-field">
          {stars.map((star, idx) => (
            <div
              key={idx}
              className="star"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>

        <div className="hero-content mx-auto select-none">
          <div className="hero-tag font-sans">✦ Our Work</div>
          <h1 className="font-cormorant text-[clamp(2.8rem,7vw,5.5rem)] font-light text-text leading-tight mb-8">
            Where the Sky <br className="hidden md:block" /> Becomes a <em className="text-gold italic font-cormorant">Canvas</em>
          </h1>
          <p className="text-base text-text-muted max-w-[560px] mx-auto mb-14 leading-[1.8] font-sans">
            Every show we create is a one-of-a-kind story written across the night sky. Explore our drone light show portfolio.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num font-bebas">150+</span>
              <span className="hero-stat-label font-sans">Shows Performed</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num font-bebas">500+</span>
              <span className="hero-stat-label font-sans">Drones Fleet</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num font-bebas">30+</span>
              <span className="hero-stat-label font-sans">Cities Covered</span>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <span className="font-sans">Scroll to explore</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Reels Grid (Magic in Motion) */}
      <section className="reels-section">
        <div className="section-tag font-sans">✦ Highlight Reels</div>
        <h2 className="section-title font-cormorant font-light text-text">See the Magic in Motion</h2>
        <p className="section-sub font-sans">
          Watch our drone formations light up the night at weddings, corporate events, and grand celebrations across India.
        </p>

        <div className="reels-grid">
          {Object.entries(reelsData).map(([key, reel]) => (
            <div key={key} className="reel-card" onClick={() => openReelModal(key)}>
              <div className={reel.bgClass} style={{ position: 'absolute', inset: 0, ...(reel.bgStyle || {}) }}>
                {reel.svg}
              </div>
              <div className="reel-badge font-sans">{reel.tag}</div>
              <div className="reel-duration font-sans">{reel.duration}</div>
              <div className="reel-play-btn">
                <svg viewBox="0 0 24 24">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
              <div className="reel-overlay">
                <div className="reel-info font-sans">
                  <h3 className="font-bebas text-lg tracking-wider text-text">{reel.info}</h3>
                  <p className="text-text-muted mt-1 text-xs">{reel.subInfo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Portfolio Grid Section */}
      {/* <section className="bg-black">
        <div className="section-tag font-sans">✦ Full Portfolio</div>
        <h2 className="section-title font-cormorant font-light text-text">Every Show, a Story</h2>
        <p className="section-sub font-sans">
          From intimate 100-drone weddings to grand 500-drone national events — each performance is crafted with precision.
        </p>

        <div className="filter-bar font-sans">
          {[
            { id: 'all', label: 'All Shows' },
            { id: 'wedding', label: 'Weddings' },
            { id: 'corporate', label: 'Corporate' },
            { id: 'festival', label: 'Festivals' },
            { id: 'national', label: 'National Events' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {portfolioCards
            .filter((card) => activeFilter === 'all' || card.category === activeFilter)
            .map((card, idx) => (
              <div
                key={idx}
                className={`portfolio-card ${card.featured ? 'featured' : ''}`}
                onClick={() => openBookingModal('Enquire About Showcase', `Let us know if you'd like to book a show inspired by: ${card.title}`)}
              >
                <div className="portfolio-img">
                  <div className="portfolio-img-content" style={card.bgStyle}>
                    {card.svg}
                  </div>
                </div>
                <div className="portfolio-meta font-sans">
                  <div className="portfolio-cat">{card.categoryLabel}</div>
                  <h3 className="font-bebas text-xl tracking-wider text-text">{card.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mt-2">{card.description}</p>
                  <div className="portfolio-tags">
                    {card.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="portfolio-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section> */}

      {/* Clients Section */}
      {/* <div className="clients-section bg-black border-t border-border">
        <div className="section-tag font-sans">✦ Trusted By</div>
        <h2 className="section-title font-cormorant font-light text-text text-[1.8rem]">
          India's Biggest Names Choose FLYBIT
        </h2>
        <div className="clients-logos font-sans">
          {['TATA GROUP', 'INFOSYS', 'TIMES OF INDIA', 'PVRINOX', 'AMBANI EVENTS', 'ADANI', 'SONY LIV'].map((logo, idx) => (
            <span key={idx} className="client-logo">
              {logo}
            </span>
          ))}
        </div>
      </div> */}

      {/* CTA section */}
      <section className="cta-section relative overflow-hidden">
        <div className="cta-glow" />
        <div className="section-tag font-sans">✦ Book Your Show</div>
        <h2 className="font-cormorant font-light text-text mb-4 text-4xl md:text-5xl leading-tight">
          Ready to Light Up <br className="hidden md:block" /> <em className="text-gold italic font-cormorant">Your Sky?</em>
        </h2>
        <p className="text-text-muted text-base max-w-[480px] mx-auto mb-10 leading-relaxed font-sans">
          Tell us your vision. We'll turn it into a formation of light you and your guests will never forget.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => openBookingModal('Get a Free Quote', 'Provide your event details to receive a customized quote for your show.')}
            className="bg-gold hover:bg-gold-light text-black font-semibold px-9 py-4 text-[0.8rem] tracking-[0.15em] uppercase rounded-[2px] transition-all duration-200 cursor-pointer hover:-translate-y-0.5 font-sans"
          >
            Get a Free Quote
          </button>
          <button
            onClick={() => openReelModal('reel1')}
            className="border border-text/20 hover:border-gold text-text hover:text-gold font-medium px-9 py-4 text-[0.8rem] tracking-[0.15em] uppercase rounded-[2px] transition-all duration-200 cursor-pointer hover:-translate-y-0.5 font-sans"
          >
            Watch Full Showreel
          </button>
        </div>
      </section>

      {/* Footer component */}
      <Footer onOpenModal={openBookingModal} />

      {/* Reel custom Modal */}
      {reelModalOpen && currentReel && (
        <div className="modal-bg open" onClick={(e) => { if (e.target === e.currentTarget) closeReelModal(); }}>
          <div className="modal font-sans select-none">
            <button className="modal-close" onClick={closeReelModal}>✕</button>
            <div className="modal-reel-area bg-black">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" className="w-12 h-12 text-gold animate-pulse">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10,8 16,12 10,16" fill="var(--gold)" />
              </svg>
              <span className="text-gold text-xs tracking-wider uppercase mt-4">Tap to play reel</span>
              <span style={{ fontSize: '0.72rem', opacity: 0.5 }}>Upload your video to embed here</span>
            </div>
            <h3 className="font-bebas text-2xl text-gold mt-6 tracking-wider">
              {currentReel.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mt-2">
              {currentReel.desc}
            </p>
          </div>
        </div>
      )}

      {/* Booking Form and Info Detail Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        title={bookingModalTitle}
        description={bookingModalDesc}
      />

      <style jsx>{`
        .portfolio-container {
          --gold: #C9A84C;
          --gold-light: #F0D080;
          --gold-dim: #7a6530;
          --bg: #060607;
          --bg2: #0b0b0d;
          --bg3: #111114;
          --text: #EDE8DF;
          --muted: #7a7468;
          --border: rgba(201, 168, 76, 0.12);
          
          background: var(--bg);
          color: var(--text);
        }

        .portfolio-container .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 140px 5% 80px;
          position: relative;
          overflow: hidden;
        }
        .portfolio-container .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201, 168, 76, 0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201, 168, 76, 0.05) 0%, transparent 60%);
        }
        .portfolio-container .star-field {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .portfolio-container .star {
          position: absolute;
          border-radius: 50%;
          background: #fff;
          animation: twinkle 3s infinite alternate;
        }
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }

        .portfolio-container .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }
        .portfolio-container .hero-tag {
          display: inline-block;
          background: rgba(201, 168, 76, 0.12);
          border: 1px solid var(--border);
          color: var(--gold);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          padding: 6px 18px;
          border-radius: 100px;
          margin-bottom: 2rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        .portfolio-container .hero-stats {
          display: flex;
          gap: 3rem;
          justify-content: center;
          margin-top: 3rem;
        }
        .portfolio-container .hero-stat {
          text-align: center;
        }
        .portfolio-container .hero-stat-num {
          font-size: 2.2rem;
          color: var(--gold);
          display: block;
          line-height: 1.2;
        }
        .portfolio-container .hero-stat-label {
          font-size: 0.75rem;
          color: var(--muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .portfolio-container .scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--muted);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        .portfolio-container .scroll-hint svg {
          width: 18px;
          height: 18px;
        }

        .portfolio-container section {
          padding: 100px 5%;
        }
        .portfolio-container .section-tag {
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 0.8rem;
          text-align: center;
        }
        .portfolio-container .section-title {
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1.2rem;
          text-align: center;
        }
        .portfolio-container .section-sub {
          color: var(--muted);
          font-size: 0.95rem;
          max-width: 540px;
          line-height: 1.7;
          margin: 0 auto 3rem;
          text-align: center;
        }

        .portfolio-container .filter-bar {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin: 3rem 0 3.5rem;
        }
        .portfolio-container .filter-btn {
          background: transparent;
          border: 1px solid rgba(201, 168, 76, 0.15);
          color: var(--muted);
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.2s;
        }
        .portfolio-container .filter-btn:hover {
          border-color: var(--gold);
          color: var(--text);
        }
        .portfolio-container .filter-btn.active {
          background: var(--gold);
          border-color: var(--gold);
          color: #000;
          font-weight: 500;
        }

        .portfolio-container .reels-section {
          background: var(--bg2);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .portfolio-container .reels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 3rem;
        }

        .portfolio-container .reel-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: var(--bg3);
          border: 1px solid var(--border);
          aspect-ratio: 9/16;
        }
        .portfolio-container .reel-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(201, 168, 76, 0.15);
        }
        .portfolio-container .reel-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(6, 6, 7, 0.88) 0%, transparent 55%);
          display: flex;
          align-items: flex-end;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .portfolio-container .reel-card:hover .reel-overlay {
          opacity: 1;
        }

        .portfolio-container .reel-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 52px;
          height: 52px;
          background: rgba(201, 168, 76, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s, transform 0.3s;
        }
        .portfolio-container .reel-play-btn svg {
          width: 20px;
          height: 20px;
          margin-left: 3px;
          fill: #000;
        }
        .portfolio-container .reel-card:hover .reel-play-btn {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.06);
        }

        .portfolio-container .reel-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: var(--gold);
          color: #000;
          font-weight: 700;
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          padding: 4px 10px;
          border-radius: 100px;
          z-index: 10;
        }
        .portfolio-container .reel-duration {
          position: absolute;
          bottom: 14px;
          right: 14px;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          background: rgba(0, 0, 0, 0.55);
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.04em;
          z-index: 10;
        }

        .portfolio-container .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
          margin-top: 2rem;
        }
        .portfolio-container .portfolio-card {
          border-radius: 12px;
          overflow: hidden;
          background: var(--bg3);
          border: 1px solid var(--border);
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
        }
        .portfolio-container .portfolio-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(201, 168, 76, 0.12);
        }
        .portfolio-container .portfolio-card.featured {
          grid-column: span 2;
        }
        .portfolio-container .portfolio-img {
          width: 100%;
          aspect-ratio: 16/9;
          background: var(--bg3);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .portfolio-container .portfolio-card.featured .portfolio-img {
          aspect-ratio: 21/9;
        }
        .portfolio-container .portfolio-img-content {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .portfolio-container .portfolio-meta {
          padding: 22px 24px;
        }
        .portfolio-container .portfolio-cat {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--gold);
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .portfolio-container .portfolio-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 16px;
        }
        .portfolio-container .portfolio-tag {
          background: rgba(201, 168, 76, 0.08);
          border: 1px solid rgba(201, 168, 76, 0.15);
          color: var(--gold-light);
          font-size: 0.7rem;
          padding: 3px 10px;
          border-radius: 100px;
        }

        .portfolio-container .clients-section {
          text-align: center;
          padding: 80px 5%;
        }
        .portfolio-container .clients-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 36px;
          align-items: center;
          justify-content: center;
          margin-top: 3rem;
          opacity: 0.4;
        }
        .portfolio-container .client-logo {
          font-weight: 500;
          font-size: 1rem;
          letter-spacing: 0.12em;
          color: var(--text);
        }

        .portfolio-container .cta-section {
          background: var(--bg2);
          border-top: 1px solid var(--border);
          text-align: center;
          padding: 100px 5%;
          position: relative;
          overflow: hidden;
        }
        .portfolio-container .cta-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(201, 168, 76, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .portfolio-container .modal-bg {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(6px);
          align-items: center;
          justify-content: center;
        }
        .portfolio-container .modal-bg.open {
          display: flex;
        }
        .portfolio-container .modal {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 16px;
          max-width: 540px;
          width: 90%;
          padding: 2.2rem;
          position: relative;
          animation: pop-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes pop-in {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .portfolio-container .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.06);
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          color: var(--muted);
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s;
        }
        .portfolio-container .modal-close:hover {
          background: rgba(255, 255, 255, 0.12);
          color: var(--text);
        }
        .portfolio-container .modal-reel-area {
          width: 100%;
          aspect-ratio: 9/16;
          max-height: 360px;
          background: var(--bg3);
          border-radius: 10px;
          margin-bottom: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          color: var(--muted);
          border: 1px solid var(--border);
          flex-direction: column;
          gap: 10px;
        }

        @media (max-width: 1024px) {
          .portfolio-container .portfolio-card.featured {
            grid-column: span 1;
          }
        }
        @media (max-width: 900px) {
          .portfolio-container .reels-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .portfolio-container .reels-grid {
            grid-template-columns: 1fr;
            max-width: 340px;
            margin-left: auto;
            margin-right: auto;
          }
          .portfolio-container .hero-stats {
            gap: 1.5rem;
            flex-wrap: wrap;
          }
          .portfolio-container section {
            padding: 70px 6%;
          }
        }
      `}</style>
    </div>
  );
}
