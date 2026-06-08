'use client';
import React, { useEffect } from 'react';

export default function Addons() {

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

  const openModal = (title: string, desc: string) => {
     console.log("Open modal:", title, desc);
  };

  const toggleFaq = (el: HTMLElement) => {
    const body = el.nextElementSibling as HTMLElement;
    if (el.classList.contains('active')) {
      el.classList.remove('active');
      body.style.maxHeight = '0';
    } else {
      el.classList.add('active');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  };

  return (
    <section id="addons">
  <div className="fl">
    <div className="eyebrow">Beyond the Sky</div>
    <h2 className="sec-title">Show Experience <em>Add-Ons</em></h2>
    <p className="sec-body">At Flybit Dynamics, we don't just light up the night — we craft immersive stories that linger in the hearts of your audience.</p>
    <p className="sec-body" style={{marginTop: '1.2rem', marginBottom: '2rem'}}>Our Show Experience Add-Ons are designed to elevate every second of your drone performance — before, during, and after the sky lights up.</p>
    <a href="#contact" className="btn-g">Add to Your Show →</a>
  </div>
  <div className="fr">
    <div className="addon-grid">
      <div className="addon-card" onClick={() => openModal(`Audio & Narrative Design`, `Emotion-driven background music, custom scripts aligned with drone choreography, and professional voiceovers for live storytelling — all synchronised to your sky show.`)}>
        <div className="addon-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></div>
        <div className="addon-title">Audio & Narrative Design</div>
        <ul className="addon-list">
          <li>Emotion-driven background music</li>
          <li>Custom scripts aligned with choreography</li>
          <li>Professional voiceovers for live storytelling</li>
        </ul>
      </div>
      <div className="addon-card" onClick={() => openModal(`Cinematic Production`, `Stunning aerial cinematography, full-scale video production for reels and promos, and artistic event photography — capturing your sky show for posterity.`)}>
        <div className="addon-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="7" width="15" height="11" rx="2"/><polygon points="22 8 22 16 17 13 17 11 22 8"/></svg></div>
        <div className="addon-title">Cinematic Production</div>
        <ul className="addon-list">
          <li>Stunning aerial cinematography</li>
          <li>Full-scale video production for reels</li>
          <li>Artistic event photography</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
}
