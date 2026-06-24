'use client';

import React from 'react';
import { DEFAULT_LOGO } from '@/lib/public-assets';

interface FooterProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="bg-dark border-t border-border px-6 md:px-20 py-14 font-sans select-none">
      <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16 mb-10">
        <div className="foot-brand">
          <a href="#" className="inline-block md:cursor-none">
            <img
              src={DEFAULT_LOGO}
              alt="FLYBIT Dynamics"
              className="footer-logo-img"
              style={{ height: '44px', width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </a>
          <p className="foot-tagline text-[0.82rem] text-text-muted leading-relaxed mt-5 max-w-[260px]">
            India's premier drone light show company — illuminating celebrations with technology and artistry.
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
              <a href="tel:+919979850863" className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                +91 99798 50863
              </a>
            </li>
            <li>
              <a href="tel:+919227428262" className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                +91 92274 28262
              </a>
            </li>
            <li>
              <a href="mailto:info@flybitdynamics.com" className="text-text-muted hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                info@flybitdynamics.com
              </a>
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
          © 2026 FLYBIT Dynamics. All rights reserved. DGCA Certified.
        </div>
        <div className="foot-socials flex gap-3">
          {[
            {
              key: 'linkedin',
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/flybitdynamics/',
              icon: (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              ),
            },
            {
              key: 'instagram',
              label: 'Instagram',
              href: 'https://www.instagram.com/flybitdynamics',
              icon: (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              ),
            },
            {
              key: 'youtube',
              label: 'YouTube',
              href: 'https://www.youtube.com/@FlybitDynamics',
              icon: (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
                </svg>
              ),
            },
            {
              key: 'facebook',
              label: 'Facebook',
              href: 'https://www.facebook.com/share/1DBPwVktrz/',
              icon: (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              ),
            },
          ].map((soc) => (
            <a
              key={soc.key}
              href={soc.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={soc.label}
              title={soc.label}
              className="social w-9 h-9 border border-border rounded-full flex items-center justify-center text-text-muted hover:text-gold hover:border-gold transition-all duration-200 md:cursor-none"
            >
              {soc.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
