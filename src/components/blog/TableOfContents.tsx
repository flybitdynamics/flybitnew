'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const articleContainer = document.querySelector('.prose-story');
    if (!articleContainer) return;

    const headingElements = articleContainer.querySelectorAll('h2, h3');
    const items: TocItem[] = [];

    headingElements.forEach((el, index) => {
      const text = el.textContent || '';
      if (!el.id) {
        el.id = `heading-${index}-${slugifyText(text)}`;
      }
      items.push({
        id: el.id,
        text,
        level: el.tagName === 'H2' ? 2 : 3,
      });
    });

    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0.1 }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  function slugifyText(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-28 space-y-4 max-h-[calc(100vh-160px)] overflow-y-auto pr-4 select-none">
      <h4 className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-gold font-semibold mb-6">
        Table of Contents
      </h4>
      <ul className="space-y-3 font-sans text-xs">
        {headings.map((h) => (
          <li
            key={h.id}
            style={{ paddingLeft: h.level === 3 ? '1rem' : '0px' }}
            className="transition-all duration-200"
          >
            <a
              href={`#${h.id}`}
              onClick={(e) => handleClick(e, h.id)}
              className={`block py-0.5 border-l-2 pl-3 transition-colors duration-200 leading-relaxed ${
                activeId === h.id
                  ? 'border-gold text-gold font-medium'
                  : 'border-border/60 text-text-dim hover:text-text hover:border-gold/30'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
