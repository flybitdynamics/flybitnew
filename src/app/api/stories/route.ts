import { NextResponse } from 'next/server';
import { getPublishedStoriesDb } from '@/lib/stories/admin-db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limitParam = searchParams.get('limit');
  const limitCount = limitParam ? Number(limitParam) : undefined;

  const stories = await getPublishedStoriesDb(
    limitCount && !Number.isNaN(limitCount) ? limitCount : undefined
  );

  return NextResponse.json(
    { stories },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
