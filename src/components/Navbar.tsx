'use client';
import React, { useState, useEffect } from 'react';

import Link from 'next/link';

interface NavbarProps {
  onOpenModal: (title: string, description: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-6 md:px-20 py-4 transition-all duration-400 ${
        scrolled ? 'nav-scrolled-blur shadow-2xl' : 'bg-transparent'
      }`}
    >
      <Link href="/" className="logo-img-link flex items-center no-underline">
        <img
          src="/logo.png"
          alt="FLYBIT Dynamics"
          className="nav-logo-img"
          style={{ height: '44px', width: 'auto', objectFit: 'contain', display: 'block' }}
        />
      </Link>
      <ul className="nav-links flex gap-6 md:gap-10 list-none items-center">
        <li>
          <Link
            href="/about"
            className="text-text-muted hover:text-gold text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 md:cursor-none"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="text-text-muted hover:text-gold text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 md:cursor-none"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/stories"
            className="text-text-muted hover:text-gold text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 md:cursor-none"
          >
            Stories
          </Link>
        </li>
        {/* <li>
          <Link
            href="/portfolio"
            className="text-text-muted hover:text-gold text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 md:cursor-none"
          >
            Portfolio
          </Link>
        </li> */}
        <li>
          <Link
            href="/technology"
            className="text-text-muted hover:text-gold text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 md:cursor-none"
          >
            Technology
          </Link>
        </li>
        {/* <li>
          <a
            href="#process"
            className="text-text-muted hover:text-gold text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 md:cursor-none"
          >
            Process
          </a>
        </li> */}
        {/* <li>
          <a
            href="#pricing"
            className="text-text-muted hover:text-gold text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 md:cursor-none"
          >
            Pricing
          </a>
        </li> */}
        <li>
          <Link
            href="/contact"
            className="text-text-muted hover:text-gold text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 md:cursor-none"
          >
            Contact
          </Link>
        </li>
        <li>
          <button
            onClick={() =>
              onOpenModal(
                'Book a Show',
                "Tell us your event details and we'll craft the perfect aerial spectacle."
              )
            }
            className="nav-book bg-gold hover:bg-gold-light text-black font-medium px-6 py-2.5 text-[0.72rem] tracking-[0.14em] uppercase rounded-[2px] transition-colors duration-200 cursor-pointer md:cursor-none border-none"
          >
            Book Show
          </button>
        </li>
      </ul>
    </nav>
  );
}
