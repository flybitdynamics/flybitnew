'use client';
import React from 'react';

const PROCESS_STEPS_TOP = [
  {
    num: '01',
    title: 'Discovery & Consultation',
    desc: 'Understanding your wedding vision, venue, traditions, and expectations.'
  },
  {
    num: '02',
    title: 'Concept Design',
    desc: 'Creating moodboards, visual concepts, and storytelling directions.'
  },
  {
    num: '03',
    title: 'Animation & Programming',
    desc: 'Designing aerial formations and synchronizing visuals with music.'
  }
];

const PROCESS_STEPS_BOTTOM = [
  {
    num: '04',
    title: 'Technical Planning',
    desc: 'Venue analysis, flight planning, and safety management.'
  }
];

export default function ServicesProcess() {
  return (
    <section id="process" className="bg-dark px-6 md:px-20 border-t border-border/40">
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

        {/* Steps Grid: Row 1 (Steps 1 to 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-border/20 rounded-[3px] overflow-hidden mb-[2px]">
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
              <h3 className="font-cormorant text-[1.3rem] text-text mb-4">
                {step.title}
              </h3>
              <p className="text-[0.76rem] text-text-muted leading-[1.75] font-sans">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Steps Grid: Row 2 (Steps 4 to 5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2px] bg-border/20 rounded-[3px] overflow-hidden">
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
              <h3 className="font-cormorant text-[1.3rem] text-text mb-4">
                {step.title}
              </h3>
              <p className="text-[0.76rem] text-text-muted leading-[1.75] font-sans">
                {step.desc}
              </p>
            </div>
          ))}

          {/* Highlighted Step 5 (Live Show Execution) */}
          <div className="pstep bg-gold/[0.03] p-10 relative group overflow-hidden transition-all duration-300 hover:bg-gold/[0.05]">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <span className="pstep-num font-bebas text-[4rem] text-gold/40 leading-none mb-5 block select-none">
              05
            </span>
            <h3 className="font-cormorant text-[1.3rem] text-text mb-4">
              Live Show Execution
            </h3>
            <p className="text-[0.76rem] text-text-muted leading-[1.75] font-sans">
              Seamless execution by our expert drone operations team.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

