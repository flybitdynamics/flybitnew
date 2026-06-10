'use client';

import Image from 'next/image';

interface AuthorBoxProps {
  author: string;
  authorImage?: string;
  authorBio?: string;
}

export default function AuthorBox({ author, authorImage, authorBio }: AuthorBoxProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 bg-dark-3 border border-border/80 rounded-[3px] mt-12">
      <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-gold/30 bg-dark-2">
        <Image
          src={authorImage || '/logo.png'}
          alt={author}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div className="text-center sm:text-left space-y-2">
        <span className="text-[0.6rem] font-sans uppercase tracking-[0.2em] text-gold font-semibold block">
          About The Author
        </span>
        <h4 className="font-cormorant text-lg text-text font-medium">{author}</h4>
        <p className="font-sans text-xs text-text-muted leading-relaxed">
          {authorBio || 'Expert crew member, engineering lead, or creative director contributing to the FLYBIT Dynamics fleet operations.'}
        </p>
      </div>
    </div>
  );
}
