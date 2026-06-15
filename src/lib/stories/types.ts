export type StoryStatus = 'draft' | 'published';

export const SHOW_TYPES = [
  'All Stories',
  'Social Events',
  'Corporate',
  'Government',
  'Spiritual',
  'Sports & Entertainment',
] as const;

export type ShowType = (typeof SHOW_TYPES)[number];

export interface ContentStory {
  id: string;
  title: string;
  slug: string;
  showType: ShowType;
  shortDescription: string;
  content: string;
  thumbnailUrl: string;
  coverImageUrl: string;
  videoUrl: string;
  instagramUrl: string;
  xUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  metaTitle: string;
  metaDescription: string;
  seoKeywords: string[];
  tags: string[];
  author: string;
  readingTime: string;
  featured: boolean;
  status: StoryStatus;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export type ContentStoryInput = Omit<ContentStory, 'id' | 'views' | 'createdAt' | 'updatedAt'>;
