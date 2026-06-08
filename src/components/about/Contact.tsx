'use client';
import React, { useEffect } from 'react';

export default function Contact() {

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
    <section id="contact">
  <div className="fl">
    <div className="eyebrow">Get in Touch</div>
    <h2 className="sec-title">Let's Light Up <em>Your Sky</em></h2>
    <p className="sec-body" style={{marginBottom: '2rem'}}>Ready to create something extraordinary? Tell us about your event and we'll respond within 24 hours with a concept proposal.</p>
    <div className="contact-offices">
      <div className="office-card">
        <div className="office-tag">Head Office · Ahmedabad</div>
        <div className="office-addr">511, Satyamev Eminence,<br />Science City Road, Sola,<br />Ahmedabad – 380060, Gujarat</div>
      </div>
      <div className="office-card">
        <div className="office-tag">Branch Office · Jaipur</div>
        <div className="office-addr">82 B, Gopal Nagar-A,<br />Gopalpura Bypass Road,<br />Jaipur – 302018, Rajasthan</div>
      </div>
    </div>
    <div className="contact-details">
      <div className="cdet">
        <div className="cdet-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
        <div className="cdet-val"><a href="tel:+919979850863">+91 99798 50863</a><br /><a href="tel:+919227428262">+91 92274 28262</a></div>
      </div>
      <div className="cdet">
        <div className="cdet-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
        <div className="cdet-val"><a href="mailto:info@flybitdynamics.com">info@flybitdynamics.com</a></div>
      </div>
      <div className="cdet">
        <div className="cdet-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
        <div className="cdet-val"><a href="https://www.flybitdynamics.com" target="_blank">www.flybitdynamics.com</a></div>
      </div>
    </div>
  </div>
  <div className="fr">
    <div className="eyebrow">Quick Enquiry</div>
    <h3 style={{fontFamily: "'Cormorant Garamond',serif", fontSize: '1.8rem', fontWeight: '300', color: 'var(--text)', marginBottom: '1.5rem'}}>Tell Us About <em style={{color: 'var(--gold)', fontStyle: 'italic'}}>Your Event</em></h3>
    <div className="contact-form">
      <div className="cf-row">
        <input className="cf-input" type="text" placeholder="Your Name" />
        <input className="cf-input" type="tel" placeholder="Phone Number" />
      </div>
      <input className="cf-input" type="email" placeholder="Email Address" />
      <select className="cf-input cf-select" defaultValue="">
        <option value="" disabled style={{color: '#4a4640'}}>Event Type</option>
        <option>Social Event (Wedding / Birthday / Anniversary)</option>
        <option>Corporate Event (Brand Launch / Expo / Award)</option>
        <option>Government / National Event</option>
        <option>Spiritual Gathering / Festival</option>
        <option>Sports & Entertainment</option>
        <option>Other</option>
      </select>
      <div className="cf-row">
        <input className="cf-input" type="text" placeholder="Event Location" />
        <input className="cf-input" type="date" style={{colorScheme: 'dark'}} />
      </div>
      <select className="cf-input cf-select" defaultValue="">
        <option value="" disabled style={{color: '#4a4640'}}>Approx. Drone Count</option>
        <option>100 Drones</option>
        <option>150 Drones</option>
        <option>200 Drones</option>
        <option>250+ Drones</option>
        <option>Not Sure — Need Guidance</option>
      </select>
      <textarea className="cf-input cf-textarea" placeholder="Tell us more — theme, formations, special moments…"></textarea>
      <button className="btn-g" style={{width: '100%', textAlign: 'center', border: 'none'}} onClick={() => console.log("submitForm")}>Send Enquiry →</button>
      <p style={{fontSize: '.68rem', color: 'var(--text-dim)', textAlign: 'center', letterSpacing: '.06em'}}>Confidential · For recipient use only · Flybit Dynamics Pvt Ltd</p>
    </div>
  </div>
</section>
  );
}
