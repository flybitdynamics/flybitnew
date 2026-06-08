'use client';
import React, { useEffect } from 'react';

export default function Process() {

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
    <section id="process">
  <div className="process-head fu">
    <div className="eyebrow">Process Overview</div>
    <h2 className="sec-title">How Working With FLYBIT <em>Feels</em></h2>
    <p className="sec-body" style={{maxWidth: '560px', margin: '0 auto'}}>The client journey is designed to feel simple — even though the backend work is highly technical. You enjoy the moment; we handle the rest.</p>
  </div>
  <div className="proc-grid">
    <div className="proc-step fu" onClick={() => openModal(`1. Share Your Event`, `Tell us the date, venue, audience size, and purpose of your event. A 15-minute call is all it takes to get started. No commitment required at this stage.`)}>
      <div className="proc-dot">01</div>
      <div className="proc-title">Share Your Event</div>
      <p className="proc-desc">Tell us the date, venue, audience, and purpose.</p>
    </div>
    <div className="proc-step fu" onClick={() => openModal(`2. We Shape the Concept`, `FLYBIT develops the show idea around your vision — formations, colour palette, narrative arc, and music sync. We present a 3D preview animation for your approval.`)}>
      <div className="proc-dot">02</div>
      <div className="proc-title">Shape the Concept</div>
      <p className="proc-desc">We develop the show idea around your vision and brief.</p>
    </div>
    <div className="proc-step fu" onClick={() => openModal(`3. Planning & Readiness`, `We handle all feasibility assessment, airspace permissions, local NOCs, venue safety evaluation, and show preparation. You don't lift a finger.`)}>
      <div className="proc-dot">03</div>
      <div className="proc-title">Planning & Readiness</div>
      <p className="proc-desc">We handle feasibility, permissions, and full show preparation.</p>
    </div>
    <div className="proc-step fu" onClick={() => openModal(`4. Event-Day Execution`, `Our team arrives early for calibration and a full dry-run rehearsal. On the night, our pilots manage setup, drone deployment, and live flying with military precision.`)}>
      <div className="proc-dot">04</div>
      <div className="proc-title">Event-Day Execution</div>
      <p className="proc-desc">Our team manages setup, deployment, and live flying.</p>
    </div>
    <div className="proc-step fu" onClick={() => openModal(`5. You Enjoy the Moment`, `We handle all the complexity while your event gets the spotlight. All you need to do is look up — and let your audience be amazed.`)}>
      <div className="proc-dot">05</div>
      <div className="proc-title">You Enjoy the Moment</div>
      <p className="proc-desc">We handle complexity while your event gets the spotlight.</p>
    </div>
  </div>
</section>
  );
}
