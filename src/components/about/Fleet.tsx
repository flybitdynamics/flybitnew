'use client';
import React, { useEffect } from 'react';

export default function Fleet() {

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
    <section id="fleet">
  <div className="fleet-inner">
    <div className="fl">
      <div className="eyebrow">Drone Fleet Size</div>
      <h2 className="sec-title">Scale That <em>Matches</em> Your Vision</h2>
      <p className="sec-body">The scale of our drone fleet determines the complexity and precision of our aerial formations — enabling us to craft visually stunning and immersive experiences for any event size.</p>
      <p className="sec-body" style={{marginTop: '1.2rem'}}>From intimate 100-drone shows to 250+ drone spectacles, every configuration is purpose-built for your venue, audience, and creative brief. Larger fleets on request.</p>
    </div>
    <div className="fr">
      <div className="fleet-steps">
        <div className="fleet-step" onClick={() => openModal(`100 Drones`, `Perfect for intimate venues, weddings, and brand reveals. A 100-drone show delivers crisp text, simple logos, and geometric formations at a friendly entry-level price point.`)}>
          <div className="fleet-num">100</div>
          <div className="fleet-label">Drones</div>
          <div className="fleet-desc">Text, logos, simple formations. Ideal for weddings and intimate brand events.</div>
        </div>
        <div className="fleet-step" onClick={() => openModal(`150 Drones`, `150 drones unlocks multi-colour portrait-quality formations and more complex animated sequences. Great for corporate events and mid-scale celebrations.`)}>
          <div className="fleet-num">150</div>
          <div className="fleet-label">Drones</div>
          <div className="fleet-desc">Multi-colour formations and portrait-quality figures. Corporate and celebration events.</div>
        </div>
        <div className="fleet-step" onClick={() => openModal(`200 Drones`, `200+ drones enables full brand narratives — animated logo sequences, 3D shapes, and multi-scene storytelling. Our most popular configuration.`)}>
          <div className="fleet-num">200</div>
          <div className="fleet-label">Drones</div>
          <div className="fleet-desc">Full brand narrative sequences. Our most popular configuration for mid-large events.</div>
        </div>
        <div className="fleet-step" onClick={() => openModal(`250 Drones`, `250 drones is our premium configuration — ultra-detailed formations, full colour gradients, and complex animated sequences for national-scale events.`)}>
          <div className="fleet-num">250</div>
          <div className="fleet-label">Drones</div>
          <div className="fleet-desc">Ultra-detailed, premium formations. National-scale celebrations and government events.</div>
        </div>
      </div>
      <p style={{fontSize: '.7rem', color: 'var(--text-dim)', marginTop: '1rem', textAlign: 'center', letterSpacing: '.06em'}}>Larger fleets available on request · 2km sky engagement radius</p>
    </div>
  </div>
</section>
  );
}
