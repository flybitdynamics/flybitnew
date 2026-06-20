'use client';

import { useState } from 'react';

interface BlogHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

export default function BlogHero({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  categories,
}: BlogHeroProps) {
  const [focused, setFocused] = useState(false);

  return (
    <section className="relative pt-24 pb-10 overflow-hidden border-b border-border/40 bg-radial-gradient">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-dark-2/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Subtitle Accent */}
        <span className="text-[0.68rem] tracking-[0.25em] text-gold font-sans uppercase font-semibold mb-4 block animate-fade-in">
          Insights, Stories & Innovations
        </span>

        {/* H1 Headline */}
        <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-text leading-[1.1] mb-6 max-w-4xl tracking-tight">
          Exploring the Frontiers of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
            Drone Technology
          </span>
        </h1>

        {/* Short Description */}
        <p className="font-sans text-sm md:text-base text-text-muted max-w-2xl leading-relaxed mb-10">
          In-depth technical guides, behind-the-scenes case studies, sangeet/wedding choreographies, and corporate drone show wisdom.
        </p>

        {/* Search Input Box */}
        <div className="w-full max-w-lg mb-10 relative">
          <div
            className={`flex items-center bg-dark-3 border rounded-[4px] px-4 py-3 transition-all duration-300 ${
              focused ? 'border-gold/60 shadow-[0_0_15px_rgba(212,175,55,0.1)]' : 'border-border'
            }`}
          >
            <svg
              className={`w-4 h-4 mr-3 transition-colors duration-300 ${
                focused ? 'text-gold' : 'text-text-dim'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search guides, tutorials & articles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="bg-transparent border-none text-text text-sm w-full outline-none placeholder-text-dim/80 font-sans"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="text-text-dim hover:text-gold transition-colors ml-2 cursor-pointer bg-transparent border-none"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="w-full max-w-4xl">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => onCategoryChange('All')}
              className={`px-4.5 py-2 text-[0.68rem] tracking-wider uppercase rounded-[2px] transition-all duration-300 cursor-pointer ${
                activeCategory === 'All'
                  ? 'bg-gold border border-gold text-black font-semibold shadow-[0_4px_12px_rgba(212,175,55,0.2)]'
                  : 'bg-dark-3 border border-border text-text-muted hover:border-gold/40 hover:text-text'
              }`}
            >
              All Topics
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(cat)}
                className={`px-4.5 py-2 text-[0.68rem] tracking-wider uppercase rounded-[2px] transition-all duration-300 cursor-pointer ${
                  activeCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-gold border border-gold text-black font-semibold shadow-[0_4px_12px_rgba(212,175,55,0.2)]'
                    : 'bg-dark-3 border border-border text-text-muted hover:border-gold/40 hover:text-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
