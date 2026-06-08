'use client';

import React, { useState } from 'react';
import FadeUp from './FadeUp';

interface ShowcaseProps {
  onOpenModal: (title: string, description: string) => void;
}

const SHOWS = [
  { tag: 'Wedding', cat: 'wedding', name: 'Grand Sky Finale, Mumbai', svg: 'heart' },
  { tag: 'National Event', cat: 'government', name: 'Republic Day, New Delhi', svg: 'india' },
  { tag: 'Festival', cat: 'festival', name: 'Diwali Spectacular, Ahmedabad', svg: 'burst' },
  { tag: 'Corporate', cat: 'corporate', name: 'Product Launch, Bangalore', svg: 'logo' },
  { tag: 'Wedding', cat: 'wedding', name: 'Lakeside Celebration, Udaipur', svg: 'ring' },
  { tag: 'Festival', cat: 'festival', name: 'New Year, Goa', svg: 'firework' },
  { tag: 'Corporate', cat: 'corporate', name: 'Brand Event, Hyderabad', svg: 'star' },
  { tag: 'Government', cat: 'government', name: 'State Inauguration, Gujarat', svg: 'india' },
];

const TABS = [
  { label: 'All Shows', cat: 'all' },
  { label: 'Weddings', cat: 'wedding' },
  { label: 'Corporate', cat: 'corporate' },
  { label: 'Festivals', cat: 'festival' },
  { label: 'National', cat: 'government' },
];

