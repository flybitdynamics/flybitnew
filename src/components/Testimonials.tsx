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
      text: 'Flybit Dynamics turned our wedding night into an absolute fairytale! The drone light show had every guest completely enchanted — all eyes were locked on the sky in pure amazement. Seeing our special moment celebrated among the stars left our families overwhelmed with joy and emotion. It was the most magical and unforgettable highlight of our wedding celebration!',
      name: 'Het & Rucha',
      role: 'Wedding — Ahmedabad, 2026',
      modalTitle: 'Het & Rucha',
      modalDesc: 'Seeing our initials written across the Ahmedabad skyline on our wedding night was indescribable. Every guest was moved to tears. FLYBIT delivered what no other company could.',
    },
    {
      stars: '★★★★★',
      text: 'The drone light show was absolutely breathtaking! Everyone at SciknowFest — from the little ones to our esteemed guests — had a truly unforgettable experience. The moment our Sciknowtech logo lit up the night sky, it moved many of us to tears. A mesmerizing spectacle that left the entire audience in awe.',
      name: 'Megha Bhatt-Founder, Sciknowtech ',
      role: 'SciknowFest, Science Event',
      modalTitle: 'Megha Bhatt-Founder, Sciknowtech',
      modalDesc: 'Our product launch had never been done this way. The logo animation was crisp, the crowd was silent in awe — and the next morning we were on the front page of every tech publication.',
    },
    {
      stars: '★★★★★',
      text: "Our wedding night became truly magical thanks to Flybit Dynamics! The drone light show left every single guest spellbound — eyes glued to the sky, hearts full of joy. Seeing our names written across the night sky brought tears to our eyes and created a moment we and our families will cherish forever. It was beyond anything we had imagined — absolutely spectacular!",
      name: 'Prateek & Jenny',
      role: 'Wedding Celebration',
      modalTitle: 'Prateek & Jenny',
      modalDesc: "Our wedding night became truly magical thanks to Flybit Dynamics! The drone light show left every single guest spellbound — eyes glued to the sky, hearts full of joy. Seeing our names written across the night sky brought tears to our eyes and created a moment we and our families will cherish forever. It was beyond anything we had imagined — absolutely spectacular!",
    },
    {
      stars: '★★★★★',
      text: "Flybit Dynamics delivered an extraordinary drone light show at our Science Carnival that truly elevated the entire event! The crowd was completely mesmerized — every eye in the venue was fixed on the sky. The show was so spectacular that visitors were eagerly asking whether it would be performed again the same day or the following day. It was a landmark moment for Science City and an experience our visitors will talk about for years to come.",
      name: 'Director, Science City',
      role: 'Science Carnival',
      modalTitle: 'Director, Science City',
      modalDesc: "Flybit Dynamics delivered an extraordinary drone light show at our Science Carnival that truly elevated the entire event! The crowd was completely mesmerized — every eye in the venue was fixed on the sky. The show was so spectacular that visitors were eagerly asking whether it would be performed again the same day or the following day. It was a landmark moment for Science City and an experience our visitors will talk about for years to come.",
    },
   
  ];

  const doubledTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="bg-dark py-16 select-none overflow-hidden"
    >
      <div className="font-sans text-center mb-10 px-6">
        <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-5">
          Client Stories
        </div>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-text leading-tight">
          Words That <em className="text-gold italic">Illuminate</em>
        </h2>
      </div>

      <div className="relative w-full mt-10 overflow-hidden font-sans">
        {/* Left and Right gradient fades for premium look */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.33%);
            }
          }
          .animate-marquee {
            animation: marquee 45s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex gap-6 animate-marquee py-4 w-max">
          {doubledTestimonials.map((testi, idx) => (
            <div
              key={idx}
              onClick={() => onOpenModal(testi.modalTitle, testi.modalDesc)}
              className="testi-card w-[320px] md:w-[400px] flex-shrink-0 bg-dark-2 p-8 md:p-10 relative overflow-hidden transition-all duration-300 cursor-pointer md:cursor-none hover:bg-dark-3 border border-gold/10 hover:border-gold/30 group"
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

              <p className="testi-text font-cormorant text-[1.05rem] italic text-text leading-relaxed mb-6 line-clamp-4">
                "{testi.text}"
              </p>

              <div className="testi-name text-[0.72rem] font-medium tracking-[0.12em] uppercase text-gold">
                {testi.name}
              </div>

              <div className="testi-role text-[0.7rem] text-text-dim mt-1">
                {testi.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
