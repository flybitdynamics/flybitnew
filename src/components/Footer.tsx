'use client';

import React from 'react';
import Link from 'next/link';
import { DEFAULT_LOGO, publicAsset } from '@/lib/public-assets';

const FOOTER_SHOWCASE_IMAGE = publicAsset('/ChatGPT Image Jul 3, 2026, 11_43_00 AM (1).png');

interface FooterProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="bg-dark border-t border-border px-6 md:px-20 py-14 font-sans">
      <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 lg:gap-16 mb-10">
        <div className="foot-brand">
          <a href="#" className="inline-block md:cursor-none">
            <img
              src={DEFAULT_LOGO}
              alt="FLYBIT Dynamics"
              className="footer-logo-img"
              style={{ height: '44px', width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </a>
          <p className="foot-tagline text-[0.82rem] text-white/90 leading-relaxed mt-5 max-w-[260px]">
            India's premier drone light show company — illuminating celebrations with technology and artistry.
          </p>
          <div className="mt-6">
            <img
              src={FOOTER_SHOWCASE_IMAGE}
              alt="FLYBIT drone light show at Global Economic Summit India 2024"
              className="rounded-[3px] border border-gold/10 max-w-[300px] w-full h-auto object-cover opacity-80 hover:opacity-100 hover:border-gold/30 transition-all duration-300 shadow-lg"
            />
          </div>
        </div>

        <div>
          <div className="foot-col-title text-[0.62rem] tracking-[0.3em] uppercase text-gold mb-6">
            Company
          </div>
          <ul className="foot-links space-y-3.5">
            <li>
              <a href="/about" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                Services
              </a>
            </li>
            <li>
              <a href="/pricing" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                Pricing Guide
              </a>
            </li>
            <li>
              <a href="/stories" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                Stories & Insights
              </a>
            </li>
            <li>
              <a href="/blog" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                Blog
              </a>
            </li>
            <li>
              <a href="/technology" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none">
                Technology
              </a>
            </li>
            <li>
              <Link href="/what-is-a-drone-light-show" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none block text-left">
                What is a Drone Show?
              </Link>
            </li>
            <li>
              <Link href="/drone-light-show-in-india" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none block text-left">
                Drone Light Show India
              </Link>
            </li>
            <li>
              <Link href="/drone-light-show-near-me" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none block text-left">
                Drone Show Near Me
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="foot-col-title text-[0.62rem] tracking-[0.3em] uppercase text-gold mb-6">
            Locations
          </div>
          <ul className="foot-links space-y-3.5">
            <li>
              <Link href="/drone-show-jaipur" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 block text-left">
                Jaipur
              </Link>
            </li>
            <li>
              <Link href="/drone-light-show-udaipur" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 block text-left">
                Udaipur
              </Link>
            </li>
            <li>
              <Link href="/drone-show-ahmedabad" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 block text-left">
                Ahmedabad
              </Link>
            </li>
            <li>
              <Link href="/drone-show-delhi" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 block text-left">
                Delhi NCR
              </Link>
            </li>
            <li>
              <Link href="/drone-show-mumbai" className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 block text-left">
                Mumbai
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="foot-col-title text-[0.62rem] tracking-[0.3em] uppercase text-gold mb-6">
            Services
          </div>
          <ul className="foot-links space-y-3.5">
            <li>
              <Link
                href="/drone-show-for-social-events"
                className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none block text-left"
              >
                Social Events
              </Link>
            </li>
            <li>
              <Link
                href="/drone-show-for-birthday"
                className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none block text-left"
              >
                Birthday Shows
              </Link>
            </li>
            <li>
              <Link
                href="/drone-show-for-proposing"
                className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none block text-left"
              >
                Proposal Shows
              </Link>
            </li>
            <li>
              <Link
                href="/drone-show-for-wedding"
                className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none block text-left"
              >
                Weddings
              </Link>
            </li>
            <li>
              <Link
                href="/drone-show-for-corporate"
                className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none block text-left"
              >
                Corporate Events
              </Link>
            </li>
            <li>
              <Link
                href="/drone-show-for-government"
                className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none block text-left"
              >
                Government
              </Link>
            </li>
            <li>
              <Link
                href="/drone-show-for-product-launch"
                className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none block text-left"
              >
                Product Launch
              </Link>
            </li>
            <li>
              <Link
                href="/drone-show-for-spiritual"
                className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none block text-left"
              >
                Spiritual
              </Link>
            </li>
            <li>
              <Link
                href="/drone-show-for-sports-entertainment"
                className="text-white/90 hover:text-gold text-[0.82rem] transition-colors duration-200 md:cursor-none block text-left"
              >
                Sports &amp; Entertainment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="foot-col-title text-[0.62rem] tracking-[0.3em] uppercase text-gold mb-6">
            Contact
          </div>
          <ul className="foot-links space-y-3.5">
            <li>
              <a href="tel:+919979850863" className="text-white/90 hover:text-gold text-[0.82rem] font-sans transition-colors duration-200 md:cursor-none">
                +91 99798 50863
              </a>
            </li>
            <li>
              <a href="tel:+919227428262" className="text-white/90 hover:text-gold text-[0.82rem] font-sans transition-colors duration-200 md:cursor-none">
                +91 92274 28262
              </a>
            </li>
            <li>
              <a href="mailto:info@flybitdynamics.com" className="text-white/90 hover:text-gold text-[0.82rem] font-sans transition-colors duration-200 md:cursor-none">
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
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
          <div className="foot-copy text-[0.7rem] text-white/90 tracking-[0.08em] text-center md:text-left">
            © 2026 FLYBIT Dynamics. All rights reserved. DGCA Certified.
          </div>
          <div className="flex gap-3 text-[0.7rem] text-white/90 tracking-[0.08em]">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span className="text-white/50">•</span>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <span className="text-white/50">•</span>
            <Link href="/faqs" className="hover:text-gold transition-colors">FAQs</Link>
          </div>
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
              className="social w-9 h-9 border border-border rounded-full flex items-center justify-center text-white/90 hover:text-gold hover:border-gold transition-all duration-200 md:cursor-none"
            >
              {soc.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
