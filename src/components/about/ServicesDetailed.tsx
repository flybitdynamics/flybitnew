'use client';
import React, { useState, useEffect, useRef } from 'react';
import { publicAsset } from '@/lib/public-assets';

interface ServicesDetailedProps {
  onOpenModal?: (title: string, desc: string) => void;
}

const IMAGE_BASE = '/aboutimage';

function withZataAssets<T extends { src: string }>(items: T[]): T[] {
  return items.map((item) => ({ ...item, src: publicAsset(item.src) }));
}

const socialImages = withZataAssets([
  { src: `${IMAGE_BASE}/Social Events/magnific_LUvmnwtswO.png`, title: 'Social Events', desc: 'Weddings, anniversaries, birthdays, love stories and family reunions — FLYBIT creates personalised sky-art to make every milestone unforgettable.', label: 'Birthday Celebration' },
  { src: `${IMAGE_BASE}/Social Events/magnific_e8iNrTudqL.png`, title: 'Portrait Formation', desc: 'Our drones can form intricate portrait silhouettes in the sky — completely personalised to the individual being celebrated.', label: 'Portrait Silhouette' },
  { src: `${IMAGE_BASE}/Social Events/magnific_kL8B3zF16B.png`, title: 'Wedding Finale', desc: 'The ultimate wedding grand finale — couple formations, heart shapes, your initials — all written 150m above your guests.', label: 'Wedding Finale' },
  { src: `${IMAGE_BASE}/Social Events/magnific_rlt8nB3xtc.png`, title: 'Family Reunion', desc: 'A stunning drone show that lights up the sky for your family reunion, creating memories that last a lifetime.', label: 'Family Reunion' },
  { src: `${IMAGE_BASE}/Social Events/magnific_swahVZ5l8e.png`, title: 'Anniversary Celebration', desc: 'Celebrate your anniversary with a bespoke drone show that paints your love story across the night sky.', label: 'Anniversary Celebration' }
]);

const corporateImages = withZataAssets([
  { src: `${IMAGE_BASE}/corporate/magnific_DBNPSGYpcl.png`, title: 'Brand Logo in the Sky', desc: 'Flocare, Shreshtha Capital and more — we\'ve animated brand logos across Indian skies, creating press-worthy moments worth 10x the investment.', label: 'Flocare Brand Launch' },
  { src: `${IMAGE_BASE}/corporate/magnific_aQcn6pJfSh.png`, title: 'Shreshtha Capital', desc: 'A stunning financial brand reveal — growth chart, bar graph, and the full brand identity written in drones above the city skyline.', label: 'Shreshtha Capital' },
  { src: `${IMAGE_BASE}/corporate/magnific_gJCvhwYSXO.png`, title: 'Corporate Spectacle', desc: 'Dynamic multi-formation sequences for brand events, award ceremonies, and company milestones — designed to go viral.', label: 'Corporate Formation' },
  { src: `${IMAGE_BASE}/corporate/magnific_l7fhMEbgv9.png`, title: 'Product Launch', desc: 'Launch your new product with an unforgettable drone show that captivates your audience and generates buzz.', label: 'Product Launch' },
  { src: `${IMAGE_BASE}/corporate/magnific_vuWzZOoa47.png`, title: 'Expo Highlight', desc: 'Stand out at your next expo with a customized drone show that draws crowds and leaves a lasting impression.', label: 'Expo Highlight' }
]);

const governmentImages = withZataAssets([
  { src: `${IMAGE_BASE}/Gov/magnific_Pi5qGi142C.png`, title: 'Government Events', desc: 'FLYBIT has delivered for Gujarat Police and other state-government clients with VVIP-grade precision and full regulatory compliance.', label: 'State Government Event' },
  { src: `${IMAGE_BASE}/Gov/magnific_Pi5qzDP42C.png`, title: 'Republic Day', desc: 'Happy Republic Day — written across the night sky with hundreds of drones. FLYBIT has delivered national day celebrations for government clients.', label: 'Republic Day' },
  { src: `${IMAGE_BASE}/Gov/magnific_dI36FDsXSL.png`, title: 'Indian Tricolour', desc: 'A full Indian flag formation — saffron, white, green and the Ashoka Chakra — painted precisely in the sky by our drone fleet.', label: 'National Tricolour' },
  { src: `${IMAGE_BASE}/Gov/magnific_gJCaR91SXO.png`, title: 'Independence Day', desc: 'Celebrate Independence Day with a spectacular drone show that honors the nation\'s history and achievements.', label: 'Independence Day' },
  { src: `${IMAGE_BASE}/Gov/magnific_xgmIPCujfW.png`, title: 'Tourism Promotion', desc: 'Promote local tourism with a drone show that highlights the unique culture, landmarks, and beauty of your region.', label: 'Tourism Promotion' }
]);

