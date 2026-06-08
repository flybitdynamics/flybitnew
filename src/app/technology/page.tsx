'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import HeroTechnology from '@/components/technology/HeroTechnology';
import StatsBand from '@/components/technology/StatsBand';
import HardwareSpecs from '@/components/technology/HardwareSpecs';
import SoftwareSuite from '@/components/technology/SoftwareSuite';
import SafetyFirst from '@/components/technology/SafetyFirst';
import TechnicalCapabilities from '@/components/technology/TechnicalCapabilities';
import TechnologyCta from '@/components/technology/TechnologyCta';

export default function TechnologyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  const openModal = (title: string, description: string) => {
    setModalTitle(title);
    setModalDesc(description);
    setModalOpen(true);
  };

  useEffect(() => {
    // Scroll reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delayAttr = entry.target.getAttribute('data-d');
            const delay = delayAttr ? parseInt(delayAttr, 10) : 0;
            
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('.fade-up, .fade-in, .fade-left, .fade-right');
      elements.forEach((el, index) => {
        if (!el.hasAttribute('data-d') && (el.classList.contains('fade-up') || el.classList.contains('fade-in'))) {
          el.setAttribute('data-d', String((index % 4) * 80));
        }
        revealObserver.observe(el);
      });
    };

    // Initial run
    observeElements();

    // Swarm watch for dynamic changes (like tab switching)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-text selection:bg-gold selection:text-black">
      {/* Navigation */}
      <Navbar onOpenModal={openModal} />

      {/* Technology Page Subsections */}
      <HeroTechnology />
      <StatsBand />
      <HardwareSpecs />
      <SoftwareSuite />
      <SafetyFirst onOpenModal={openModal} />
      <TechnicalCapabilities />
      <TechnologyCta onOpenModal={openModal} />

      {/* Footer */}
      <Footer onOpenModal={openModal} />

      {/* Centralized Dialog Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        description={modalDesc}
      />
    </main>
  );
}
