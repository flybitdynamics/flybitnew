'use client';

import React, { useState, useRef } from 'react';
import FadeUp from './FadeUp';
import { publicAsset } from '@/lib/public-assets';

interface ShowcaseProps {
  onOpenModal: (title: string, description: string) => void;
}

const SHOWS_RAW = [
  // Mixed selection at the top to make "All Shows" look diverse immediately
  { tag: 'Wedding', cat: 'wedding', name: 'Grand Sky Finale', src: '/past_shows/wedding images/ChatGPT Image May 29, 2026, 10_21_15 AM.png' },
  { tag: 'National Event', cat: 'government', name: 'Republic Day', src: '/past_shows/Gov. & national/wildmind_zeel_2026_03_14_12_16_20.jpg' },
  { tag: 'Festival', cat: 'spiritual', name: 'Diwali Spectacular', src: '/past_shows/Spiritual images/magnific_poio6y1ehw.png' },
  { tag: 'Corporate', cat: 'corporate', name: 'Product Launch', src: '/past_shows/corporate/wildmind_zeel_2026_03_14_12_16_13.jpg' },
  { tag: 'Sports & Ent', cat: 'sports', name: 'Stadium Spectacle', src: '/past_shows/sports & Ent/bb107a21-d8cb-4415-9ceb-49893721099f.png' },
  
  // Gov. & National (remaining 10)
  { tag: 'Gov. & National', cat: 'government', name: 'National Formation', src: '/past_shows/Gov. & national/0c0a6064-ad21-449d-92c7-9f9370e3ab53.jpg' },
  { tag: 'Gov. & National', cat: 'government', name: 'Patriotic Display', src: '/past_shows/Gov. & national/18e98e5d-fd45-4e5f-b043-33ea18497cba.jpg' },
  { tag: 'Gov. & National', cat: 'government', name: 'National Celebration', src: '/past_shows/Gov. & national/Gemini_Generated_Image_7iq3rk7iq3rk7iq3.png' },
  { tag: 'Gov. & National', cat: 'government', name: 'National Emblem', src: '/past_shows/Gov. & national/Gemini_Generated_Image_o2mu96o2mu96o2mu.png' },
  { tag: 'Gov. & National', cat: 'government', name: 'Patriotic Display', src: '/past_shows/Gov. & national/Gemini_Generated_Image_ouditaouditaoudi.png' },
  { tag: 'Gov. & National', cat: 'government', name: 'Government Event', src: '/past_shows/Gov. & national/magnific_enhance-this-real-drone-l_2986599818.png' },
  { tag: 'Gov. & National', cat: 'government', name: 'Independence Day', src: '/past_shows/Gov. & national/wildmind_zeel_2026_03_14_12_20_34.jpg' },
  { tag: 'Gov. & National', cat: 'government', name: 'State Celebration', src: '/past_shows/Gov. & national/wildmind_zeel_2026_03_16_17_10_52.jpg' },
  { tag: 'Gov. & National', cat: 'government', name: 'State Inauguration', src: '/past_shows/Gov. & national/wildmind_zeel_2026_03_18_16_32_12.jpg' },
  { tag: 'Gov. & National', cat: 'government', name: 'Public Event', src: '/past_shows/Gov. & national/wildmind_zeel_2026_03_18_16_32_22.jpg' },

  // Spiritual images (remaining 14)
  { tag: 'Spiritual', cat: 'spiritual', name: 'Divine Ceremony', src: '/past_shows/Spiritual images/0e722076-3068-402d-89e0-bcfeceacd621.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Holy Gathering', src: '/past_shows/Spiritual images/542d63d5-eaa3-46ec-9964-c0e794583f50.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Divine Formation', src: '/past_shows/Spiritual images/5f9410ec-1e52-48a5-a877-aeafee2e22c4.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Sacred Ritual', src: '/past_shows/Spiritual images/d905ecea-460f-4a78-add4-ac9cb16fc144.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Temple Formation', src: '/past_shows/Spiritual images/fb0adb1a-bb10-4bf0-9d6e-63a43fb4f91b.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Divine Display', src: '/past_shows/Spiritual images/magnific_5xoxeVrKxe.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Temple Inauguration', src: '/past_shows/Spiritual images/magnific_8vGvG7EIrU.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Festival Gathering', src: '/past_shows/Spiritual images/magnific_8vGvzpPIrU.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Sacred Geometry', src: '/past_shows/Spiritual images/magnific_Bm2m3SPoQR.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Spiritual Symbol', src: '/past_shows/Spiritual images/magnific_Te4e7sXVNR.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Devotional Display', src: '/past_shows/Spiritual images/magnific_UyQyEXMwny.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Religious Festival', src: '/past_shows/Spiritual images/magnific_WMOM7zncXe.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Holy Celebration', src: '/past_shows/Spiritual images/magnific_kLILBKZ16B.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Sacred Icon', src: '/past_shows/Spiritual images/magnific_kLILtj216B.png' },

  // corporate (remaining 6)
  { tag: 'Corporate', cat: 'corporate', name: 'Corporate Summit', src: '/past_shows/corporate/wildmind_zeel_2026_03_14_12_16_26.jpg' },
  { tag: 'Corporate', cat: 'corporate', name: 'Tech Expo', src: '/past_shows/corporate/wildmind_zeel_2026_03_14_12_16_31.jpg' },
  { tag: 'Corporate', cat: 'corporate', name: 'Brand Event', src: '/past_shows/corporate/wildmind_zeel_2026_03_14_12_18_30_brighter.jpg' },
  { tag: 'Corporate', cat: 'corporate', name: 'Company Anniversary', src: '/past_shows/corporate/wildmind_zeel_2026_03_14_12_22_54.jpg' },
  { tag: 'Corporate', cat: 'corporate', name: 'Global Launch', src: '/past_shows/corporate/wildmind_zeel_2026_03_14_12_24_46.jpg' },
  { tag: 'Corporate', cat: 'corporate', name: 'Annual Gala', src: '/past_shows/corporate/wildmind_zeel_2026_03_18_16_37_34.jpg' },

  // wedding images (remaining 12)
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/0e62e4bf-0d56-4beb-b5ed-49a022cbfdde.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/149d7cb6-a71b-4ed5-b170-da4ee7258818.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/48783afc-6294-4c79-80a8-288ddf554490.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/8006958b-f4b4-43b3-a37b-0ff56833d112.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Couple Portrait', src: '/past_shows/wedding images/Gemini_Generated_Image_rby995rby995rby9.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/b211a032-e822-472c-8277-16762dc88cf2.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/ede65e48-7a7c-45ff-80a3-c0db96b11456.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/fdaeab6f-caad-46b6-b725-b35ef37e05ff.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/magnific_43kRLWP9Aa.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Lakeside Celebration', src: '/past_shows/wedding images/magnific_74H4g1zJAL.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Royal Palace Wedding', src: '/past_shows/wedding images/magnific_cDyDnho0eP.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/magnific_swf7k5sl8e.png' },
];

