'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import BlogListContainer from './BlogListContainer';
import type { BlogPost } from '@/lib/blogs/types';

interface BlogListingPageViewProps {
  blogs: BlogPost[];
}

export default function BlogListingPageView({ blogs }: BlogListingPageViewProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  const openModal = (title: string, desc: string) => {
    setModalTitle(title);
    setModalDesc(desc);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-text">
      <Navbar onOpenModal={openModal} />
      <main className="min-h-screen bg-dark">
        <BlogListContainer initialBlogs={blogs} />
      </main>
      <Footer onOpenModal={openModal} />
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        description={modalDesc}
      />
    </div>
  );
}