export default function Showcase({ onOpenModal }: ShowcaseProps) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredShows = SHOWS.filter((s) => activeTab === 'all' || s.cat === activeTab);

  const renderSVGContent = (type: string) => {
    switch (type) {
      case 'heart':
        return (
          <g fill="#C9A84C">
            <circle cx="140" cy="155" r="2.5" />
            <circle cx="125" cy="165" r="2" />
            <circle cx="118" cy="182" r="2.5" />
            <circle cx="122" cy="200" r="2" />
            <circle cx="133" cy="215" r="2.5" />
            <circle cx="148" cy="227" r="2" />
            <circle cx="160" cy="235" r="2.5" />
            <circle cx="172" cy="227" r="2" />
            <circle cx="187" cy="215" r="2.5" />
            <circle cx="198" cy="200" r="2" />
            <circle cx="202" cy="182" r="2.5" />
            <circle cx="195" cy="165" r="2" />
            <circle cx="180" cy="155" r="2.5" />
            <circle cx="160" cy="148" r="2" />
          </g>
        );
      case 'india':
        return (
          <g fill="#C9A84C">
            <circle cx="158" cy="145" r="2" />
            <circle cx="165" cy="140" r="1.5" />
            <circle cx="172" cy="145" r="2" />
            <circle cx="175" cy="155" r="1.5" />
            <circle cx="178" cy="165" r="2" />
            <circle cx="172" cy="175" r="1.5" />
            <circle cx="165" cy="178" r="2" />
            <circle cx="158" cy="175" r="1.5" />
            <circle cx="152" cy="165" r="2" />
            <circle cx="155" cy="155" r="1.5" />
          </g>
        );
      case 'burst':
        return (
          <g fill="#F0D080">
            <circle cx="165" cy="140" r="2.5" />
            <circle cx="185" cy="145" r="2" />
            <circle cx="200" cy="160" r="2.5" />
            <circle cx="200" cy="180" r="2" />
            <circle cx="188" cy="196" r="2.5" />
            <circle cx="170" cy="202" r="2" />
            <circle cx="150" cy="196" r="2.5" />
            <circle cx="137" cy="180" r="2" />
            <circle cx="137" cy="160" r="2.5" />
            <circle cx="148" cy="145" r="2" />
            <circle cx="168" cy="160" r="1.5" />
          </g>
        );
      case 'logo':
        return (
          <g fill="#C9A84C">
            <circle cx="165" cy="165" r="2" />
            <circle cx="175" cy="155" r="2.5" />
            <circle cx="185" cy="165" r="2" />
            <circle cx="185" cy="178" r="2.5" />
            <circle cx="178" cy="188" r="2" />
            <circle cx="168" cy="188" r="2.5" />
            <circle cx="158" cy="178" r="2" />
            <circle cx="158" cy="165" r="2.5" />
          </g>
        );
      case 'ring':
        return (
          <g fill="none" stroke="#C9A84C" strokeWidth="1.5">
            <circle cx="170" cy="175" r="30" fill="none" strokeDasharray="4 5" />
            <circle cx="170" cy="175" r="3" fill="#C9A84C" />
          </g>
        );
      case 'firework':
        return (
          <g fill="#F0D080">
            <circle cx="168" cy="130" r="2" />
            <circle cx="195" cy="145" r="2" />
            <circle cx="205" cy="173" r="2" />
            <circle cx="192" cy="200" r="2" />
            <circle cx="165" cy="210" r="2" />
            <circle cx="138" cy="200" r="2" />
            <circle cx="125" cy="173" r="2" />
            <circle cx="135" cy="145" r="2" />
            <circle cx="165" cy="170" r="3" />
          </g>
        );
      case 'star':
        return (
          <g fill="#C9A84C">
            <circle cx="168" cy="140" r="2.5" />
            <circle cx="188" cy="157" r="2" />
            <circle cx="190" cy="180" r="2.5" />
            <circle cx="175" cy="195" r="2" />
            <circle cx="155" cy="195" r="2.5" />
            <circle cx="140" cy="180" r="2" />
            <circle cx="142" cy="157" r="2.5" />
            <circle cx="162" cy="140" r="2" />
          </g>
        );
      default:
        return (
          <g fill="#F0D080">
            <circle cx="165" cy="140" r="2.5" />
          </g>
        );
    }
  };

  return (
    <section
      id="showcase"
      className="bg-black select-none overflow-hidden"
    >
      <div className="showcase-head flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-20 mb-16 font-sans">
        <div>
          <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-5">
            Past Shows
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-4 md:mb-0">
            Moments We've <em className="text-gold italic">Painted</em>
          </h2>
        </div>
      </div>

      <div className="showcase-tabs flex gap-2 overflow-x-auto px-6 md:px-20 mb-10 scrollbar-none font-sans">
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
      <div
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
            className="show-card shrink-0 w-[340px] h-[440px] bg-dark-3 relative overflow-hidden border border-gold/[0.06] hover:border-gold/25 cursor-pointer md:cursor-none transition-colors duration-300 group"
          >
            <div className="show-card-bg absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
              <svg width="340" height="440" viewBox="0 0 340 440">
                <rect width="340" height="440" fill="#111" />
                <circle
                  cx="170"
                  cy="220"
                  r="100"
                  fill="none"
                  stroke="rgba(201,168,76,0.04)"
                  strokeWidth="60"
                />
                {renderSVGContent(show.svg)}
                <text
                  x="170"
                  y="380"
                  textAnchor="middle"
                  fill="rgba(201,168,76,0.2)"
                  fontFamily="var(--font-bebas)"
                  fontSize="9"
                  letterSpacing="4"
                >
                  {show.name.toUpperCase()}
                </text>
              </svg>
            </div>

            <div className="show-card-content absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/97 via-black/60 to-transparent">
              <div className="show-tag text-[0.58rem] tracking-[0.3em] uppercase text-gold mb-2">
                {show.tag}
              </div>
              <div className="show-name font-cormorant text-2xl text-text leading-snug">
                {show.name}
              </div>
              <div className="show-view flex items-center gap-2 mt-4 text-[0.7rem] tracking-[0.15em] uppercase text-gold-dim transition-all duration-300 group-hover:gap-[0.9rem] group-hover:text-gold">
                View Details →
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
