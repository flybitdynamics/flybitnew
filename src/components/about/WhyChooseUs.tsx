'use client';
import React, { useEffect } from 'react';

interface WhyChooseUsProps {
  onOpenModal?: (title: string, desc: string) => void;
}

export default function WhyChooseUs({ onOpenModal }: WhyChooseUsProps) {

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
     if (onOpenModal) onOpenModal(title, desc);
     else console.log("Open modal:", title, desc);
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
    <section id="why">
  <div className="why-head">
    <div className="eyebrow">Why Choose FLYBIT</div>
    <h2 className="sec-title">India's Elite Drone <em>Storytelling Crew</em></h2>
    <p className="sec-body" style={{maxWidth: '520px', margin: '0 auto'}}>Five reasons the best events across India choose FLYBIT Dynamics for their sky show.</p>
  </div>
  <div className="why-grid fu">
    <div className="why-card"  onClick={() => openModal(`India's Elite Storytelling Crew`, `FLYBIT is India's leading drone storytelling company — not just a technology provider. We combine creative narrative with precision engineering for shows that move people emotionally.`)}>
      <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
      <div className="why-title">India's Elite Storytelling Crew</div>
      <p className="why-desc">Not just a technology company — we are storytellers who use drones as the medium. Every show has a narrative arc, an emotional peak, and a lasting image.</p>
    </div>
    <div className="why-card"  onClick={() => openModal(`Proprietary Design Tools`, `Our in-house animation pipeline and design software gives us full creative control — custom formations, brand animations, and narrative sequences that no third-party tool can match.`)}>
      <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M7 10l3 3 7-7"/></svg></div>
      <div className="why-title">Proprietary Design Tools</div>
      <p className="why-desc">Our in-house animation pipeline gives us full creative control — custom formations, brand animations, and sequences that no off-the-shelf tool can match.</p>
    </div>
    <div className="why-card"  onClick={() => openModal(`Ultra-Smooth Aerial Motion`, `Built-in fail-safes and anti-collision technology ensure ultra-smooth, seamless transitions between formations. Every drone move is precisely choreographed — no jerky movements, ever.`)}>
      <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      <div className="why-title">Ultra-Smooth Aerial Motion</div>
      <p className="why-desc">Built-in fail-safes and anti-collision tech deliver seamless, cinematic transitions. No jerky movements — just fluid, breathtaking aerial choreography.</p>
    </div>
    <div className="why-card"  onClick={() => openModal(`Made-in-India Drones`, `FLYBIT operates a fleet of Made-in-India drones with centimetre-level GPS accuracy. Faster local support, faster maintenance, and a genuine commitment to Indian manufacturing.`)}>
      <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
      <div className="why-title">Made-in-India Drones</div>
      <p className="why-desc">Centimetre-level accuracy, faster support, and a genuine commitment to Indian manufacturing. Our fleet is built and maintained entirely in India.</p>
    </div>
    <div className="why-card"  onClick={() => openModal(`Safe Airspace Operation`, `Full DGCA compliance, built-in fail-safes, real-time safety monitoring, and anti-collision technology. FLYBIT has zero safety incidents across all shows performed.`)}>
      <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>
      <div className="why-title">Safe Airspace Operation</div>
      <p className="why-desc">Full DGCA compliance, real-time safety monitoring, and anti-collision technology. Zero safety incidents across every show we've ever performed.</p>
    </div>
    <div className="why-card"  onClick={() => openModal(`2km Sky Engagement`, `FLYBIT's shows engage the sky across a 2-kilometre radius — ensuring your audience sees the full formation from every angle, whether they're 50 metres or 2km away.`)}>
      <div className="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg></div>
      <div className="why-title">2km Sky Engagement</div>
      <p className="why-desc">Our shows engage the sky across a full 2-kilometre radius — ensuring every member of your audience has an equally breathtaking view.</p>
    </div>
  </div>
</section>
  );
}
