'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { publicAsset } from '@/lib/public-assets';

interface HeroAboutProps {
  onOpenModal?: (title: string, description: string) => void;
}

export default function HeroAbout({ onOpenModal }: HeroAboutProps) {
  const slides = [
    '/aboutimage/hero/image.png',
    '/aboutimage/hero/image copy.png',
    '/aboutimage/hero/image copy 2.png',
  ];

  useEffect(() => {
    // Simple intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#060c18] via-[#060606] to-[#0a0a0a]"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201, 168, 76, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
          WebkitMaskImage: 'radial-gradient(ellipse at 30% 60%, black 5%, transparent 60%)',
          maskImage: 'radial-gradient(ellipse at 30% 60%, black 5%, transparent 60%)',
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-[20%] left-0 w-[45%] h-[60%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(10,18,45,0.7), transparent 70%)'
        }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-20 pt-28 pb-14 max-w-[1440px] w-full mx-auto">
        <div className="fade-left transition-all duration-700 ease-out">
          {/* <div className="text-[0.6rem] tracking-[0.45em] uppercase text-gold mb-8 flex items-center gap-4 font-sans">
            <span className="w-[36px] h-[1px] bg-gold-dim" />
            Company Profile
          </div> */}

          <h1 className="font-bebas text-[3.2rem] md:text-[clamp(4rem,9vw,9rem)] leading-[0.86] tracking-[0.03em] mb-8">
            <span className="text-text block">About</span>
            <span className="text-gold block">FLYBIT</span>
            <span className="text-text block">Dynamics</span>
          </h1>

          <p className="font-cormorant text-[1.2rem] italic font-light text-text-muted leading-[1.75] max-w-[440px] mb-4">
            Lighting up the sky isn't just a show — it's an experience your audience will <em className="text-gold">never forget.</em>
          </p>

          <p className="font-cormorant text-[1.3rem] md:text-[1.5rem] italic text-gold mb-10">
            "Precision. Creativity. Technology."
          </p>

          <div className="flex gap-4 flex-wrap mb-14">
            <Link
              href="/stories"
              className="bg-gold hover:bg-gold-light text-black font-medium px-9 py-3.5 text-[0.73rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 hover:-translate-y-0.5 inline-block font-sans"
            >
              See Our Work
            </Link>
            <button
              onClick={() => onOpenModal?.('Book Your Show', "Tell us about your event and we'll design the perfect aerial spectacle — from 200 to 3,000 drones, anywhere in India.")}
              className="bg-transparent border border-white/10 hover:border-gold hover:text-gold text-text font-light px-9 py-3.5 text-[0.73rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 hover:-translate-y-0.5 inline-block font-sans cursor-pointer"
            >
              Book a Show
            </button>
          </div>

          <div className="flex gap-8 md:gap-10 flex-wrap md:flex-nowrap">
            <div>
              <div className="font-bebas text-[2.4rem] text-gold leading-none tracking-[0.04em]">150</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase text-text-dim mt-1">Drones Available</div>
            </div>
            <div>
              <div className="font-bebas text-[2.4rem] text-gold leading-none tracking-[0.04em]">5+</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase text-text-dim mt-1">Show Categories</div>
            </div>
            <div>
              <div className="font-bebas text-[2.4rem] text-gold leading-none tracking-[0.04em]">2km</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase text-text-dim mt-1">Sky Engagement</div>
            </div>
          </div>
        </div>

        <div className="relative fade-right transition-all duration-700 ease-out delay-100 mx-auto md:mx-0 w-full">
          <div className="relative border border-border rounded-[3px] overflow-hidden">
            <div className="absolute top-[-1px] left-[-1px] w-4 h-4 border-t-2 border-l-2 border-gold z-10" />
            <div className="absolute top-[-1px] right-[-1px] w-4 h-4 border-t-2 border-r-2 border-gold z-10" />
            <div className="absolute bottom-[-1px] left-[-1px] w-4 h-4 border-b-2 border-l-2 border-gold z-10" />
            <div className="absolute bottom-[-1px] right-[-1px] w-4 h-4 border-b-2 border-r-2 border-gold z-10" />

            <div className="relative w-full aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-dark-2">
              <div
                className="flex h-full"
                style={{
                  width: '400%',
                  animation: 'about-hero-slide-pause 12s infinite',
                }}
              >
                {[...slides, slides[0]].map((slide, idx) => (
                  <div key={idx} className="h-full relative flex-shrink-0" style={{ width: '25%' }}>
                    <img
                      src={publicAsset(slide)}
                      alt={`Indian flag drone formation at Science City — FLYBIT Dynamics - Slide ${idx + 1}`}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                ))}
              </div>

              <style>{`
                @keyframes about-hero-slide-pause {
                  0%, 25% { transform: translateX(0); }
                  33.33%, 58.33% { transform: translateX(-25%); }
                  66.66%, 91.66% { transform: translateX(-50%); }
                  100% { transform: translateX(-75%); }
                }
              `}</style>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45 pointer-events-none z-10" />
          </div>

          <div className="absolute bottom-[-1px] left-[-1px] bg-gold text-black px-6 py-4 z-20 rounded-tr-[3px]">
            {/* <span className="font-bebas text-[2.4rem] leading-none block">100%</span> */}
            <span className="text-[0.76rem] tracking-[0.18em] uppercase font-medium">Made in India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
