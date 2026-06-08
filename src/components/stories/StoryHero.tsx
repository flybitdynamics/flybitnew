'use client';

interface StoryHeroProps {
  title?: string;
  subtitle?: string;
}

export default function StoryHero({
  title = 'Stories & Insights',
  subtitle = 'Reels, case studies, and long-form stories from the sky — our work, our process, and the industry we love.',
}: StoryHeroProps) {
  return (
    <section className="relative pt-36 pb-16 px-6 md:px-20 bg-black overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 65%)',
        }}
      />
      <div className="relative z-10 max-w-[1440px] mx-auto text-center">
        <div className="text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-5 font-sans">
          Content
        </div>
        <h1 className="font-cormorant text-4xl md:text-6xl font-light text-text leading-tight mb-5">
          Stories & <em className="text-gold italic">Insights</em>
        </h1>
        <p className="text-[0.9rem] text-text-muted max-w-[560px] mx-auto leading-relaxed font-sans">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
