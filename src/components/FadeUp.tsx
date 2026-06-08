'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function FadeUp({ children, delay = 0, className = '', onClick, style }: FadeUpProps) {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      { threshold: 0.12 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.disconnect();
      }
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      onClick={onClick}
      style={style}
      className={`fade-up ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
