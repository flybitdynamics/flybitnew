'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Link from 'next/link';

interface CityLandingPageProps {
  city: string;
  h1: string;
  tagline: string;
  introText: string;
  landmarkDetails: string;
  popularEvents: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export default function CityLandingPage({
  city,
  h1,
  tagline,
  introText,
  landmarkDetails,
  popularEvents,
  testimonial,
}: CityLandingPageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  const openModal = (title: string, description: string) => {
    setModalTitle(title);
    setModalDesc(description);
    setModalOpen(true);
  };

  // Localized Schema
  const citySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://www.flybitdynamics.com/drone-show-${city.toLowerCase()}#localbusiness`,
        "name": `FLYBIT Dynamics Drone Shows ${city}`,
        "image": "https://www.flybitdynamics.com/logo.png",
        "telephone": "+919979850863",
        "url": `https://www.flybitdynamics.com/drone-show-${city.toLowerCase()}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city,
          "addressRegion": city === 'Delhi' ? 'Delhi' : city === 'Mumbai' ? 'Maharashtra' : city === 'Ahmedabad' ? 'Gujarat' : 'Rajasthan',
          "addressCountry": "IN"
        },
        "priceRange": "$$$",
        "areaServed": [city, "India"]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-text selection:bg-gold selection:text-black">
      {/* City Specific JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      <Navbar onOpenModal={openModal} />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-black pt-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 60% at 50% 85%, rgba(201, 168, 76, 0.09) 0%, transparent 60%),
              linear-gradient(rgba(201, 168, 76, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201, 168, 76, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 70px 70px, 70px 70px',
          }}
        />

        <div className="relative z-10 text-left px-6 md:px-20 max-w-[1440px] w-full mx-auto select-none">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-8 flex items-center justify-start gap-4 font-sans">
            <span className="w-10 h-[1px] bg-gold-dim" />
            {tagline}
          </div>
          <h1 className="font-bebas text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-[0.03em] mb-8 uppercase">
            <span className="text-gold block">Drone Show in</span>
            <span className="text-text block">{city}</span>
          </h1>
          <p className="text-[0.95rem] text-white max-w-[550px] mb-14 leading-[1.8] tracking-[0.02em] font-sans">
            {introText}
          </p>
          <div className="flex gap-5 justify-start flex-wrap">
            <button
              onClick={() =>
                openModal(
                  `Book a Drone Show in ${city}`,
                  `Tell us about your upcoming event in ${city} and we will craft a breathtaking aerial light show.`
                )
              }
              className="bg-gold hover:bg-gold-light text-black font-semibold px-11 py-4 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200"
            >
              Book Show in {city}
            </button>
            <Link
              href="/pricing"
              className="border border-text/18 hover:border-gold text-text hover:text-gold font-light px-11 py-4 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200"
            >
              View Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Local Landmark & Context Section */}
      <section className="py-20 border-t border-gold/10 bg-white/[0.005]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="font-sans">
            <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
              Premium Aerial Displays
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-8">
              Illuminating the Skies of <br />
              <em className="text-gold italic">{city}</em>
            </h2>
            <p className="text-[0.92rem] text-text-muted leading-relaxed mb-6">
              {landmarkDetails}
            </p>
            <p className="text-[0.92rem] text-text-muted leading-relaxed">
              {popularEvents}
            </p>
          </div>

          <div className="border border-gold/15 p-10 rounded bg-black relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-radial-glow pointer-events-none opacity-30" />
            <span className="text-gold font-bebas text-5xl opacity-20">“</span>
            <p className="text-lg italic font-light text-text leading-relaxed font-sans mb-8 relative z-10">
              {testimonial.quote}
            </p>
            <div className="font-sans">
              <h4 className="text-gold font-medium text-[0.9rem] tracking-[0.05em]">{testimonial.author}</h4>
              <p className="text-xs text-text-dim mt-0.5">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Quick View */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">
              Our Packages
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text">
              Flexible Swarm Sizes for <em className="text-gold italic">Any Event</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] hover:border-gold/30 transition-all duration-300 flex flex-col justify-between min-h-[360px] font-sans">
              <div>
                <span className="font-bebas text-gold text-3xl tracking-[0.05em] block mb-2">Logo &amp; Brand Displays</span>
                <span className="text-xs text-text-dim tracking-[0.1em] uppercase block mb-6">Names &amp; Brand Reveals</span>
                <p className="text-[0.88rem] text-text-muted leading-relaxed mb-6">
                  Perfect for brand logos, names, and linear geometric designs. High visibility animations for weddings and launches.
                </p>
              </div>
              <div className="border-t border-gold/10 pt-6">
                <span className="text-xs text-text-dim block mb-1">Starting from</span>
                <span className="text-gold font-bebas text-2xl tracking-[0.05em] block">₹4.0 Lakhs onwards</span>
              </div>
            </div>

            <div className="p-8 border border-gold/25 rounded bg-gold/[0.01] hover:border-gold transition-all duration-300 flex flex-col justify-between min-h-[360px] relative font-sans">
              <span className="absolute top-4 right-4 bg-gold text-black text-[0.58rem] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded">Popular</span>
              <div>
                <span className="font-bebas text-gold text-3xl tracking-[0.05em] block mb-2">Dynamic 3D Animations</span>
                <span className="text-xs text-text-dim tracking-[0.1em] uppercase block mb-6">High Fidelity Storytelling</span>
                <p className="text-[0.88rem] text-text-muted leading-relaxed mb-6">
                  Stunning 3D dynamic transitions, multi-colored drone choreography, and optimized design fidelity.
                </p>
              </div>
              <div className="border-t border-gold/10 pt-6">
                <span className="text-xs text-text-dim block mb-1">Starting from</span>
                <span className="text-gold font-bebas text-2xl tracking-[0.05em] block">₹4.0 Lakhs onwards</span>
              </div>
            </div>

            <div className="p-8 border border-gold/10 rounded bg-white/[0.005] hover:border-gold/30 transition-all duration-300 flex flex-col justify-between min-h-[360px] font-sans">
              <div>
                <span className="font-bebas text-gold text-3xl tracking-[0.05em] block mb-2">Grand Cinematic Spectacles</span>
                <span className="text-xs text-text-dim tracking-[0.1em] uppercase block mb-6">Custom Swarm Formations</span>
                <p className="text-[0.88rem] text-text-muted leading-relaxed mb-6">
                  Complex spatial layout animations, dense fleet storytelling, stadium openings, and national festival landmarks.
                </p>
              </div>
              <div className="border-t border-gold/10 pt-6">
                <span className="text-xs text-text-dim block mb-1">Starting from</span>
                <span className="text-gold font-bebas text-2xl tracking-[0.05em] block">₹4.0 Lakhs onwards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Regulations Section */}
      <section className="py-20 bg-dark-2/20 border-t border-gold/10 font-sans">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h3 className="font-cormorant text-3xl text-text font-light mb-6">
            DGCA Compliant Operations in <em className="text-gold italic">{city}</em>
          </h3>
          <p className="text-[0.88rem] text-text-muted leading-relaxed mb-10">
            Safety and regulatory clearance is our topmost priority. For every show in {city}, we handle coordinates mapping, ATC permissions, local police approvals, and secure DGCA clearance under Indian drone regulations. All operations are controlled by certified drone flight coordinators.
          </p>
          <button
            onClick={() => openModal(`Consultation for ${city} Drone Flight`, `Request detailed information on airspace restrictions and safe setup spaces in ${city}.`)}
            className="bg-transparent border border-gold/30 hover:border-gold text-gold hover:text-gold-light font-semibold px-8 py-3.5 text-[0.72rem] tracking-[0.15em] uppercase rounded-[2px] transition-colors duration-200"
          >
            Get Regulatory Info
          </button>
        </div>
      </section>

      <Footer onOpenModal={openModal} />

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        description={modalDesc}
      />
    </main>
  );
}
