'use client';

import { useState } from 'react';
import type { BlogPostFaq } from '@/lib/blogs/types';

interface FaqSectionProps {
  faqs: BlogPostFaq[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mt-14 pt-10 border-t border-border/40">
      <h3 className="font-cormorant text-2xl text-text mb-6">Frequently Asked Questions</h3>
      
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className="border border-border/80 bg-dark-3 rounded-[3px] overflow-hidden transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 text-left font-sans text-xs uppercase tracking-wider text-text hover:text-gold transition-colors cursor-pointer bg-transparent border-none"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <svg
                  className={`w-4 h-4 text-text-dim shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-gold' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-[300px] border-t border-border/40' : 'max-h-0'
                }`}
              >
                <div className="p-4 font-sans text-xs text-text-muted leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
