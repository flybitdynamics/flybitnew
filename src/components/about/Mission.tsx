'use client';
import React, { useEffect } from 'react';

export default function Mission() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fu');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission">
      <div className="mission-inner fu">
        <div className="mission-label">Our Mission</div>
        <h2 className="mission-title">PRECISION.<br />CREATIVITY.<br />TECHNOLOGY.</h2>
        <p className="mission-body">To revolutionize event entertainment through innovative drone technology — creating emotionally impactful performances that bring people together, celebrate human achievements, and inspire wonder in audiences across India and beyond.</p>
        <a href="#contact" className="mission-btn">
          Book a Show
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </a>
      </div>
    </section>
  );
}
