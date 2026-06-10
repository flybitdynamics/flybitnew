import { NextResponse } from 'next/server';
import { getBlogBySlugServer } from '@/lib/blogs/queries-server';

type RouteContext = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const blog = await getBlogBySlugServer(slug);

  if (!blog) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(
    { blog },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
