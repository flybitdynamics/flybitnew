'use client';
import React from 'react';

const PROCESS_STEPS_TOP = [
  {
    num: '01',
    title: 'Concept & Storyboarding',
    time: '21 Days before event',
    desc: 'We collaborate with you to define the vision, formations, narrative arc, and music sync for your show.'
  },
  {
    num: '02',
    title: '3D Animation & Simulation',
    time: '15 Days before event',
    desc: 'Our animation team builds a full 3D preview — every formation rendered exactly as it will appear in the sky.'
  },
  {
    num: '03',
    title: 'Flight Path Programming',
    time: '12 Days before event',
    desc: 'Every drone\'s path is programmatically generated with RTK-GPS accuracy. Collision avoidance verified at centimeter level.'
  },
  {
    num: '04',
    title: 'Drone Preparation & Testing',
    time: '12 Days before event',
    desc: 'Full fleet calibration, battery tests, LED checks, and formation verification in controlled conditions.'
  }
];

const PROCESS_STEPS_BOTTOM = [
  {
    num: '05',
    title: 'Safety & Permissions',
    time: '6 Days before event',
    desc: 'We handle all DGCA approvals, airspace NOCs, police permissions, and venue safety assessments. You don\'t lift a finger.'
  },
  {
    num: '06',
    title: 'Rehearsals',
    time: '1–2 Days before event',
    desc: 'Full on-site dry run with complete formation testing, timing sync, and contingency protocol verification.'
  }
];

export default function ServicesProcess() {
  return (
    <section id="process" className="bg-dark py-24 px-6 md:px-20 border-t border-border/40">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-4">
            How It Works
          </div>
          <h2 className="sec-title font-cormorant text-[clamp(2.4rem,5vw,4.2rem)] font-light text-text leading-[1.08] mb-6">
            Our <span className="text-gold italic">Process</span>
          </h2>
          <p className="text-[0.9rem] text-text-muted leading-[1.95] max-w-[500px] mx-auto font-sans">
            From concept to execution — every detail is perfected before a single drone takes flight.
          </p>
        </div>

        {/* Steps Grid: Row 1 (Steps 1 to 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-border/20 rounded-[3px] overflow-hidden mb-[2px]">
          {PROCESS_STEPS_TOP.map((step) => (
            <div
              key={step.num}
              className="pstep bg-dark p-10 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.02]"
            >
              {/* Gold gradient slide line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <span className="pstep-num font-bebas text-[4rem] text-gold/12 leading-none mb-5 block select-none">
                {step.num}
              </span>
              <h3 className="font-cormorant text-[1.3rem] text-text mb-2">
                {step.title}
              </h3>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-dim mb-4 font-sans font-medium">
                {step.time}
              </div>
              <p className="text-[0.76rem] text-text-muted leading-[1.75] font-sans">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Steps Grid: Row 2 (Steps 5 to 7) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-border/20 rounded-[3px] overflow-hidden">
          {PROCESS_STEPS_BOTTOM.map((step) => (
            <div
              key={step.num}
              className="pstep bg-dark p-10 relative group overflow-hidden transition-all duration-300 hover:bg-white/[0.02]"
            >
              {/* Gold gradient slide line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <span className="pstep-num font-bebas text-[4rem] text-gold/12 leading-none mb-5 block select-none">
                {step.num}
              </span>
              <h3 className="font-cormorant text-[1.3rem] text-text mb-2">
                {step.title}
              </h3>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-dim mb-4 font-sans font-medium">
                {step.time}
              </div>
              <p className="text-[0.76rem] text-text-muted leading-[1.75] font-sans">
                {step.desc}
              </p>
            </div>
          ))}

          {/* Highlighted Step 7 (Show Night) */}
          <div className="pstep bg-gold/[0.03] p-10 relative group overflow-hidden transition-all duration-300 hover:bg-gold/[0.05]">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <span className="pstep-num font-bebas text-[4rem] text-gold/40 leading-none mb-5 block select-none">
              07
            </span>
            <h3 className="font-cormorant text-[1.3rem] text-text mb-2">
              Final Show Execution
            </h3>
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-4 font-sans font-semibold">
              Show Night
            </div>
            <p className="text-[0.76rem] text-text-muted leading-[1.75] font-sans">
              Your sky comes alive. Our pilots execute with military precision while you enjoy the moment. A night nobody forgets.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