const spiritualImages = withZataAssets([
  { src: `${IMAGE_BASE}/spiritual/magnific_8vAReWVIrU.png`, title: 'Sri Krishna at Ayodhya', desc: 'Our most celebrated work — a full-colour Sri Krishna formation over a temple, combining 200+ drones for an image that became iconic.', label: 'Sri Krishna · Ayodhya' },
  { src: `${IMAGE_BASE}/spiritual/magnific_NZ15Ju96D9.png`, title: 'Spiritual Formations', desc: 'Ram, Shiva, Ganesha, Krishna — FLYBIT has created majestic deity formations for temples, religious gatherings, and spiritual festivals across India.', label: 'Divine Formation' },
  { src: `${IMAGE_BASE}/spiritual/magnific_aQcnoPYfSh.png`, title: 'Sacred Geometry', desc: 'Om symbols, sacred geometry, and Diwali formations — our spiritual category is one of our most requested for festivals and religious celebrations.', label: 'Spiritual Show' },
  { src: `${IMAGE_BASE}/spiritual/magnific_brXpQCA5Y2.png`, title: 'Kumbh Mela', desc: 'A breathtaking drone show for Kumbh Mela, creating awe-inspiring formations that reflect the spiritual essence of the gathering.', label: 'Kumbh Mela' },
  { src: `${IMAGE_BASE}/spiritual/magnific_swamLnsl8e.png`, title: 'Temple Inauguration', desc: 'Celebrate a temple inauguration with a bespoke drone show that honors the deity and creates a magical atmosphere.', label: 'Temple Inauguration' }
]);

const sportsImages = withZataAssets([
  { src: `${IMAGE_BASE}/sports & ent/magnific_Uyuf1Ucwny.png`, title: 'Olympic-Scale Shows', desc: 'Stadium-level drone shows for opening ceremonies — Olympic rings, national symbols, and crowd-scale spectacles that compete on the world stage.', label: 'Olympic Rings Formation' },
  { src: `${IMAGE_BASE}/sports & ent/magnific_UyufqOXwny.png`, title: 'Cricket Formations', desc: 'A drone-lit cricketer in batting stance — one of FLYBIT\'s iconic sports formations. Perfect for IPL events, stadium openings, and sporting brand activations.', label: 'Cricket Formation' },
  { src: `${IMAGE_BASE}/sports & ent/magnific_YV7S4C0WeC.png`, title: 'Trophy & Cup Formations', desc: 'Award and trophy formations for sporting events — ICC, IPL, and tournament celebrations with multi-coloured precision drone art.', label: 'Sports Trophy' },
  { src: `${IMAGE_BASE}/sports & ent/magnific_gJCvqlPSXO.png`, title: 'Opening Ceremonies', desc: 'Kick off your sports tournament with an unforgettable opening ceremony drone show that energizes the crowd.', label: 'Opening Ceremonies' },
  { src: `${IMAGE_BASE}/sports & ent/magnific_hEYGpC0vqL.png`, title: 'Mascot Animation', desc: 'Bring your team\'s mascot to life in the night sky with a dynamic, multi-coloured drone animation.', label: 'Mascot Animation' },
  { src: `${IMAGE_BASE}/sports & ent/magnific_jShIv5lLD0.png`, title: 'Concert Spectacular', desc: 'Enhance your live concert experience with a synchronized drone show that complements the music and visuals.', label: 'Concert Spectacular' }
]);

export default function ServicesDetailed({ onOpenModal }: ServicesDetailedProps) {
  const [activeTab, setActiveTab] = useState('social');
  
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fu');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const openModal = (title: string, desc: string) => {
     if (onOpenModal) onOpenModal(title, desc);
     else console.log("Open modal:", title, desc);
  };

  const imagesToRender = 
    activeTab === 'social' ? socialImages :
    activeTab === 'corporate' ? corporateImages :
    activeTab === 'government' ? governmentImages :
    activeTab === 'spiritual' ? spiritualImages :
    activeTab === 'sports' ? sportsImages : [];

  return (
    <section id="services">
      <div className="srv-head fu">
        <div className="eyebrow">What We Do</div>
        <h2 className="sec-title">Five Categories, <em>Infinite</em> Possibilities</h2>
        <p className="sec-body">Every show is a bespoke creation — designed around your event's purpose, scale, and audience.</p>
      </div>
      <div className="srv-tabs fu">
        <button className={`stab ${activeTab === 'social' ? 'active' : ''}`} onClick={() => setActiveTab('social')}>Social Events</button>
        <button className={`stab ${activeTab === 'corporate' ? 'active' : ''}`} onClick={() => setActiveTab('corporate')}>Corporate</button>
        <button className={`stab ${activeTab === 'government' ? 'active' : ''}`} onClick={() => setActiveTab('government')}>Government</button>
        <button className={`stab ${activeTab === 'spiritual' ? 'active' : ''}`} onClick={() => setActiveTab('spiritual')}>Spiritual</button>
        <button className={`stab ${activeTab === 'sports' ? 'active' : ''}`} onClick={() => setActiveTab('sports')}>Sports & Entertainment</button>
      </div>
      
      <div className="relative fu mt-8">
        <button
          onClick={scrollLeft}
          className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-gold/20 bg-black/80 text-gold hover:bg-gold/20 transition-colors backdrop-blur-sm shadow-lg cursor-pointer"
          aria-label="Scroll left"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-gold/20 bg-black/80 text-gold hover:bg-gold/20 transition-colors backdrop-blur-sm shadow-lg cursor-pointer"
          aria-label="Scroll right"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="srv-panel active" id={`srv-${activeTab}`}>
          <div className="srv-grid" ref={scrollRef}>
            {imagesToRender.map((img, index) => (
              <div key={index} className="srv-img" onClick={() => openModal(img.title, img.desc)}>
                <img src={img.src} alt={img.label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
