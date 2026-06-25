'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function AboutIntro() {
  useEffect(() => {
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

    document.querySelectorAll('.fade-left, .fade-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-intro" className="overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Quote & Pills Column (Now on Right Desktop / Bottom Mobile) */}
        <div className="order-2 md:order-2 fade-right opacity-0 transition-all duration-700 ease-out w-full">
          <div className="border-l-2 border-gold pl-8">
            <p className="font-cormorant text-[1.6rem] italic font-light text-text leading-[1.65]">
              "At <strong className="text-gold font-normal">FLYBIT DYNAMICS</strong>, we combine cutting-edge drone technology, creative storytelling, and perfect synchronization to turn your event into a spectacle."
            </p>
            {/* <cite className="text-[0.65rem] tracking-[0.15em] uppercase text-text-dim mt-4 block not-italic">
              — FLYBIT DYNAMICS, AHMEDABAD
            </cite> */}
          </div>
          
          <div className="about-pills mt-10 ml-6 md:ml-0">
            <div className="apill">Precision aerial choreography</div>
            <div className="apill">Made-in-India drone fleet</div>
            <div className="apill">Custom formations & branding</div>
            <div className="apill">End-to-end event management</div>
            <div className="apill">Audio & narrative design</div>
            <div className="apill">Cinematic production add-ons</div>
          </div>
        </div>

        {/* Who We Are Column (Now on Left Desktop / Top Mobile) */}
        <div className="order-1 md:order-1 fade-left opacity-0 transition-all duration-700 ease-out w-full">
          <div className="text-[0.6rem] tracking-[0.4em] uppercase text-gold mb-4 font-sans">
            Who We Are
          </div>
          
          <h2 className="font-cormorant text-[clamp(2.4rem,5vw,4.8rem)] font-light leading-[1.05] text-text mb-6">
            The Sky Is Our <br />
            <span className="text-gold italic block mt-2">Canvas</span>
          </h2>
          
          <p className="text-[0.88rem] text-text-muted leading-[2] mb-5 font-sans">
            From corporate launches to large-scale national celebrations, we design drone shows that don't just look good — they leave a lasting impression.
          </p>
          
          <p className="text-[0.88rem] text-text-muted leading-[2] mb-5 font-sans">
            We believe in the power of light, movement, and technology to create magic. From a spark of inspiration to sky-filling animations, our drone light shows are crafted with precision and passion.
          </p>
          
          <p className="text-[0.88rem] text-text-muted leading-[2] mb-8 font-sans">
            Our clients span Social Events, Corporate Launches, Government Ceremonies, Spiritual Gatherings, and Sports — each show a bespoke, one-of-a-kind aerial experience built entirely around your vision.
          </p>
          
          {/* <Link
            href="#work"
            className="bg-gold hover:bg-gold-light text-black font-medium px-9 py-3.5 text-[0.73rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 hover:-translate-y-0.5 inline-block font-sans"
          >
            View Our Work →
          </Link> */}
        </div>
        
      </div>
    </section>
  );
}
