'use client';
import React from 'react';

const OFFICES = [
  {
    tag: 'Head Office',
    city: 'Ahmedabad',
    addr: '511, Satyamev Eminence, Science City Road, Sola, Ahmedabad 380060',
    link: 'https://maps.google.com/?q=Satyamev+Eminence+Science+City+Ahmedabad',
    badge: 'Get Directions →',
    isRapid: false
  },
  {
    tag: 'Branch Office',
    city: 'Jaipur',
    addr: '82 B, Gopal Nagar-A, Gopalpura Bypass Rd, Jaipur 302018',
    link: 'https://maps.google.com/?q=Gopal+Nagar+Gopalpura+Bypass+Jaipur',
    badge: 'Get Directions →',
    isRapid: false
  }
];

export default function MapSection() {
  return (
    <section id="map-section" className="bg-black py-24 px-6 md:px-20 border-t border-border/40">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-end mb-16 fade-up">
          <div>
            <div className="eyebrow text-[0.62rem] tracking-[0.4em] uppercase text-gold mb-3">
              Our Locations
            </div>
            <h2 className="sec-title font-cormorant text-[clamp(2.4rem,5vw,4.2rem)] font-light text-text leading-[1.08] mb-0">
              Visit Our <span className="text-gold italic">Studio</span>
            </h2>
          </div>
          
          <p className="sec-body text-[0.9rem] text-text-muted leading-[1.95] font-sans">
            Located in Ahmedabad, our studio is equipped with the latest drone technology and testing facilities. Our operations span pan-India with deployment teams ready within 48 hours.
          </p>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-border/20 rounded-[3px] overflow-hidden mb-16 fade-up">
          {OFFICES.map((office, idx) => (
            <div 
              key={idx}
              className="office-card p-10 md:p-12 relative overflow-hidden transition-all duration-300 group cursor-default bg-dark"
            >
              {/* Animated bottom slide border */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="office-tag text-[0.58rem] tracking-[0.3em] uppercase text-gold-dim mb-2.5 font-sans">
                {office.tag}
              </div>
              
              <h3 className="office-city font-cormorant text-[1.6rem] text-text mb-3">
                {office.city}
              </h3>
              
              <p className="office-addr text-[0.8rem] text-text-muted leading-[1.8] mb-6 font-sans">
                {office.addr}
              </p>

              {office.isRapid ? (
                <span className="office-badge inline-block text-[0.6rem] tracking-[0.2em] uppercase px-3.5 py-1 border border-gold/20 text-gold-dim rounded-[2px] font-sans">
                  {office.badge}
                </span>
              ) : (
                <a 
                  href={office.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="office-badge inline-block text-[0.6rem] tracking-[0.2em] uppercase px-3.5 py-1 border border-gold/20 hover:border-gold hover:text-gold text-gold-dim rounded-[2px] transition-all duration-300 font-sans cursor-none"
                >
                  {office.badge}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Gray iframe Map embed */}
        <div className="map-embed relative overflow-hidden border border-border/40 rounded-[3px] fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4927609849505!2d72.5310!3d23.0525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848d7e9e57db%3A0x3c2e60f87dd3b34d!2sSatyamev%20Eminence%2C%20Science%20City%20Rd%2C%20Ahmedabad%2C%20Gujarat%20380060!5e0!3m2!1sen!2sin!4v1699000000000"
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="FLYBIT Dynamics Office Location"
            className="w-full h-[420px] block grayscale-[40%] contrast-[1.05]"
            style={{ border: 'none' }}
          />
          
          <div className="map-overlay-card absolute top-8 left-8 bg-[#131313] border border-border/60 rounded-[3px] p-6 max-w-[260px] hidden sm:block">
            <h4 className="map-ov-title font-cormorant text-[1.1rem] text-text mb-1.5 font-medium">
              Flybit Dynamics Pvt Ltd
            </h4>
            <p className="map-ov-addr text-[0.75rem] text-text-muted leading-[1.7] mb-4 font-sans">
              511, Satyamev Eminence, Science City Road, Sola, Ahmedabad 380060
            </p>
            <a 
              href="https://maps.google.com/?q=Satyamev+Eminence+Science+City+Ahmedabad" 
              target="_blank" 
              rel="noreferrer"
              className="map-dir-btn bg-gold hover:bg-gold-light text-black font-semibold px-5 py-2.5 text-[0.68rem] tracking-[0.14em] uppercase rounded-[2px] transition-colors duration-200 inline-block cursor-none"
            >
              Get Directions
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
