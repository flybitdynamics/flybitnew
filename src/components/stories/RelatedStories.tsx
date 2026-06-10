'use client';

import type { ContentStory } from '@/lib/stories/types';
import StoryCard from './StoryCard';

interface RelatedStoriesProps {
  stories: ContentStory[];
  onStoryClick?: (story: ContentStory) => void;
  title?: string;
}

export default function RelatedStories({
  stories,
  onStoryClick,
  title = 'Related Stories',
}: RelatedStoriesProps) {
  if (!stories.length) return null;

  // return (
  //   <div className="mt-10 pt-8 border-t border-border">
  //     <h3 className="font-cormorant text-xl text-text mb-5">{title}</h3>
  //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //       {stories.map((story) => (
  //         <StoryCard key={story.id} story={story} onClick={onStoryClick} />
  //       ))}
  //     </div>
  //   </div>
  // );
  return null;
}