const SHOWS = SHOWS_RAW.map((show) => ({ ...show, src: publicAsset(show.src) }));

const TABS = [
  { label: 'All Shows', cat: 'all' },
  { label: 'Weddings', cat: 'wedding' },
  { label: 'Corporate', cat: 'corporate' },
  { label: 'Spiritual', cat: 'spiritual' },
  { label: 'Gov. & National', cat: 'government' },
  { label: 'Sports & Ent', cat: 'sports' },
];

export default function Showcase({ onOpenModal }: ShowcaseProps) {
  const [activeTab, setActiveTab] = useState('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredShows = SHOWS.filter((s) => activeTab === 'all' || s.cat === activeTab);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };



  return (
    <section
      id="showcase"
      className="bg-black select-none overflow-hidden"
    >
      <div className="showcase-head flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-20 mb-2 font-sans">
        <div>
          <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-4">
            Past Shows
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-4 md:mb-0">
            Moments We've <em className="text-gold italic">Painted</em>
          </h2>
        </div>
      </div>

      <div className="showcase-tabs flex gap-2 overflow-x-auto px-6 md:px-20 mb-6 scrollbar-none font-sans">
        {TABS.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tab.cat)}
            className={`stab px-6 py-2.5 text-[0.7rem] tracking-[0.14em] uppercase rounded-[2px] cursor-pointer md:cursor-none transition-all duration-200 shrink-0 ${
              activeTab === tab.cat
                ? 'bg-gold border-gold text-black active'
                : 'bg-transparent border border-border text-text-muted hover:bg-gold hover:border-gold hover:text-black'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Showcase Horizontal Scroll Wrapper */}
      <div className="relative">
        {/* Mobile Scroll Controls */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-gold/20 bg-black/80 text-gold hover:bg-gold/20 transition-colors backdrop-blur-sm shadow-lg cursor-pointer"
          aria-label="Scroll left"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-gold/20 bg-black/80 text-gold hover:bg-gold/20 transition-colors backdrop-blur-sm shadow-lg cursor-pointer"
          aria-label="Scroll right"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="showcase-scroll flex overflow-x-auto gap-[2px] px-6 md:px-20 pb-8 scrollbar-none font-sans"
          style={{ scrollbarWidth: 'none' }}
        >
          {filteredShows.map((show, idx) => (
            <FadeUp
              key={idx}
              delay={idx * 60}
              onClick={() =>
                onOpenModal(
                  show.name,
                  `Category: ${show.tag}\n\nThis ${show.tag.toLowerCase()} show featured stunning formations tailored specifically for the event.`
                )
              }
              className="show-card shrink-0 w-[280px] md:w-[340px] h-[380px] md:h-[440px] bg-dark-3 relative overflow-hidden border border-gold/[0.06] hover:border-gold/25 cursor-pointer md:cursor-none transition-colors duration-300 group"
            >
              <div className="show-card-bg absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <div
                  className="w-full h-full bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url('${show.src}')` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>


            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
