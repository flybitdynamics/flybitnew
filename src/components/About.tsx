'use client';

import React from 'react';
import FadeUp from './FadeUp';

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
      className="bg-dark mt-20 lg:mt-32 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center select-none"
    >
      <FadeUp className="about-visual relative h-[380px] md:h-[520px] w-full">
        <div className="about-frame absolute inset-0 border border-border rounded-[3px]">
          {/* Corner highlights */}
          <div className="corner tl absolute w-[18px] h-[18px] border-t-2 border-l-2 border-gold top-[-1px] left-[-1px]" />
          <div className="corner tr absolute w-[18px] h-[18px] border-t-2 border-r-2 border-gold top-[-1px] right-[-1px]" />
          <div className="corner bl absolute w-[18px] h-[18px] border-b-2 border-l-2 border-gold bottom-[-1px] left-[-1px]" />
          <div className="corner br absolute w-[18px] h-[18px] border-b-2 border-r-2 border-gold bottom-[-1px] right-[-1px]" />

          <div className="about-inner absolute inset-[18px] border border-gold/[0.06] rounded-[2px] bg-dark-3 flex items-center justify-center overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 480"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Drone constellation lines */}
              <g fill="none">
                <circle cx="200" cy="160" r="1.5" fill="rgba(201,168,76,0.9)">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="160" cy="185" r="2" fill="rgba(201,168,76,0.8)">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="240" cy="185" r="2" fill="rgba(201,168,76,0.8)">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="210" r="2.5" fill="rgba(201,168,76,1)">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="215" r="1.5" fill="rgba(201,168,76,0.7)">
                  <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="215" r="1.5" fill="rgba(201,168,76,0.7)">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="240" r="2" fill="rgba(201,168,76,0.9)">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.7s" repeatCount="indefinite" />
                </circle>
                <circle cx="175" cy="260" r="1.5" fill="rgba(201,168,76,0.6)">
                  <animate attributeName="opacity" values="1;0.4;1" dur="3.1s" repeatCount="indefinite" />
                </circle>
                <circle cx="225" cy="260" r="1.5" fill="rgba(201,168,76,0.6)">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2.9s" repeatCount="indefinite" />
                </circle>
                <line
                  x1="200"
                  y1="160"
                  x2="160"
                  y2="185"
                  stroke="rgba(201,168,76,0.15)"
                  strokeWidth="0.5"
                />
                <line
                  x1="200"
                  y1="160"
                  x2="240"
                  y2="185"
                  stroke="rgba(201,168,76,0.15)"
                  strokeWidth="0.5"
                />
                <line
                  x1="160"
                  y1="185"
                  x2="200"
                  y2="210"
                  stroke="rgba(201,168,76,0.1)"
                  strokeWidth="0.5"
                />
                <line
                  x1="240"
                  y1="185"
                  x2="200"
                  y2="210"
                  stroke="rgba(201,168,76,0.1)"
                  strokeWidth="0.5"
                />
              </g>
              {/* Decorative circles and metadata tags */}
              <circle cx="200" cy="215" r="90" stroke="rgba(201,168,76,0.06)" strokeWidth="1" fill="none" />
              <circle
                cx="200"
                cy="215"
                r="130"
                stroke="rgba(201,168,76,0.04)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4 6"
              />
              <text
                x="200"
                y="360"
                textAnchor="middle"
                fill="rgba(201,168,76,0.25)"
                fontFamily="var(--font-bebas)"
                fontSize="11"
                letterSpacing="4"
              >
                DRONE CONSTELLATION
              </text>
              <text
                x="200"
                y="380"
                textAnchor="middle"
                fill="rgba(201,168,76,0.12)"
                fontFamily="var(--font-sans)"
                fontSize="9"
                letterSpacing="2"
              >
                GPS SYNCHRONIZED FORMATION
              </text>
            </svg>
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
          Founded in 2019, FLYBIT Dynamics is India's most awarded drone light show company. We combine military-grade drone technology with cinematic storytelling to create once-in-a-lifetime aerial experiences that leave audiences speechless.
        </p>
        <p className="text-[0.9rem] text-text-muted leading-relaxed max-w-[500px] mt-5">
            From elegant 200-drone wedding finales to large-scale aerial spectacles, every Flybit Dynamics show is thoughtfully designed, choreographed, and executed entirely in-house.        </p>

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

        <button
          onClick={() =>
            onOpenModal(
              'About FLYBIT',
              "Learn how FLYBIT Dynamics became India's most trusted drone light show company — 5 years, 150+ shows, zero incidents."
            )
          }
          className="btn-g bg-gold hover:bg-gold-light text-black font-medium px-11 py-4 text-[0.75rem] tracking-[0.18em] uppercase rounded-[2px] transition-all duration-200 cursor-pointer md:cursor-none mt-10 hover:-translate-y-1 inline-block"
        >
          Discover Our Story →
        </button>
      </FadeUp>
    </section>
  );
}
