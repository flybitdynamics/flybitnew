import { NextResponse } from 'next/server';
import { getPublishedBlogsServer } from '@/lib/blogs/queries-server';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.flybitdynamics.com';

export async function GET() {
  const blogs = await getPublishedBlogsServer();

  let rssItemsXml = '';
  for (const blog of blogs) {
    const url = `${BASE}/blog/${blog.slug}`;
    rssItemsXml += `
    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
      <description><![CDATA[${blog.description}]]></description>
      <category>${blog.category}</category>
      <author>${blog.author}</author>
    </item>`;
  }

  const rssFeedXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>FLYBIT Dynamics Blog</title>
    <link>${BASE}/blog</link>
    <description>Insights, Stories &amp; Innovations in Drone Technology</description>
    <language>en-us</language>
    <atom:link href="${BASE}/blog/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssFeedXml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
