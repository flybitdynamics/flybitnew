'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DEFAULT_LOGO } from '@/lib/public-assets';

interface NavbarProps {
  onOpenModal?: (title: string, description: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || '';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close menu on path change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const getLinkClass = (href: string) => {
    const active = isActive(href);
    return `text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-gold after:transition-transform after:duration-300 md:cursor-none ${
      active
        ? 'text-gold after:scale-x-100'
        : 'text-text-muted hover:text-gold after:scale-x-0 hover:after:scale-x-100'
    }`;
  };

  const getMobileLinkClass = (href: string) => {
    const active = isActive(href);
    return `text-[0.76rem] tracking-[0.16em] uppercase transition-colors duration-200 font-medium ${
      active ? 'text-gold' : 'text-[#EDE8DF] hover:text-gold'
    }`;
  };

  return (
    <>
      <nav
        id="nav"
        className={`fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-6 md:px-20 py-4 transition-all duration-400 ${
          scrolled ? 'nav-scrolled-blur shadow-2xl' : 'bg-transparent max-md:nav-scrolled-blur shadow-2xl'
        }`}
      >
        <Link href="/" className="logo-img-link flex items-center no-underline">
          <img
            src={DEFAULT_LOGO}
            alt="FLYBIT Dynamics"
            className="nav-logo-img"
            style={{ height: '44px', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </Link>
        
        {/* Desktop Links */}
        <ul className="nav-links hidden md:flex gap-6 md:gap-10 list-none items-center">
          <li>
            <Link href="/about" className={getLinkClass('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className={getLinkClass('/services')}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/stories" className={getLinkClass('/stories')}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/blog" className={getLinkClass('/blog')}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/technology" className={getLinkClass('/technology')}>
              Technology
            </Link>
          </li>
          <li>
            <Link href="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={() =>
                onOpenModal?.(
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

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 bg-transparent border-none cursor-pointer focus:outline-none z-[300]"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-[2px] bg-[#EDE8DF] transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[8px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-[#EDE8DF] transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-[#EDE8DF] transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[8px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-[240] bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] z-[250] bg-[#0c0c0d] border-l border-gold/10 p-8 pt-28 flex flex-col md:hidden transition-transform duration-300 ease-in-out shadow-2xl ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button for Mobile Drawer */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 border border-gold/15 text-[#EDE8DF] hover:text-gold hover:border-gold transition-all duration-200 text-2xl focus:outline-none cursor-pointer"
          aria-label="Close menu"
        >
          ×
        </button>
        {/* Scrollable links container */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-5 pr-2 overscroll-contain">
          <Link href="/" className={getMobileLinkClass('/')}>
            Home
          </Link>
          <Link href="/about" className={getMobileLinkClass('/about')}>
            About
          </Link>
          <Link href="/services" className={getMobileLinkClass('/services')}>
            Services
          </Link>
          <Link href="/stories" className={getMobileLinkClass('/stories')}>
            Portfolio
          </Link>
          <Link href="/blog" className={getMobileLinkClass('/blog')}>
            Blog
          </Link>
          <Link href="/technology" className={getMobileLinkClass('/technology')}>
            Technology
          </Link>
          <Link href="/contact" className={getMobileLinkClass('/contact')}>
            Contact
          </Link>
        </div>
        
        {/* Fixed bottom CTA container */}
        <div className="pt-6 border-t border-gold/10 mt-auto bg-[#0c0c0d] shrink-0">
          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenModal?.(
                'Book a Show',
                "Tell us your event details and we'll craft the perfect aerial spectacle."
              );
            }}
            className="w-full bg-gold hover:bg-gold-light text-black font-medium py-3 text-[0.8rem] tracking-[0.14em] uppercase rounded-[2px] transition-colors duration-200 cursor-pointer border-none"
          >
            Book Show
          </button>
        </div>
      </div>
    </>
  );
}
