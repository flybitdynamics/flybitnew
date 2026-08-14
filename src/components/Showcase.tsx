'use client';

import React, { useState, useRef } from 'react';
import FadeUp from './FadeUp';
import { publicAsset } from '@/lib/public-assets';

interface ShowcaseProps {
  onOpenModal: (title: string, description: string) => void;
}

export interface ShowItem {
  tag: string;
  cat: string;
  name: string;
  src: string;
  isVideo?: boolean;
  videoUrl?: string;
  instagramUrl?: string;
}

const SHOWS_RAW: ShowItem[] = [
  // Video Show Reels
  { tag: 'Spiritual Video', cat: 'videos', isVideo: true, name: 'Amrut Vandana Drone Show', src: '/reelsthumbnail/amrut vandana.png', videoUrl: '/stories/YyETexLFNGtBRZkqv6Qu/video.mp4' },
  { tag: 'Sports Video', cat: 'videos', isVideo: true, name: 'GDP Cup 2026 Drone Spectacle', src: '/reelsthumbnail/GDP cup 2026.png', videoUrl: '/stories/Zd7nGPrFQYPGLtU3njiS/video.mp4' },
  { tag: 'Spiritual Video', cat: 'videos', isVideo: true, name: 'Hanuman Jayanti Drone Show', src: '/reelsthumbnail/hanuman jayanti.png', videoUrl: '/stories/mwSAWYi49Z8wt2YBK7SB/video.mp4' },
  { tag: 'Wedding Video', cat: 'videos', isVideo: true, name: 'Het & Rucha Wedding Drone Show', src: '/reelsthumbnail/Het & Rucha Wedding.png', videoUrl: '/stories/AO1Z8RQ9AM6JHQp6EySN/video.mp4' },
  { tag: 'Spiritual Video', cat: 'videos', isVideo: true, name: 'Khodiyar Ma Temple Drone Show', src: '/reelsthumbnail/khodiyar ma temple ( kkv ).png', videoUrl: '/stories/V1SakUWqB5qHXhklphTw/video.mp4' },
  { tag: 'Spiritual Video', cat: 'videos', isVideo: true, name: 'Namotsav Drone Light Performance', src: '/reelsthumbnail/namotsav.png', videoUrl: '/stories/Cb1YHJMLLjm6XMmoOZpx/video.mp4' },
  { tag: 'Wedding Video', cat: 'videos', isVideo: true, name: 'Prateek & Jenny Wedding Drones', src: '/reelsthumbnail/prateek & jenny wedding drones show.png', videoUrl: '/stories/peiPa6iVL3irXCVrKDNQ/video.mp4' },
  { tag: 'Spiritual Video', cat: 'videos', isVideo: true, name: 'Ram Navami Sky Performance', src: '/reelsthumbnail/ram navmi.png', videoUrl: '/stories/n0HrUCdju1Q2chJh1S42/video.mp4' },
  { tag: 'Tech & Ent Video', cat: 'videos', isVideo: true, name: 'Science City Drone Show', src: '/reelsthumbnail/science city drones show.png', videoUrl: '/stories/3fXIKCCdkWQLC4ZtpBCZ/video.mp4' },
  { tag: 'Drone Show Video', cat: 'videos', isVideo: true, name: 'IPL Opening Drone Show', src: '/reelsthumbnail/magnific_enhance-this-real-drone-l_jSazQqBLD0.png', videoUrl: '/stories/QEy7ZR7rK1gQDS7g105G/video.mp4' },

  // Photo Showcase Items
  { tag: 'Wedding', cat: 'wedding', name: 'Grand Sky Finale', src: '/past_shows/wedding images/ChatGPT Image May 29, 2026, 10_21_15 AM.png' },
  { tag: 'National Event', cat: 'government', name: 'Republic Day', src: '/past_shows/Gov. & national/wildmind_zeel_2026_03_14_12_16_20.jpg' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Divine Celebration', src: '/past_shows/Spiritual images/magnific_enhance-this-real-wedding_0pimfkMTfW.png' },
  { tag: 'Corporate', cat: 'corporate', name: 'Product Launch', src: '/past_shows/corporate/wildmind_zeel_2026_03_14_12_16_13.jpg' },
  { tag: 'Sports & Ent', cat: 'sports', name: 'Stadium Spectacle', src: '/past_shows/sports & Ent/bb107a21-d8cb-4415-9ceb-49893721099f.png' },
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
  { tag: 'Spiritual', cat: 'spiritual', name: 'Divine Ceremony', src: '/past_shows/Spiritual images/0e722076-3068-402d-89e0-bcfeceacd621.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Holy Gathering', src: '/past_shows/Spiritual images/542d63d5-eaa3-46ec-9964-c0e794583f50.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Divine Formation', src: '/past_shows/Spiritual images/5f9410ec-1e52-48a5-a877-aeafee2e22c4.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Sacred Ritual', src: '/past_shows/Spiritual images/d905ecea-460f-4a78-add4-ac9cb16fc144.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Temple Formation', src: '/past_shows/Spiritual images/fb0adb1a-bb10-4bf0-9d6e-63a43fb4f91b.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Religious Festival', src: '/past_shows/Spiritual images/magnific_WMOM7zncXe.png' },
  { tag: 'Spiritual', cat: 'spiritual', name: 'Spiritual Show Enhanced', src: '/past_shows/Spiritual images/magnific_enhance-this-real-wedding_PijYVqq42C.png' },
  { tag: 'Corporate', cat: 'corporate', name: 'Corporate Summit', src: '/past_shows/corporate/wildmind_zeel_2026_03_14_12_16_26.jpg' },
  { tag: 'Corporate', cat: 'corporate', name: 'Tech Expo', src: '/past_shows/corporate/wildmind_zeel_2026_03_14_12_16_31.jpg' },
  { tag: 'Corporate', cat: 'corporate', name: 'Brand Event', src: '/past_shows/corporate/wildmind_zeel_2026_03_14_12_18_30_brighter.jpg' },
  { tag: 'Corporate', cat: 'corporate', name: 'Company Anniversary', src: '/past_shows/corporate/wildmind_zeel_2026_03_14_12_22_54.jpg' },
  { tag: 'Corporate', cat: 'corporate', name: 'Global Launch', src: '/past_shows/corporate/wildmind_zeel_2026_03_14_12_24_46.jpg' },
  { tag: 'Corporate', cat: 'corporate', name: 'Annual Gala', src: '/past_shows/corporate/wildmind_zeel_2026_03_18_16_37_34.jpg' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/0e62e4bf-0d56-4beb-b5ed-49a022cbfdde.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/149d7cb6-a71b-4ed5-b170-da4ee7258818.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/48783afc-6294-4c79-80a8-288ddf554490.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/8006958b-f4b4-43b3-a37b-0ff56833d112.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Couple Portrait', src: '/past_shows/wedding images/Gemini_Generated_Image_rby995rby995rby9.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show (HR)', src: '/past_shows/wedding images/HR drone image.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/b211a032-e822-472c-8277-16762dc88cf2.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/ede65e48-7a7c-45ff-80a3-c0db96b11456.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/fdaeab6f-caad-46b6-b725-b35ef37e05ff.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/magnific_43kRLWP9Aa.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Lakeside Celebration', src: '/past_shows/wedding images/magnific_74H4g1zJAL.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Royal Palace Wedding', src: '/past_shows/wedding images/magnific_cDyDnho0eP.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show Enhanced', src: '/past_shows/wedding images/magnific_enhance-this-real-wedding_brmwLtD5Y2.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show Enhanced', src: '/past_shows/wedding images/magnific_enhance-this-real-wedding_mCV5I4ahJQ.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show Enhanced', src: '/past_shows/wedding images/magnific_enhance-this-real-wedding_mCV5dmRhJQ.png' },
  { tag: 'Wedding', cat: 'wedding', name: 'Wedding Show', src: '/past_shows/wedding images/magnific_swf7k5sl8e.png' },
  { tag: 'Sports & Ent', cat: 'sports', name: 'Arena Sky Light Show', src: '/past_shows/sports & Ent/18e98e5d-fd45-4e5f-b043-33ea18497cba.jpg' },
  { tag: 'Sports & Ent', cat: 'sports', name: 'Sports Spectacle Enhanced', src: '/past_shows/sports & Ent/magnific_enhance-this-real-drone-l_2986599818.png' },
  { tag: 'Sports & Ent', cat: 'sports', name: 'Sports Spectacle', src: '/past_shows/sports & Ent/magnific_this-is-a-real-photograph_WMNI8aRcXe.png' },
];

const SHOWS_UNORDERED = SHOWS_RAW.map((show) => ({ ...show, src: publicAsset(show.src) }));

const interleaveShows = (shows: typeof SHOWS_UNORDERED) => {
  const groups: Record<string, typeof SHOWS_UNORDERED> = {};
  shows.forEach((show) => {
    if (!groups[show.cat]) groups[show.cat] = [];
    groups[show.cat].push(show);
  });
  
  const interleaved: typeof SHOWS_UNORDERED = [];
  const categories = Object.keys(groups);
  let maxLen = 0;
  categories.forEach((cat) => {
    maxLen = Math.max(maxLen, groups[cat].length);
  });
  
  for (let i = 0; i < maxLen; i++) {
    categories.forEach((cat) => {
      if (i < groups[cat].length) {
        interleaved.push(groups[cat][i]);
      }
    });
  }
  return interleaved;
};

const SHOWS = interleaveShows(SHOWS_UNORDERED);

const TABS = [
  { label: 'All Shows', cat: 'all' },
  { label: 'Videos 🎬', cat: 'videos' },
  { label: 'Weddings', cat: 'wedding' },
  { label: 'Corporate', cat: 'corporate' },
  { label: 'Spiritual', cat: 'spiritual' },
  { label: 'Gov. & National', cat: 'government' },
  { label: 'Sports & Ent', cat: 'sports' },
];

export default function Showcase({ onOpenModal }: ShowcaseProps) {
  const [activeTab, setActiveTab] = useState('all');
  const [activeVideoItem, setActiveVideoItem] = useState<ShowItem | null>(null);
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

  const handleCardClick = (show: ShowItem) => {
    if (show.isVideo) {
      setActiveVideoItem(show);
    } else {
      onOpenModal(show.name, `Enquire about ${show.name} (${show.tag})`);
    }
  };

  return (
    <section id="showcase" className="bg-black select-none overflow-hidden py-12">
      <div className="showcase-head flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-20 mb-4 font-sans">
        <div>
          <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-3">
            Portfolio Showcase
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-2 md:mb-0">
            Moments We've <em className="text-gold italic">Painted</em>
          </h2>
        </div>
      </div>

      <div className="showcase-tabs flex gap-2 overflow-x-auto px-6 md:px-20 mb-6 scrollbar-none font-sans">
        {TABS.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tab.cat)}
            className={`stab px-6 py-2.5 text-[0.7rem] tracking-[0.14em] uppercase rounded-[2px] cursor-pointer transition-all duration-200 shrink-0 ${
              activeTab === tab.cat
                ? 'bg-gold border-gold text-black font-semibold'
                : 'bg-transparent border border-border text-text-muted hover:bg-gold/20 hover:border-gold hover:text-gold'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Showcase Horizontal Scroll Wrapper */}
      <div className="relative">
        {/* Scroll Controls */}
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
          className="showcase-scroll flex overflow-x-auto gap-[12px] px-6 md:px-20 pb-8 scrollbar-none font-sans"
          style={{ scrollbarWidth: 'none' }}
        >
          {filteredShows.map((show, idx) => (
            <FadeUp
              key={idx}
              delay={(idx % 6) * 50}
              className="show-card shrink-0 w-[280px] md:w-[340px] h-[380px] md:h-[440px] bg-dark-3 relative overflow-hidden border border-gold/[0.1] hover:border-gold/50 rounded-[4px] cursor-pointer transition-all duration-300 group shadow-lg"
            >
              <div
                className="w-full h-full"
                onClick={() => handleCardClick(show)}
              >
                <div className="show-card-bg absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                  <div
                    className="w-full h-full bg-contain bg-center bg-black/90 bg-no-repeat p-2"
                    style={{ backgroundImage: `url('${show.src}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 group-hover:via-black/20 transition-colors duration-500" />
                </div>

                {/* Video Tag / Play Overlay */}
                {show.isVideo && (
                  <>
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 bg-black/80 border border-gold/50 text-gold text-[0.62rem] font-medium tracking-[0.18em] uppercase rounded-full backdrop-blur-md">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-gold">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>                      VIDEO
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-14 h-14 rounded-full bg-gold/90 border border-gold text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 ml-0.5 fill-black">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}

                {/* Info Footer */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col justify-end">
                  <span className="text-[0.6rem] tracking-[0.25em] uppercase text-gold font-medium mb-1">
                    {show.tag}
                  </span>
                  <h3 className="font-cormorant text-xl text-white font-normal group-hover:text-gold transition-colors">
                    {show.name}
                  </h3>
                  <div className="mt-2 text-[0.65rem] tracking-[0.15em] uppercase text-gold-dim group-hover:text-gold flex items-center gap-1">
                    {show.isVideo ? 'Watch Reel Video →' : 'Enquire Show →'}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Interactive Video Modal */}
      {activeVideoItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setActiveVideoItem(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-dark-2 border border-gold/30 rounded-[8px] overflow-hidden shadow-2xl p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideoItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="mb-4">
              <span className="text-[0.62rem] tracking-[0.25em] uppercase text-gold">{activeVideoItem.tag}</span>
              <h3 className="font-cormorant text-2xl md:text-3xl text-text font-light">{activeVideoItem.name}</h3>
            </div>

            <div className="relative aspect-video w-full bg-black rounded-[4px] overflow-hidden flex items-center justify-center border border-border/20">
              {activeVideoItem.videoUrl ? (
                <video
                  src={publicAsset(activeVideoItem.videoUrl)}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : activeVideoItem.instagramUrl ? (
                <iframe
                  src={`${activeVideoItem.instagramUrl.replace(/\/$/, '')}/embed`}
                  title={activeVideoItem.name}
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gold">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                  <p className="text-text text-xl font-cormorant">{activeVideoItem.name}</p>
                  <p className="text-text-muted text-sm max-w-md">
                    High-definition drone show video highlight. Contact FLYBIT Dynamics to view complete event reels and technical choreography.
                  </p>
                  <button
                    onClick={() => {
                      const name = activeVideoItem.name;
                      setActiveVideoItem(null);
                      onOpenModal(`Video Reel Enquiry: ${name}`, `I would like to request full video reels and details for ${name}.`);
                    }}
                    className="mt-2 px-6 py-2.5 bg-gold text-black font-semibold text-xs tracking-wider uppercase rounded-[2px] hover:bg-gold-light transition-colors"
                  >
                    Request Full Video Reel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
