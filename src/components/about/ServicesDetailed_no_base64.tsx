'use client';
import React, { useState, useEffect, useRef } from 'react';

interface ServicesDetailedProps {
  onOpenModal?: (title: string, desc: string) => void;
}

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

  const openModal = (title: string, desc: string) => {
     if (onOpenModal) onOpenModal(title, desc);
     else console.log("Open modal:", title, desc);
  };

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
  {activeTab === "social" && <div className="srv-panel active" id="srv-social">

    <div className="srv-grid">
      <div className="srv-img" onClick={() => openModal(`Social Events`, `Weddings, anniversaries, birthdays, love stories and family reunions — FLYBIT creates personalised sky-art to make every milestone unforgettable.`)}><img src="BASE64_PLACEHOLDER" alt="Birthday drone show" /><div className="srv-img-overlay"><span className="srv-img-label">Birthday Celebration</span></div></div>
      <div className="srv-img" onClick={() => openModal(`Portrait Formation`, `Our drones can form intricate portrait silhouettes in the sky — completely personalised to the individual being celebrated.`)}><img src="BASE64_PLACEHOLDER" alt="Portrait silhouette" /><div className="srv-img-overlay"><span className="srv-img-label">Portrait Silhouette</span></div></div>
      <div className="srv-img" onClick={() => openModal(`Wedding Finale`, `The ultimate wedding grand finale — couple formations, heart shapes, your initials — all written 150m above your guests.`)}><img src="BASE64_PLACEHOLDER" alt="Wedding drone show" /><div className="srv-img-overlay"><span className="srv-img-label">Wedding Finale</span></div></div>
    </div>
  </div>}
  {activeTab === "corporate" && <div className="srv-panel" id="srv-corporate">

    <div className="srv-grid">
      <div className="srv-img" onClick={() => openModal(`Brand Logo in the Sky`, `Flocare, Shreshtha Capital and more — we've animated brand logos across Indian skies, creating press-worthy moments worth 10x the investment.`)}><img src="BASE64_PLACEHOLDER" alt="Flocare logo drone show" /><div className="srv-img-overlay"><span className="srv-img-label">Flocare Brand Launch</span></div></div>
      <div className="srv-img" onClick={() => openModal(`Shreshtha Capital`, `A stunning financial brand reveal — growth chart, bar graph, and the full brand identity written in drones above the city skyline.`)}><img src="BASE64_PLACEHOLDER" alt="Shreshtha Capital" /><div className="srv-img-overlay"><span className="srv-img-label">Shreshtha Capital</span></div></div>
      <div className="srv-img" onClick={() => openModal(`Corporate Spectacle`, `Dynamic multi-formation sequences for brand events, award ceremonies, and company milestones — designed to go viral.`)}><img src="BASE64_PLACEHOLDER" alt="Corporate drone show" /><div className="srv-img-overlay"><span className="srv-img-label">Corporate Formation</span></div></div>
    </div>
  </div>}
  {activeTab === "government" && <div className="srv-panel" id="srv-government">

    <div className="srv-grid">
      <div className="srv-img" onClick={() => openModal(`Government Events`, `FLYBIT has delivered for Gujarat Police and other state-government clients with VVIP-grade precision and full regulatory compliance.`)}><img src="BASE64_PLACEHOLDER" alt="Government drone show" /><div className="srv-img-overlay"><span className="srv-img-label">State Government Event</span></div></div>
      <div className="srv-img" onClick={() => openModal(`Republic Day`, `Happy Republic Day — written across the night sky with hundreds of drones. FLYBIT has delivered national day celebrations for government clients.`)}><img src="BASE64_PLACEHOLDER" alt="Republic Day" /><div className="srv-img-overlay"><span className="srv-img-label">Republic Day</span></div></div>
      <div className="srv-img" onClick={() => openModal(`Indian Tricolour`, `A full Indian flag formation — saffron, white, green and the Ashoka Chakra — painted precisely in the sky by our drone fleet.`)}><img src="BASE64_PLACEHOLDER" alt="Indian flag drone formation" /><div className="srv-img-overlay"><span className="srv-img-label">National Tricolour</span></div></div>
    </div>
  </div>}
  {activeTab === "spiritual" && <div className="srv-panel" id="srv-spiritual">

    <div className="srv-grid">
      <div className="srv-img" onClick={() => openModal(`Sri Krishna at Ayodhya`, `Our most celebrated work — a full-colour Sri Krishna formation over a temple, combining 200+ drones for an image that became iconic.`)}><img src="BASE64_PLACEHOLDER" alt="Krishna drone show" /><div className="srv-img-overlay"><span className="srv-img-label">Sri Krishna · Ayodhya</span></div></div>
      <div className="srv-img" onClick={() => openModal(`Spiritual Formations`, `Ram, Shiva, Ganesha, Krishna — FLYBIT has created majestic deity formations for temples, religious gatherings, and spiritual festivals across India.`)}><img src="BASE64_PLACEHOLDER" alt="Ram formation" /><div className="srv-img-overlay"><span className="srv-img-label">Divine Formation</span></div></div>
      <div className="srv-img" onClick={() => openModal(`Sacred Geometry`, `Om symbols, sacred geometry, and Diwali formations — our spiritual category is one of our most requested for festivals and religious celebrations.`)}><img src="BASE64_PLACEHOLDER" alt="Spiritual show" /><div className="srv-img-overlay"><span className="srv-img-label">Spiritual Show</span></div></div>
    </div>
  </div>}
  {activeTab === "sports" && <div className="srv-panel" id="srv-sports">

    <div className="srv-grid">
      <div className="srv-img" onClick={() => openModal(`Olympic-Scale Shows`, `Stadium-level drone shows for opening ceremonies — Olympic rings, national symbols, and crowd-scale spectacles that compete on the world stage.`)}><img src="BASE64_PLACEHOLDER" alt="Olympic rings drone" /><div className="srv-img-overlay"><span className="srv-img-label">Olympic Rings Formation</span></div></div>
      <div className="srv-img" onClick={() => openModal(`Cricket Formations`, `A drone-lit cricketer in batting stance — one of FLYBIT's iconic sports formations. Perfect for IPL events, stadium openings, and sporting brand activations.`)}><img src="BASE64_PLACEHOLDER" alt="Cricket drone formation" /><div className="srv-img-overlay"><span className="srv-img-label">Cricket Formation</span></div></div>
      <div className="srv-img" onClick={() => openModal(`Trophy & Cup Formations`, `Award and trophy formations for sporting events — ICC, IPL, and tournament celebrations with multi-coloured precision drone art.`)}><img src="BASE64_PLACEHOLDER" alt="Trophy formation" /><div className="srv-img-overlay"><span className="srv-img-label">Sports Trophy</span></div></div>
    </div>
  </div>}
</section>
  );
}
