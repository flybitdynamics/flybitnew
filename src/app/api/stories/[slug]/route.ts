import { NextResponse } from 'next/server';
import { getStoryBySlugDb } from '@/lib/stories/admin-db';

type RouteContext = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const story = await getStoryBySlugDb(slug);

  if (!story) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(
    { story },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
