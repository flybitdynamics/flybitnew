'use client';
import React, { useEffect, useRef, useState } from 'react';

const CAP_ITEMS = [
  {
    title: 'Fleet Scale',
    desc: 'Drones per show',
    width: 90,
    val: '1000',
    unit: 'MAX FLEET'
  },
  {
    title: 'Positioning Accuracy',
    desc: 'RTK GPS system',
    width: 98,
    val: '±1cm',
    unit: 'ACCURACY'
  },
  {
    title: 'LED Colors',
    desc: 'Per drone output',
    width: 100,
    val: '16M',
    unit: 'COLOR PALETTE'
  },
  {
    title: 'Flight Time',
    desc: 'Per battery cycle',
    width: 75,
    val: '20min',
    unit: 'FLIGHT TIME'
  },
  {
    title: 'Communication Range',
    desc: 'Mesh network radius',
    width: 85,
    val: '500m',
    unit: 'COMM RANGE'
  },
  {
    title: 'Operational Height',
    desc: 'Max altitude reached',
    width: 70,
    val: '150m',
    unit: 'ALTITUDE'
  }
];

export default function TechnicalCapabilities() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="capabilities" 
      ref={sectionRef}
      className="bg-[#0d0d0d] py-16 px-6 md:px-20 border-t border-border/40"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-4">
            Technical Capabilities
          </div>
          <h2 className="sec-title font-cormorant text-[clamp(2.4rem,5vw,4.2rem)] font-light text-text leading-[1.08]">
            Performance <span className="text-gold italic">By the Numbers</span>
          </h2>
        </div>

        {/* Progress Grid */}
        <div className="flex flex-col gap-[2px] bg-border/20 rounded-[3px] overflow-hidden fade-up">
          {CAP_ITEMS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-dark p-8 md:px-12 md:py-8 grid grid-cols-1 md:grid-cols-[220px_1fr_120px] items-center gap-6 md:gap-8 hover:bg-white/[0.015] transition-colors duration-300"
            >
              {/* Row Label */}
              <div className="text-[0.78rem] text-text-muted tracking-wide font-sans">
                <strong className="block font-cormorant text-[1.2rem] text-text font-normal mb-1">
                  {item.title}
                </strong>
                {item.desc}
              </div>

              {/* Progress Slider Track */}
              <div className="h-[3px] bg-gold/10 rounded-[1px] overflow-hidden relative">
                <div 
                  className="h-full bg-gradient-to-r from-gold-dim to-gold rounded-[1px] transition-all duration-[1.2s] cubic-bezier(0.16,1,0.3,1)"
                  style={{
                    width: animate ? `${item.width}%` : '0%',
                    transitionDelay: `${idx * 100}ms`
                  }}
                />
              </div>

              {/* Stat Value */}
              <div className="font-bebas text-[1.8rem] text-gold tracking-wide text-left md:text-right">
                {item.val}
                <span className="block text-[0.65rem] text-text-dim tracking-[0.12rem] font-sans mt-[-2px] uppercase">
                  {item.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
