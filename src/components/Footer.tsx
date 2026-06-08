'use client';

import React from 'react';

interface FooterProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="bg-dark border-t border-border px-6 md:px-20 py-20 font-sans select-none">
      <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-20 mb-16">
        <div className="foot-brand">
          <a href="#" className="inline-block md:cursor-none">
            <img
              src="/logo.png"
              alt="FLYBIT Dynamics"
              className="footer-logo-img"
              style={{ height: '44px', width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </a>
          <p className="foot-tagline text-[0.82rem] text-text-muted leading-relaxed mt-5 max-w-[260px]">
            India's premier drone light show company — illuminating celebrations with technology and artistry since 2019.
          </p>
        </div>

        <div>
          <div className="foot-col-title text-[0.62rem] tracking-[0.3em] uppercase text-gold mb-6">
            Company
          </div>
          <ul className="foot-links space-y-3.5">
            <li>
              <a href="#about" className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                Services
              </a>
            </li>
            <li>
              <a href="#showcase" className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                Showcase
              </a>
            </li>
            <li>
              <a href="#process" className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                Our Process
              </a>
            </li>
            <li>
              <a href="/stories" className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                Stories & Insights
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="foot-col-title text-[0.62rem] tracking-[0.3em] uppercase text-gold mb-6">
            Services
          </div>
          <ul className="foot-links space-y-3.5">
            <li>
              <button
                onClick={() =>
                  onOpenModal(
                    'Wedding Shows',
                    'FLYBIT wedding drone shows — from 200-drone intimates to 2000-drone grand finales.'
                  )
                }
                className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none bg-transparent p-0 border-none text-left"
              >
                Wedding Shows
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  onOpenModal(
                    'Corporate Events',
                    'Brand launches, team events, investor days — aerial experiences that create viral moments.'
                  )
                }
                className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none bg-transparent p-0 border-none text-left"
              >
                Corporate Events
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  onOpenModal(
                    'Festivals',
                    'Music-synced shows for Diwali, New Year, concerts, and cultural festivals across India.'
                  )
                }
                className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none bg-transparent p-0 border-none text-left"
              >
                Festivals
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  onOpenModal(
                    'Government Events',
                    'Republic Day, Independence Day, state events — with full VVIP-grade security clearances.'
                  )
                }
                className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none bg-transparent p-0 border-none text-left"
              >
                Government
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  onOpenModal(
                    'Custom Shows',
                    'Portraits, mascots, animated sequences — anything you imagine, we fly.'
                  )
                }
                className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none bg-transparent p-0 border-none text-left"
              >
                Custom Shows
              </button>
            </li>
          </ul>
        </div>

        <div>
          <div className="foot-col-title text-[0.62rem] tracking-[0.3em] uppercase text-gold mb-6">
            Contact
          </div>
          <ul className="foot-links space-y-3.5">
            <li>
              <a href="tel:+919999999999" className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                +91 99999 99999
              </a>
            </li>
            <li>
              <a href="mailto:info@flybitdynamics.com" className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                info@flybitdynamics.com
              </a>
            </li>
            <li className="text-text-muted text-[0.82rem]">
              Mumbai · Delhi · Bangalore
            </li>
            <li>
              <button
                onClick={() =>
                  onOpenModal(
                    'Book a Show',
                    "Ready to illuminate your event? Share your details and we'll respond within 24 hours."
                  )
                }
                className="text-gold hover:text-gold-light text-[0.82rem] transition-colors duration-200 md:cursor-none bg-transparent p-0 border-none text-left"
              >
                Book a Show →
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot-bottom border-t border-gold/[0.07] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="foot-copy text-[0.7rem] text-text-dim tracking-[0.08em] text-center md:text-left">
          © 2025 FLYBIT Dynamics. All rights reserved. DGCA Certified.
        </div>
        <div className="foot-socials flex gap-3">
          {['in', 'ig', 'yt', 'fb'].map((soc) => (
            <a
              key={soc}
              href="#"
              className="social w-9 h-9 border border-border rounded-full flex items-center justify-center text-text-muted hover:text-gold hover:border-gold text-[0.65rem] font-medium tracking-[0.05em] uppercase transition-all duration-200 md:cursor-none"
            >
              {soc}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
