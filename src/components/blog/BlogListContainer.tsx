'use client';

import { useState, useMemo } from 'react';
import BlogHero from './BlogHero';
import BlogCard from './BlogCard';
import type { BlogPost } from '@/lib/blogs/types';

interface BlogListContainerProps {
  initialBlogs: BlogPost[];
}

const ITEMS_PER_PAGE = 6;

export default function BlogListContainer({ initialBlogs }: BlogListContainerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Extract categories dynamically from blog list (no hardcoding)
  const categories = useMemo(() => {
    const cats = initialBlogs.map((b) => b.category).filter(Boolean);
    return Array.from(new Set(cats));
  }, [initialBlogs]);

  // Filter blogs based on search query and active category
  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((blog) => {
      const matchesCategory =
        activeCategory === 'All' ||
        blog.category.toLowerCase() === activeCategory.toLowerCase();
      
      const matchesSearch =
        !searchQuery ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [initialBlogs, searchQuery, activeCategory]);

  // Reset pagination on filter change
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-dark pb-20">
      {/* Search and Category Filter Section */}
      <BlogHero
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        categories={categories}
      />

      {/* Featured Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-14">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border/60 rounded-[3px] bg-dark-3">
            <svg
              className="w-12 h-12 text-text-dim mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4a2 2 0 00-2-2m2 2a2 2 0 00-2 2m2-2V9M9 9h3m-3 3h6"
              />
            </svg>
            <h3 className="font-cormorant text-xl text-text mb-2">No Articles Found</h3>
            <p className="font-sans text-xs text-text-muted max-w-sm mx-auto">
              We couldn't find any articles matching your search query. Try broadening your keywords.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedBlogs.map((blog) => (
                <div key={blog.id} className="h-full">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-16 pt-8 border-t border-border/40 select-none">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="px-4 py-2 border border-border text-text-muted hover:border-gold/50 hover:text-text rounded-[2px] text-xs uppercase tracking-wider disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  Prev
                </button>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 flex items-center justify-center text-xs border rounded-[2px] transition-all cursor-pointer ${
                        currentPage === page
                          ? 'bg-gold border-gold text-black font-semibold'
                          : 'border-border text-text-muted hover:border-gold/40 hover:text-text'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  className="px-4 py-2 border border-border text-text-muted hover:border-gold/50 hover:text-text rounded-[2px] text-xs uppercase tracking-wider disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
