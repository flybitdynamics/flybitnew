import { NextResponse } from 'next/server';
import { getPublishedBlogsServer } from '@/lib/blogs/queries-server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limitParam = searchParams.get('limit');
  const limitCount = limitParam ? Number(limitParam) : undefined;

  const blogs = await getPublishedBlogsServer(
    limitCount && !Number.isNaN(limitCount) ? limitCount : undefined
  );

  return NextResponse.json(
    { blogs },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
