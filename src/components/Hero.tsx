'use client';

import React, { useState, useEffect } from 'react';

const HERO_IMAGES = [
  '/hero_section_images/magnific_hyperrealistic-drone-show_DBNJbakpcl.png',
  '/hero_section_images/magnific_hyperrealistic-drone-show_hEYZ7NRvqL.png',
  '/hero_section_images/magnific_realistic-drone-light-sho_hEYZ1mkvqL.png',
  '/hero_section_images/magnific_ultrarealistic-drone-ligh_TePUHS0VNR.png',
  '/hero_section_images/magnific_ultrarealistic-drone-ligh_jShBPZ1LD0.png',
  '/hero_section_images/magnific_ultrarealistic-drone-ligh_nTwLFEbYQD.png',
  '/hero_section_images/magnific_ultrarealistic-drone-ligh_vuW27nLa47.png',
  '/hero_section_images/magnific_ultrarealistic-drone-show_8vA6HoAIrU.png'
];

interface HeroProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Extend images array with a clone of the first image for seamless looping
  const extendedImages = [...HERO_IMAGES, HERO_IMAGES[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000); // Hold for 4 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === HERO_IMAGES.length) {
      // We've reached the clone of the first image. Wait for the slide animation to finish.
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // matches the duration-1000 class
      return () => clearTimeout(timeout);
    } else if (!isTransitioning) {
      // Re-enable the transition shortly after instantly jumping back to the first image
      const timeout = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isTransitioning]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
        <div 
          className={`flex w-full h-full ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedImages.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full h-full"
              style={{
                backgroundImage: `url('${src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      </div>

      {/* Background gradients matching original design */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 70% at 50% 75%, rgba(201, 168, 76, 0.07) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 15% 20%, rgba(201, 168, 76, 0.03) 0%, transparent 60%)
          `,
        }}
      />

      {/* Grid overlay matching original design */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201, 168, 76, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 85%, black 15%, transparent 65%)',
          maskImage: 'radial-gradient(ellipse at 50% 85%, black 15%, transparent 65%)',
        }}
      />

      {/* Animated SVG stars overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="70%" r="40%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="720" cy="630" rx="500" ry="180" fill="url(#glow)" />

        {/* Animated drone dots */}
        <g fill="rgba(201, 168, 76, 0.7)">
          <circle cx="200" cy="180" r="1.5">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="3.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="380" cy="120" r="1">
            <animate attributeName="opacity" values="1;0.2;1" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="1100" cy="160" r="1.5">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="1280" cy="220" r="1">
            <animate attributeName="opacity" values="1;0.3;1" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="80" r="1">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="860" cy="100" r="1.5">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="400" r="1">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="1350" cy="380" r="1.5">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Hero drone formation SVG */}
        <g transform="translate(660, 580)" fill="none">
          <g fill="rgba(201, 168, 76, 0.5)">
            <circle cx="0" cy="-80" r="2">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;0,-4;0,0"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="50" cy="-60" r="2.5">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;2,-3;0,0"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="-50" cy="-60" r="2.5">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;-2,-3;0,0"
                dur="3.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="90" cy="-30" r="2">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;3,-2;0,0"
                dur="4.2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="-90" cy="-30" r="2">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;-3,-2;0,0"
                dur="3.9s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="120" cy="10" r="2.5">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;4,0;0,0"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="-120" cy="10" r="2.5">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;-4,0;0,0"
                dur="4.1s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>
      </svg>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-8 max-w-[900px] select-none">
        <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold mb-10 flex items-center justify-center gap-5 font-sans">
          <span className="w-[50px] h-[1px] bg-gradient-to-r from-transparent to-gold-dim" />
          India's Premier Drone Light Show Company
          <span className="w-[50px] h-[1px] bg-gradient-to-l from-transparent to-gold-dim" />
        </div>
        <h1 className="font-bebas text-[clamp(4.5rem,13vw,12rem)] leading-[0.86] tracking-[0.03em] mb-8">
          <span className="text-gold block">FLYBIT</span>
          <span className="text-text block">DYNAMICS</span>
        </h1>
        <p className="text-[0.95rem] text-text-muted max-w-[430px] mx-auto mb-14 leading-[1.9] tracking-[0.02em] font-sans">
          India’s trusted drone show company — delivering unforgettable aerial experiences with 250+ synchronized drones for weddings, corporate events, festivals, and grand celebrations.
        </p>
        <div className="flex gap-5 justify-center flex-wrap">
          <button
            onClick={() =>
              onOpenModal(
                'Book a Show',
                "Tell us about your event and we'll create the perfect aerial spectacle for you."
              )
            }
            className="bg-gold hover:bg-gold-light text-black font-medium px-11 py-4 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 cursor-pointer md:cursor-none hover:-translate-y-1 font-sans"
          >
            Book a Show
          </button>
          <a
            href="#showcase"
            className="border border-text/18 hover:border-gold text-text hover:text-gold font-light px-11 py-4 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 md:cursor-none hover:-translate-y-1 inline-block font-sans"
          >
            See Showcase
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-text-dim text-[0.6rem] tracking-[0.2em] uppercase font-sans">
        <div
          className="w-[1px] h-11 scroll-line-animate"
          style={{
            background: 'linear-gradient(to bottom, var(--color-gold-dim), transparent)',
          }}
        />
        Scroll
      </div> */}
    </section>
  );
}
