'use client';

import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 400;

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed right-6 bottom-6 z-[300] group flex items-center justify-center w-[50px] h-[50px] rounded-full bg-gold text-black border-2 border-gold-light shadow-[0_4px_24px_rgba(201,168,76,0.55)] transition-all duration-300 hover:bg-gold-light hover:scale-110 hover:shadow-[0_6px_32px_rgba(201,168,76,0.7)] md:cursor-none ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping group-hover:animate-none pointer-events-none" />
      <svg
        viewBox="0 0 24 24"
        className="relative w-[21px] h-[21px] fill-none stroke-current stroke-[2.5]"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
