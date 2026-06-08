'use client';

import React from 'react';
import FadeUp from './FadeUp';

interface ProcessProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function Process({ onOpenModal }: ProcessProps) {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'Free 30-min call to understand your event, vision, venue, and audience.',
      modalTitle: 'Step 1: Consultation',
      modalDesc: 'We start with a free 30-minute consultation to understand your event, vision, venue, audience size, and budget. No commitment required.',
    },
    {
      num: '02',
      title: 'Creative Design',
      desc: 'Our team builds your custom 3D animation preview — every formation, sequence, and sync.',
      modalTitle: 'Step 2: Creative Design',
      modalDesc: 'Our design team creates a 3D preview animation of your show — custom formations, timing, and music sync — for your approval before we fly a single drone.',
    },
    {
      num: '03',
      title: 'Legal Clearance',
      desc: 'We handle all DGCA permissions, airspace clearances, and venue safety protocols.',
      modalTitle: 'Step 3: Permissions & Clearance',
      modalDesc: 'FLYBIT handles every legal requirement — DGCA permissions, local airspace clearances, police NOCs, and venue safety assessments. All included.',
    },
    {
      num: '04',
      title: 'Rehearsal',
      desc: 'Our team arrives early for full on-site calibration, formation tests, and a complete dry run.',
      modalTitle: 'Step 4: On-Site Rehearsal',
      modalDesc: 'Our crew arrives 6–12 hours early for a full rehearsal — drone calibration, formation testing, and a complete dry run of the show.',
    },
    {
      num: '05',
      title: 'The Show',
      desc: 'Your sky comes alive. Military-precision execution. A night nobody forgets.',
      modalTitle: 'Step 5: The Show',
      modalDesc: "The night arrives. Your sky comes alive. Our pilots execute the show with military precision — and your guests witness something they'll never forget.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-dark-2 px-6 md:px-20 text-center select-none"
    >
      <div className="font-sans">
        <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-5">
          How It Works
        </div>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight mb-4">
          From Idea to <em className="text-gold italic">Illumination</em>
        </h2>
      </div>

      <div className="proc-steps relative flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-0 mt-20 font-sans">
        {/* Connector line visible on md/lg screens */}
        <div
          className="absolute hidden md:block top-[27px] left-[10%] right-[10%] h-[1px] pointer-events-none select-none"
          style={{
            background: 'linear-gradient(to right, transparent, var(--color-gold-dim), var(--color-gold-dim), transparent)',
          }}
        />

        {steps.map((step, idx) => (
          <FadeUp
            key={idx}
            delay={idx * 80}
            onClick={() => onOpenModal(step.modalTitle, step.modalDesc)}
            className="proc-step flex-1 flex flex-col items-center px-5 cursor-pointer md:cursor-none hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="step-num w-[54px] h-[54px] rounded-full border border-gold-dim bg-dark-2 flex items-center justify-center font-bebas text-[1.3rem] text-gold tracking-[0.05em] relative z-10 mb-6 transition-colors duration-300 hover:bg-gold hover:text-black hover:border-gold">
              {step.num}
            </div>
            <div className="step-title font-cormorant text-[1.1rem] text-text mb-2">
              {step.title}
            </div>
            <p className="step-desc text-[0.76rem] text-text-muted leading-relaxed text-center max-w-[200px]">
              {step.desc}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
