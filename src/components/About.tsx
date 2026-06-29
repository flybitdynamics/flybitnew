'use client';

import React from 'react';
import Link from 'next/link';
import FadeUp from './FadeUp';
import { publicAsset } from '@/lib/public-assets';

interface AboutProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function About({ onOpenModal }: AboutProps) {
  const pills = [
    'In-house Technology',
    'DGCA Certified Pilots',
    'Bespoke Choreography',
    'Zero Carbon Footprint',
    'Pan-India Operations',
    '24/7 Event Support',
  ];

  return (
    <section
      id="about"
      className="bg-dark px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center select-none"
    >
      <FadeUp className="about-visual relative h-[380px] md:h-[520px] w-full">
        <div className="about-frame absolute inset-0 border border-border rounded-[3px]">
          {/* Corner highlights */}
          <div className="corner tl absolute w-[18px] h-[18px] border-t-2 border-l-2 border-gold top-[-1px] left-[-1px]" />
          <div className="corner tr absolute w-[18px] h-[18px] border-t-2 border-r-2 border-gold top-[-1px] right-[-1px]" />
          <div className="corner bl absolute w-[18px] h-[18px] border-b-2 border-l-2 border-gold bottom-[-1px] left-[-1px]" />
          <div className="corner br absolute w-[18px] h-[18px] border-b-2 border-r-2 border-gold bottom-[-1px] right-[-1px]" />

          <div className="about-inner absolute inset-[18px] border border-gold/[0.06] rounded-[2px] bg-dark-3 overflow-hidden">
            <img
              src={publicAsset('/past_shows/corporate/wildmind_zeel_2026_03_14_12_16_31.jpg')}
              alt="Globe drone formation at Science City — FLYBIT Dynamics"
              className="w-full h-full object-cover object-[center_28%] block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={100} className="font-sans">
        <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-5">
          Who We Are
        </div>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-6">
          India's Sky Is Our <em className="text-gold italic">Canvas</em>
        </h2>
        <p className="text-[0.9rem] text-text-muted leading-relaxed max-w-[500px]">
          Founded in 2024, FLYBIT Dynamics is India's most awarded drone light show company. We combine military-grade drone technology with cinematic storytelling to create once-in-a-lifetime aerial experiences that leave audiences speechless.
        </p>
        <p className="text-[0.9rem] text-text-muted leading-relaxed max-w-[500px] mt-5">
          From elegant wedding finales to large-scale aerial spectacles, every Flybit Dynamics Drone Light show is thoughtfully designed, choreographed, and executed entirely in-house.        </p>

        <div className="feat-pills grid grid-cols-2 gap-5 mt-10">
          {pills.map((pill, idx) => (
            <div
              key={idx}
              className="fpill flex items-center gap-3 text-[0.78rem] text-text-muted tracking-[0.04em]"
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
              {pill}
            </div>
          ))}
        </div>

        <Link
          href="/about"
          className="btn-g bg-gold hover:bg-gold-light text-black font-medium px-11 py-4 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 cursor-pointer md:cursor-none mt-10 hover:-translate-y-1 inline-block text-center"
        >
          Discover Our Story →
        </Link>
      </FadeUp>
    </section>
  );
}
