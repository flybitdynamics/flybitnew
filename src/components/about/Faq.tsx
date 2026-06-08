'use client';
import React, { useState, useEffect } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const faqs = [
    {
      q: "Can the show be customised?",
      a: "Yes. The concept can be fully adapted around names, logos, themes, and important event moments. Every FLYBIT show is built from scratch — we never reuse a formation."
    },
    {
      q: "Do I need to manage the technical part?",
      a: "No. FLYBIT handles all planning, DGCA permissions, venue assessment, setup, execution, and operational management. You focus entirely on your event."
    },
    {
      q: "Can my venue support a drone show?",
      a: "Venue suitability depends on open sky clearance, surrounding obstacles, a safe launch area, and proper audience positioning. We conduct a full feasibility assessment as part of the planning phase."
    },
    {
      q: "How early should I enquire?",
      a: "Earlier is always better — it improves planning quality, scheduling flexibility, and allows time for the creative design process. We recommend reaching out at least 4–6 weeks before your event."
    },
    {
      q: "What affects pricing?",
      a: "Pricing depends on the scale of the drone show (number of drones), customisation level, event location, duration, and overall planning complexity. We provide transparent custom quotes for every client."
    },
    {
      q: "What happens after I enquire?",
      a: "You move into a discovery and concept stage where the show is shaped around your event. We'll schedule a call, discuss your vision, and present a concept proposal — usually within 48 hours."
    }
  ];

  return (
    <section id="faq">
      <div className="fl">
        <div className="eyebrow">Common Questions</div>
        <h2 className="sec-title">Typical Client <em>Questions</em></h2>
        <p className="sec-body">These are the questions most clients ask before moving ahead. If yours isn't here, reach out — we answer within 24 hours.</p>
        <div style={{ marginTop: '2.5rem' }}>
          <a href="#contact" className="btn-g">Ask Us Directly →</a>
        </div>
      </div>
      <div className="fr">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq-q">
                {faq.q} 
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-a">
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
