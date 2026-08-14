import type { Timestamp } from 'firebase/firestore';
import type { ContentStory, ShowType, StoryStatus } from './types';
import { SHOW_TYPES } from './types';
import { publicAsset } from '@/lib/public-assets';

function toIso(value: unknown): string {
  if (!value) return new Date().toISOString();
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && value !== null && 'toDate' in value) {
    return (value as Timestamp).toDate().toISOString();
  }
  return new Date().toISOString();
}

function toLocalPath(url: unknown, prefix: string): string {
  const str = String(url || '');
  if (!str) return '';
  const idx = str.indexOf(`/${prefix}/`);
  const relativePath = idx !== -1 ? str.substring(idx) : str;
  return publicAsset(relativePath);
}

const VIDEO_MAP: Record<string, string> = {
  'AO1Z8RQ9AM6JHQp6EySN': '/stories/Prateek wedding/video.mp4',
  'prateek-jenny-wedding': '/stories/Prateek wedding/video.mp4',
  'n0HrUCdju1Q2chJh1S42': '/stories/science city drones show/video.mp4',
  'sciknow-fest': '/stories/science city drones show/video.mp4',
  '3fXIKCCdkWQLC4ZtpBCZ': '/stories/science city drones show/video.mp4',
  'science-city-drones-show': '/stories/science city drones show/video.mp4',
  '5moAVDvB29vLOm5g4I9d': '/stories/Satdham Vidyamandir Inauguration/video.mp4',
  'satdham-vidyamandir-inauguration-ahmedabad': '/stories/Satdham Vidyamandir Inauguration/video.mp4',
  'QEy7ZR7rK1gQDS7g105G': "/stories/Govindpur's recognition as Ahmedabad's 25th Ward/video.mp4",
  'govindpurs-recognition-as-ahmedabads-25th-ward': "/stories/Govindpur's recognition as Ahmedabad's 25th Ward/video.mp4",
  'V1SakUWqB5qHXhklphTw': '/stories/Ram Navmi/video.mp4',
  'ram-navmi': '/stories/Ram Navmi/video.mp4',
  'Zd7nGPrFQYPGLtU3njiS': '/stories/khodiyar ma temple ( kkv )/video.mp4',
  'khodiyar-ma-temple-kkv': '/stories/khodiyar ma temple ( kkv )/video.mp4',
  'peiPa6iVL3irXCVrKDNQ': '/stories/Het & Rucha Wedding/video.mp4',
  'wedding': '/stories/Het & Rucha Wedding/video.mp4',
  'Cb1YHJMLLjm6XMmoOZpx': '/stories/Hanuman Jayanti/video.mp4',
  'hanuman-jayanti': '/stories/Hanuman Jayanti/video.mp4',
  'mwSAWYi49Z8wt2YBK7SB': '/stories/DGP Cup 2026/video.mp4',
  'dgp-cup-2026': '/stories/DGP Cup 2026/video.mp4',
  'k0E2GuU9pzfJDJkPKKRd': '/stories/amrut-vandana/video.mp4',
  'amrut-vandana': '/stories/amrut-vandana/video.mp4',
};

const SLUG_MAP: Record<string, string> = {
  'AO1Z8RQ9AM6JHQp6EySN': 'prateek-jenny-wedding',
  'n0HrUCdju1Q2chJh1S42': 'sciknow-fest',
  '3fXIKCCdkWQLC4ZtpBCZ': 'science-city-drones-show',
  '5moAVDvB29vLOm5g4I9d': 'satdham-vidyamandir-inauguration-ahmedabad',
  'QEy7ZR7rK1gQDS7g105G': 'govindpurs-recognition-as-ahmedabads-25th-ward',
  'V1SakUWqB5qHXhklphTw': 'ram-navmi',
  'Zd7nGPrFQYPGLtU3njiS': 'khodiyar-ma-temple-kkv',
  'peiPa6iVL3irXCVrKDNQ': 'wedding',
  'Cb1YHJMLLjm6XMmoOZpx': 'hanuman-jayanti',
  'mwSAWYi49Z8wt2YBK7SB': 'dgp-cup-2026',
  'k0E2GuU9pzfJDJkPKKRd': 'amrut-vandana',
};

export function mapFirestoreDoc(id: string, data: Record<string, unknown>): ContentStory {
  const showType = SHOW_TYPES.includes(data.showType as ShowType)
    ? (data.showType as ShowType)
    : 'Social Events';

  const slug = String(data.slug || SLUG_MAP[id] || id);
  const localThumb = `/stories/${slug}/thumbnail.png`;
  const rawVideo = String(data.videoUrl || '');
  const matchedVideo = VIDEO_MAP[id] || VIDEO_MAP[slug] || (rawVideo ? toLocalPath(rawVideo, 'stories') : '');

  return {
    id,
    title: String(data.title || ''),
    slug,
    showType,
    shortDescription: String(data.shortDescription || ''),
    content: String(data.content || ''),
    thumbnailUrl: publicAsset(localThumb),
    coverImageUrl: publicAsset(localThumb),
    videoUrl: matchedVideo ? publicAsset(matchedVideo) : '',
    instagramUrl: String(data.instagramUrl || ''),
    xUrl: String(data.xUrl || ''),
    facebookUrl: String(data.facebookUrl || ''),
    linkedinUrl: String(data.linkedinUrl || ''),
    metaTitle: String(data.metaTitle || ''),
    metaDescription: String(data.metaDescription || ''),
    seoKeywords: Array.isArray(data.seoKeywords) ? (data.seoKeywords as string[]) : [],
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    author: String(data.author || 'Admin'),
    readingTime: String(data.readingTime || '3 min'),
    featured: Boolean(data.featured),
    status: (data.status === 'draft' ? 'draft' : 'published') as StoryStatus,
    views: typeof data.views === 'number' ? data.views : 0,
    createdAt: toIso(data.createdAt),
    updatedAt: toIso(data.updatedAt),
  };
}

export function storyToFirestore(story: Partial<ContentStory>): Record<string, unknown> {
  return {
    title: story.title ?? '',
    slug: story.slug ?? '',
    showType: story.showType ?? 'Social Events',
    shortDescription: story.shortDescription ?? '',
    content: story.content ?? '',
    thumbnailUrl: story.thumbnailUrl ?? '',
    coverImageUrl: story.coverImageUrl ?? '',
    videoUrl: story.videoUrl ?? '',
    instagramUrl: story.instagramUrl ?? '',
    xUrl: story.xUrl ?? '',
    facebookUrl: story.facebookUrl ?? '',
    linkedinUrl: story.linkedinUrl ?? '',
    metaTitle: story.metaTitle ?? '',
    metaDescription: story.metaDescription ?? '',
    seoKeywords: story.seoKeywords ?? [],
    tags: story.tags ?? [],
    author: story.author ?? 'Admin',
    readingTime: story.readingTime ?? '3 min',
    featured: story.featured ?? false,
    status: story.status ?? 'draft',
    views: story.views ?? 0,
  };
}
