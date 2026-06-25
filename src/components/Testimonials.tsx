'use client';

import React from 'react';
import FadeUp from './FadeUp';

interface TestimonialsProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function Testimonials({ onOpenModal }: TestimonialsProps) {
  const testimonials = [
    {
      stars: '★★★★★',
      text: 'The FLYBIT show at our wedding was beyond anything we imagined. Seeing our initials written in the sky brought every guest to tears. Absolutely magical.',
      name: 'Het & Rucha',
      role: 'Wedding — Ahmedabad, 2026',
      modalTitle: 'Het & Rucha',
      modalDesc: 'Seeing our initials written across the Ahmedabad skyline on our wedding night was indescribable. Every guest was moved to tears. FLYBIT delivered what no other company could.',
    },
    {
      stars: '★★★★★',
      text: 'We hired FLYBIT for our product launch and it exceeded every expectation. The logo animation was crisp, execution flawless, and the audience was speechless.',
      name: 'Rahul Mehta',
      role: 'CMO, TechNova India — Bangalore',
      modalTitle: 'Rahul Mehta — TechNova',
      modalDesc: 'Our product launch had never been done this way. The logo animation was crisp, the crowd was silent in awe — and the next morning we were on the front page of every tech publication.',
    },
    {
      stars: '★★★★★',
      text: "From consultation to show night, the FLYBIT team was professional, creative, and genuinely passionate. The sky show was the highlight of our entire festival.",
      name: 'Anita Desai',
      role: 'Event Director — Cultural Fest, Jaipur',
      modalTitle: 'Anita Desai — Cultural Fest',
      modalDesc: "The sky show was the defining moment of our entire three-day festival. We had international artists performing, but FLYBIT's show was what every attendee talked about for weeks afterward.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-dark px-6 md:px-20 select-none"
    >
      <div className="font-sans text-center mb-10">
        <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-5">
          Client Stories
        </div>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight">
          Words That <em className="text-gold italic">Illuminate</em>
        </h2>
      </div>

      <div className="testi-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-border mt-10 font-sans">
        {testimonials.map((testi, idx) => (
          <FadeUp
            key={idx}
            delay={idx * 80}
            onClick={() => onOpenModal(testi.modalTitle, testi.modalDesc)}
            className="testi-card bg-dark-2 p-11 relative overflow-hidden transition-colors duration-300 cursor-pointer md:cursor-none hover:bg-dark-3 group border-none"
          >
            {/* Giant quote background symbol */}
            <div className="absolute top-[-0.8rem] left-6 font-cormorant text-[7rem] text-gold/10 leading-none pointer-events-none select-none">
              “
            </div>

            <div className="testi-stars flex gap-1 mb-5 select-none pointer-events-none">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-gold text-[0.75rem]">
                  ★
                </span>
              ))}
            </div>

            <p className="testi-text font-cormorant text-[1.05rem] italic text-text leading-relaxed mb-6">
              "{testi.text}"
            </p>

            <div className="testi-name text-[0.72rem] font-medium tracking-[0.12em] uppercase text-gold">
              {testi.name}
            </div>

            <div className="testi-role text-[0.7rem] text-text-dim mt-1">
              {testi.role}
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
