export type BlogStatus = 'draft' | 'published';

export interface BlogPostFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string; // Excerpt
  content: string; // MDX/HTML body
  date: string; // ISO date string (or display date)
  author: string;
  authorImage?: string;
  authorBio?: string;
  category: string;
  tags: string[];
  image: string; // Featured image
  featured: boolean;
  published: boolean; // Same as status === 'published'
  status: BlogStatus;
  views: number;
  readingTime: string;
  faqs?: BlogPostFaq[];
  createdAt: string;
  updatedAt: string;
}

export type BlogPostInput = Omit<BlogPost, 'id' | 'views' | 'createdAt' | 'updatedAt'>;
