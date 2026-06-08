'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import HeroServices from '@/components/services/HeroServices';
import IntroStats from '@/components/services/IntroStats';
import ServicesFilterDetailed from '@/components/services/ServicesFilterDetailed';
import ServicesProcess from '@/components/services/ServicesProcess';
import ServicesWhyChooseUs from '@/components/services/ServicesWhyChooseUs';
import ServicesCta from '@/components/services/ServicesCta';

export default function ServicesPage() {
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
            // Apply a slight staggered delay
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
      const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
      elements.forEach((el, index) => {
        // Set staggered delay attributes if not already defined
        if (!el.hasAttribute('data-d') && el.classList.contains('fade-up')) {
          el.setAttribute('data-d', String((index % 4) * 80));
        }
        revealObserver.observe(el);
      });
    };

    // Initial Observation run
    observeElements();

    // Dynamically watch for DOM modifications to secure newly rendered filters or filtered cards
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
      {/* Shared Nav */}
      <Navbar onOpenModal={openModal} />

      {/* Services Subsections */}
      <HeroServices />
      <IntroStats />
      <ServicesFilterDetailed onOpenModal={openModal} />
      <ServicesProcess />
      <ServicesWhyChooseUs />
      <ServicesCta onOpenModal={openModal} />

      {/* Shared Footer */}
      <Footer onOpenModal={openModal} />

      {/* Shared Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        description={modalDesc}
      />
    </main>
  );
}
