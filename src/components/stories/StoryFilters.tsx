'use client';

import { SHOW_TYPES } from '@/lib/stories/types';

interface StoryFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function StoryFilters({ activeCategory, onCategoryChange }: StoryFiltersProps) {
  const categories = ['all', ...SHOW_TYPES];

  return (
    <div className="flex gap-2 flex-wrap mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onCategoryChange(cat)}
          className={`px-5 py-2 text-[0.68rem] tracking-[0.14em] uppercase rounded-[2px] border transition-all duration-200 ${
            activeCategory === cat
              ? 'bg-gold border-gold text-black font-medium'
              : 'bg-transparent border-border text-text-muted hover:border-gold hover:text-gold'
          }`}
        >
          {cat === 'all' ? 'All Stories' : cat}
        </button>
      ))}
    </div>
  );
}
