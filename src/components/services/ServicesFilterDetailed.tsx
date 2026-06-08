'use client';
import React, { useState } from 'react';

interface ServicesFilterDetailedProps {
  onOpenModal: (title: string, description: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'social', label: 'Social Events' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'government', label: 'Government' },
  { id: 'launch', label: 'Product Launch' },
  { id: 'spiritual', label: 'Spiritual' },
  { id: 'sports', label: 'Sports' }
];

export default function ServicesFilterDetailed({ onOpenModal }: ServicesFilterDetailedProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const matchesCategory = (cardCats: string[]) => {
    if (activeCategory === 'all') return true;
    return cardCats.includes(activeCategory);
  };

  return (
    <section id="services" className="bg-black py-24 px-6 md:px-20 border-t border-border/40">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-4">
            Service Categories
          </div>
          <h2 className="sec-title font-cormorant text-[clamp(2.4rem,5vw,4.2rem)] font-light text-text leading-[1.08]">
            Every Vision, <span className="text-gold italic">Airborne</span>
          </h2>
        </div>

        {/* Filter Navigation */}
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

        {/* Dynamic Cards Wrapper */}
        <div className="flex flex-col gap-[2px] bg-border/20 rounded-[3px] overflow-hidden">

          {/* ROW 1: Social Events (Featured Card) */}
          {matchesCategory(['social']) && (
            <div className="srv-card bg-dark p-8 md:p-14 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.02] border-b border-border/10 cursor-none"
              onClick={() => onOpenModal('Social Events', "Transform your most precious moments into magical aerial experiences that will be remembered for generations. From wedding finales to birthday spectaculars — love deserves to be written in the stars.")}>
              
              {/* Highlight line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="font-bebas text-[6rem] text-gold/5 leading-none absolute top-4 right-8 select-none">
                    01
                  </div>
                  <div className="w-12 h-12 border border-gold/20 rounded-[2px] flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/40 transition-colors duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  
                  <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2">Category 01</div>
                  <h3 className="font-cormorant text-[2rem] text-text mb-4">Social Events</h3>
                  
                  <p className="text-[0.85rem] text-text-muted leading-[1.9] max-w-[480px] font-sans">
                    "Because love deserves to be written in the stars." Transform your most precious moments into magical experiences — from wedding grand finales to anniversary tributes that leave guests breathless.
                  </p>

                  {/* Pills Grid */}
                  <div className="grid grid-cols-2 gap-2.5 mt-8 max-w-[500px]">
                    <div className="text-[0.72rem] text-text-muted py-2 px-3.5 border border-border/30 rounded-[2px] tracking-wide hover:border-gold/20 transition-all font-sans">
                      ⚡ Custom names in the sky
                    </div>
                    <div className="text-[0.72rem] text-text-muted py-2 px-3.5 border border-border/30 rounded-[2px] tracking-wide hover:border-gold/20 transition-all font-sans">
                      ⚡ Wedding proposal shows
                    </div>
                    <div className="text-[0.72rem] text-text-muted py-2 px-3.5 border border-border/30 rounded-[2px] tracking-wide hover:border-gold/20 transition-all font-sans">
                      ⚡ Love story animations
                    </div>
                    <div className="text-[0.72rem] text-text-muted py-2 px-3.5 border border-border/30 rounded-[2px] tracking-wide hover:border-gold/20 transition-all font-sans">
                      ⚡ Anniversary celebrations
                    </div>
                    <div className="text-[0.72rem] text-text-muted py-2 px-3.5 border border-border/30 rounded-[2px] tracking-wide hover:border-gold/20 transition-all font-sans">
                      ⚡ Birthday spectaculars
                    </div>
                    <div className="text-[0.72rem] text-text-muted py-2 px-3.5 border border-border/30 rounded-[2px] tracking-wide hover:border-gold/20 transition-all font-sans">
                      ⚡ Family reunion displays
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-8 text-[0.68rem] tracking-[0.18em] uppercase text-gold-dim group-hover:text-gold group-hover:gap-4 transition-all duration-300 font-sans">
                    Get Quote for Social Events ➔
                  </div>
                </div>

                {/* Couple Vector Canvas Display */}
                <div className="flex justify-center">
                  <div className="relative w-[280px] h-[280px] bg-white/[0.01] border border-gold/10 rounded-[3px] flex items-center justify-center overflow-hidden">
                    {/* Corners */}
                    <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-gold/40" />
                    <div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-gold/40" />
                    <div className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-gold/40" />
                    <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-gold/40" />
                    
                    <svg width="260" height="260" viewBox="0 0 260 260">
                      {/* Groom body */}
                      <g fill="#C9A84C">
                        <circle cx="110" cy="60" r="2.5"><animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/></circle>
                        <circle cx="105" cy="75" r="2"><animate attributeName="opacity" values="1;0.4;1" dur="2.7s" repeatCount="indefinite"/></circle>
                        <circle cx="115" cy="75" r="2"><animate attributeName="opacity" values="0.3;1;0.3" dur="3.2s" repeatCount="indefinite"/></circle>
                        <circle cx="100" cy="90" r="2"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/></circle>
                        <circle cx="110" cy="90" r="2"><animate attributeName="opacity" values="1;0.3;1" dur="2.9s" repeatCount="indefinite"/></circle>
                        <circle cx="120" cy="90" r="2"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.4s" repeatCount="indefinite"/></circle>
                        <circle cx="105" cy="108" r="2"><animate attributeName="opacity" values="0.7;1;0.7" dur="2.6s" repeatCount="indefinite"/></circle>
                        <circle cx="115" cy="108" r="2"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.1s" repeatCount="indefinite"/></circle>
                        <circle cx="103" cy="125" r="1.5"><animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.8s" repeatCount="indefinite"/></circle>
                        <circle cx="117" cy="125" r="1.5"><animate attributeName="opacity" values="0.4;1;0.4" dur="3.3s" repeatCount="indefinite"/></circle>
                      </g>
                      
                      {/* Bride body (pink-gold) */}
                      <g fill="#F0D080">
                        <circle cx="150" cy="60" r="2.5"><animate attributeName="opacity" values="0.4;1;0.4" dur="3.1s" repeatCount="indefinite"/></circle>
                        <circle cx="145" cy="75" r="2"><animate attributeName="opacity" values="1;0.4;1" dur="2.6s" repeatCount="indefinite"/></circle>
                        <circle cx="155" cy="75" r="2"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.4s" repeatCount="indefinite"/></circle>
                        <circle cx="140" cy="92" r="2"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.9s" repeatCount="indefinite"/></circle>
                        <circle cx="150" cy="90" r="2.5"><animate attributeName="opacity" values="0.7;1;0.7" dur="2.4s" repeatCount="indefinite"/></circle>
                        <circle cx="160" cy="92" r="2"><animate attributeName="opacity" values="0.2;1;0.2" dur="3.2s" repeatCount="indefinite"/></circle>
                        
                        {/* Dress flare */}
                        <circle cx="135" cy="112" r="1.5"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.7s" repeatCount="indefinite"/></circle>
                        <circle cx="150" cy="115" r="2"><animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/></circle>
                        <circle cx="165" cy="112" r="1.5"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite"/></circle>
                        <circle cx="128" cy="128" r="1.5"><animate attributeName="opacity" values="0.3;1;0.3" dur="3.3s" repeatCount="indefinite"/></circle>
                        <circle cx="148" cy="132" r="1.5"><animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite"/></circle>
                        <circle cx="168" cy="128" r="1.5"><animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.1s" repeatCount="indefinite"/></circle>
                      </g>
                      
                      {/* Joined hands link */}
                      <circle cx="132" cy="95" r="2.5" fill="#C9A84C"><animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/></circle>
                      
                      {/* Heart above */}
                      <g fill="#C9A84C" opacity="0.6">
                        <circle cx="126" cy="38" r="2"><animate attributeName="opacity" values="0.2;0.9;0.2" dur="3s" repeatCount="indefinite"/></circle>
                        <circle cx="133" cy="34" r="1.5"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/></circle>
                        <circle cx="130" cy="42" r="2"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.8s" repeatCount="indefinite"/></circle>
                        <circle cx="137" cy="34" r="1.5"><animate attributeName="opacity" values="0.8;0.2;0.8" dur="3.2s" repeatCount="indefinite"/></circle>
                        <circle cx="142" cy="38" r="2"><animate attributeName="opacity" values="0.4;1;0.4" dur="2.6s" repeatCount="indefinite"/></circle>
                      </g>
                      
                      <text x="130" y="175" textAnchor="middle" fill="rgba(201,168,76,0.3)" className="font-bebas text-[8px] tracking-[4px]">SOCIAL EVENTS</text>
                      
                      {/* Background Orbit Ring */}
                      <circle cx="130" cy="110" r="75" stroke="rgba(201,168,76,0.05)" strokeWidth="1" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ROW 2: Corporate + Government (Split 2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px]">
            {matchesCategory(['corporate']) && (
              <div className="srv-card bg-dark p-8 md:p-12 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.02] cursor-none"
                onClick={() => onOpenModal('Corporate Events', "Elevate your corporate events with stunning aerial displays that showcase your brand values and create lasting impressions. Your brand deserves a grand canvas.")}>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="font-bebas text-[6rem] text-gold/5 leading-none absolute top-4 right-8 select-none">02</div>
                
                <div className="w-12 h-12 border border-gold/20 rounded-[2px] flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/40 transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
                    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/>
                  </svg>
                </div>
                
                <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2">Category 02</div>
                <h3 className="font-cormorant text-[1.8rem] text-text mb-4">Corporate Events</h3>
                <p className="text-[0.82rem] text-text-muted leading-[1.9] mb-8 font-sans">
                  "Your brand deserves a grand canvas." Elevate conferences, award nights, and brand events with aerial displays that go viral and generate press coverage worth 10× your investment.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Logo animations in 3D</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Product launch reveals</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Conference openers</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Brand value storytelling</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Company milestone celebrations</div>
                </div>

                <div className="flex items-center gap-2 mt-8 text-[0.68rem] tracking-[0.18em] uppercase text-gold-dim group-hover:text-gold group-hover:gap-4 transition-all duration-300 font-sans">
                  Get Quote ➔
                </div>
              </div>
            )}

            {matchesCategory(['government']) && (
              <div className="srv-card bg-dark p-8 md:p-12 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.02] cursor-none"
                onClick={() => onOpenModal('Government & National Events', "Honor national pride with spectacular displays that celebrate our heritage, values, and achievements on the world stage. A new age of patriotic storytelling.")}>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="font-bebas text-[6rem] text-gold/5 leading-none absolute top-4 right-8 select-none">03</div>
                
                <div className="w-12 h-12 border border-gold/20 rounded-[2px] flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/40 transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
                    <path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9h.01M9 12h.01M9 15h.01M9 18h.01"/>
                  </svg>
                </div>
                
                <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2">Category 03</div>
                <h3 className="font-cormorant text-[1.8rem] text-text mb-4">Government & National Events</h3>
                <p className="text-[0.82rem] text-text-muted leading-[1.9] mb-8 font-sans">
                  "A new age of patriotic storytelling." Trusted by state governments for Republic Day, Independence Day, G20 summits, and international events — full VVIP security clearances included.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Republic Day celebrations</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Independence Day shows</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> G20 & international events</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Cultural festival displays</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Tourism promotion shows</div>
                </div>

                <div className="flex items-center gap-2 mt-8 text-[0.68rem] tracking-[0.18em] uppercase text-gold-dim group-hover:text-gold group-hover:gap-4 transition-all duration-300 font-sans">
                  Get Quote ➔
                </div>
              </div>
            )}
          </div>

          {/* ROW 3: Product Launches + Spiritual (Split 2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px]">
            {matchesCategory(['launch']) && (
              <div className="srv-card bg-dark p-8 md:p-12 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.02] cursor-none"
                onClick={() => onOpenModal('Product Launches', "Create buzz and excitement for your product launches with countdown displays, 3D reveals, and memorable brand messages. From sky to spotlight — launch like never before.")}>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="font-bebas text-[6rem] text-gold/5 leading-none absolute top-4 right-8 select-none">04</div>
                
                <div className="w-12 h-12 border border-gold/20 rounded-[2px] flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/40 transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                
                <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2">Category 04</div>
                <h3 className="font-cormorant text-[1.8rem] text-text mb-4">Product Launches</h3>
                <p className="text-[0.82rem] text-text-muted leading-[1.9] mb-8 font-sans">
                  "From sky to spotlight — launch like never before." A 500-drone product reveal in the night sky generates press coverage, social virality, and audience awe — all in one unforgettable moment.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Countdown sequences</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> 3D product reveals</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Brand message displays</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Tech & automobile showcases</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Fashion show openers</div>
                </div>

                <div className="flex items-center gap-2 mt-8 text-[0.68rem] tracking-[0.18em] uppercase text-gold-dim group-hover:text-gold group-hover:gap-4 transition-all duration-300 font-sans">
                  Get Quote ➔
                </div>
              </div>
            )}

            {matchesCategory(['spiritual']) && (
              <div className="srv-card bg-dark p-8 md:p-12 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.02] cursor-none"
                onClick={() => onOpenModal('Spiritual Gatherings', "Create divine experiences with sacred symbols, deities, and spiritual geometry that inspire and uplift souls. Merge devotion with wonder.")}>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="font-bebas text-[6rem] text-gold/5 leading-none absolute top-4 right-8 select-none">05</div>
                
                <div className="w-12 h-12 border border-gold/20 rounded-[2px] flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/40 transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
                    <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
                  </svg>
                </div>
                
                <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2">Category 05</div>
                <h3 className="font-cormorant text-[1.8rem] text-text mb-4">Spiritual Gatherings</h3>
                <p className="text-[0.82rem] text-text-muted leading-[1.9] mb-8 font-sans">
                  "Merge devotion with wonder." Create divine aerial experiences with sacred symbols — Om, Khanda, Trishul, deity portraits — that inspire and uplift thousands of souls gathered in devotion.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Om and spiritual symbols</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Deity representations</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Sacred geometry displays</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Religious ceremony shows</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Festival celebrations</div>
                </div>

                <div className="flex items-center gap-2 mt-8 text-[0.68rem] tracking-[0.18em] uppercase text-gold-dim group-hover:text-gold group-hover:gap-4 transition-all duration-300 font-sans">
                  Get Quote ➔
                </div>
              </div>
            )}
          </div>

          {/* ROW 4: Sports + Bespoke Custom Formations (Split 2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px]">
            {matchesCategory(['sports']) && (
              <div className="srv-card bg-dark p-8 md:p-12 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.02] cursor-none"
                onClick={() => onOpenModal('Sports & Entertainment', "Electrify your audience with dynamic displays featuring team mascots, stadium activations, and high-energy pre-show entertainment. Energize your arena from the sky.")}>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="font-bebas text-[6rem] text-gold/5 leading-none absolute top-4 right-8 select-none">06</div>
                
                <div className="w-12 h-12 border border-gold/20 rounded-[2px] flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/40 transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
                    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                
                <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2">Category 06</div>
                <h3 className="font-cormorant text-[1.8rem] text-text mb-4">Sports & Entertainment</h3>
                <p className="text-[0.82rem] text-text-muted leading-[1.9] mb-8 font-sans">
                  "Energize your arena from the sky." Electrify your audience with team mascot animations, Olympic-scale stadium activations, and high-energy pre-game entertainment that builds to a roar.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Team mascot animations</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Stadium activations</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Pre-game entertainment</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Victory celebrations</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Concert openers & festival activations</div>
                </div>

                <div className="flex items-center gap-2 mt-8 text-[0.68rem] tracking-[0.18em] uppercase text-gold-dim group-hover:text-gold group-hover:gap-4 transition-all duration-300 font-sans">
                  Get Quote ➔
                </div>
              </div>
            )}

            {matchesCategory(['social', 'corporate', 'government', 'launch', 'spiritual', 'sports']) && (
              <div className="srv-card bg-dark p-8 md:p-12 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.02] cursor-none"
                onClick={() => onOpenModal('Bespoke Custom Formations', "Anything you can imagine, we can build 150 metres above the ground. Custom portraits, brand mascots, animated 3D sequences — our in-house design team brings any vision to life.")}>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="font-bebas text-[6rem] text-gold/5 leading-none absolute top-4 right-8 select-none">07</div>
                
                <div className="w-12 h-12 border border-gold/20 rounded-[2px] flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:border-gold/40 transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6 text-gold">
                    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </div>
                
                <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2">Category 07</div>
                <h3 className="font-cormorant text-[1.8rem] text-text mb-4">Bespoke Custom Formations</h3>
                <p className="text-[0.82rem] text-text-muted leading-[1.9] mb-8 font-sans">
                  Have something extraordinary in mind? Our in-house animation and choreography team can create any formation — portraits, mascots, multi-sequence narratives, or fully animated 3D stories in the sky.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Full custom design studio</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> 3D animated sequences</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Portraits & mascots</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Brand narrative stories</div>
                  <div className="flex items-center gap-2 text-[0.76rem] text-text-muted font-sans"><span className="w-1 h-1 bg-gold rounded-full" /> Multi-formation choreography</div>
                </div>

                <div className="flex items-center gap-2 mt-8 text-[0.68rem] tracking-[0.18em] uppercase text-gold-dim group-hover:text-gold group-hover:gap-4 transition-all duration-300 font-sans">
                  Discuss Your Vision ➔
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
