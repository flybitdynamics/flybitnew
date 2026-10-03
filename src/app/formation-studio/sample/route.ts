import { hasStudioSession, privateHeaders, studioFile } from '@/lib/formation-studio/auth';

export const dynamic = 'force-dynamic';

// GET /formation-studio/sample — the studio's sample line-art image (signed-in only).
export async function GET() {
  if (!(await hasStudioSession())) return new Response('Unauthorized', { status: 401, headers: privateHeaders });
  const png = await studioFile('sample.png');
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png', ...privateHeaders } });
}
