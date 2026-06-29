import fs from 'fs';
import path from 'path';
import type { BlogPost } from './types';
import { calculateReadingTime } from '../stories/utils';
import { DEFAULT_BLOG_IMAGE, DEFAULT_LOGO } from '@/lib/public-assets';

// Helper to parse YAML-like frontmatter
export function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    return { frontmatter: {} as Record<string, any>, content: fileContent };
  }

  const rawYaml = match[1];
  const content = match[2];
  const frontmatter: Record<string, any> = {};

  const lines = rawYaml.split('\n');
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let val = line.slice(colonIndex + 1).trim();

    // Remove quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }

    // Parse array
    if (val.startsWith('[') && val.endsWith(']')) {
      frontmatter[key] = val
        .slice(1, -1)
        .split(',')
        .map((x) => x.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
    } else if (val === 'true') {
      frontmatter[key] = true;
    } else if (val === 'false') {
      frontmatter[key] = false;
    } else {
      frontmatter[key] = val;
    }
  }

  return { frontmatter, content };
}

// Convert markdown to clean, basic HTML elements
// So that it displays beautifully inside .prose-story
export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Process code blocks (```lang ... ```)
  html = html.replace(/```(\w*)\r?\n([\s\S]*?)\r?\n```/g, (_, lang, code) => {
    return `<pre><code class="language-${lang}">${escapeHtml(code.trim())}</code></pre>`;
  });

  // Process inline code (`code`)
  html = html.replace(/`([^`]+)`/g, (_, code) => {
    return `<code>${escapeHtml(code)}</code>`;
  });

  // Process blockquotes (> quote)
  html = html.replace(/^\s*>\s+(.*)$/gm, '<blockquote>$1</blockquote>');

  // Process H3 (### Header)
  html = html.replace(/^\s*###\s+(.*)$/gm, '<h3>$1</h3>');

  // Process H2 (## Header)
  html = html.replace(/^\s*##\s+(.*)$/gm, '<h2>$1</h2>');

  // Process tables
  html = processMarkdownTables(html);

  // Process unordered lists (- item or * item)
  // Simple regex for lists
  let insideList = false;
  const lines = html.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/^\s*[-\*]\s+(.*)$/);
    if (match) {
      let content = match[1];
      if (!insideList) {
        lines[i] = `<ul>\n<li>${content}</li>`;
        insideList = true;
      } else {
        lines[i] = `<li>${content}</li>`;
      }
    } else {
      if (insideList) {
        lines[i - 1] += '\n</ul>';
        insideList = false;
      }
    }
  }
  if (insideList) {
    lines[lines.length - 1] += '\n</ul>';
  }
  html = lines.join('\n');

  // Process bold/italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Process links ([text](url))
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Process paragraphs (double newlines, excluding blocks)
  // We split by double newlines to form paragraphs
  const blocks = html.split(/\r?\n\r?\n/);
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i].trim();
    if (!block) continue;
    if (
      block.startsWith('<h2') ||
      block.startsWith('<h3') ||
      block.startsWith('<pre') ||
      block.startsWith('<blockquote') ||
      block.startsWith('<ul') ||
      block.startsWith('<ol') ||
      block.startsWith('<table')
    ) {
      continue;
    }
    const normalizedBlock = block.replace(/\r?\n/g, ' ');
    blocks[i] = `<p>${normalizedBlock}</p>`;
  }
  html = blocks.join('\n\n');

  return html;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function processMarkdownTables(text: string): string {
  const lines = text.split('\n');
  let insideTable = false;
  let tableRows: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      if (!insideTable) {
        insideTable = true;
        tableRows = [];
      }
      tableRows.push(line);
      lines[i] = ''; 
    } else {
      if (insideTable) {
        lines[i - 1] = renderHtmlTable(tableRows);
        insideTable = false;
      }
    }
  }
  if (insideTable) {
    lines[lines.length - 1] = renderHtmlTable(tableRows);
  }

  return lines.filter((l) => l !== '').join('\n');
}

function renderHtmlTable(rows: string[]): string {
  if (rows.length < 2) return '';
  
  const headers = rows[0]
    .slice(1, -1)
    .split('|')
    .map((x) => x.trim());
  const bodyRows = rows.slice(2).map((r) =>
    r
      .slice(1, -1)
      .split('|')
      .map((x) => x.trim())
  );

  let html = '<div class="overflow-x-auto my-6"><table class="w-full text-left border-collapse border border-border text-[0.8rem]">';
  html += '<thead><tr class="bg-dark-2 border-b border-border">';
  for (const h of headers) {
    html += `<th class="p-3 font-semibold text-text uppercase tracking-wider border-r border-border">${h}</th>`;
  }
  html += '</tr></thead><tbody>';
  for (const r of bodyRows) {
    html += '<tr class="border-b border-border hover:bg-white/2">';
    for (const c of r) {
      html += `<td class="p-3 border-r border-border text-text-muted">${c}</td>`;
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';
  return html;
}

const BLOGS_DIR = path.join(process.cwd(), 'content/blogs');

export function getStaticBlogs(): BlogPost[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];

  try {
    const files = fs.readdirSync(BLOGS_DIR);
    const mdxFiles = files.filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

    const posts: BlogPost[] = [];

    for (const file of mdxFiles) {
      const filePath = path.join(BLOGS_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const slug = file.replace(/\.mdx$/, '').replace(/\.md$/, '');

      const { frontmatter, content } = parseFrontmatter(fileContent);

      if (frontmatter.published === false) continue;

      const dateStr = frontmatter.date || new Date().toISOString();
      const contentHtml = markdownToHtml(content);

      posts.push({
        id: `static-${slug}`,
        title: frontmatter.title || slug,
        slug,
        description: frontmatter.description || '',
        content: contentHtml,
        date: dateStr,
        author: frontmatter.author || 'FLYBIT Dynamics',
        authorImage: frontmatter.authorImage || DEFAULT_LOGO,
        authorBio: frontmatter.authorBio || 'FLYBIT Dynamics team.',
        category: frontmatter.category || 'Technology',
        tags: frontmatter.tags || [],
        image: frontmatter.image || DEFAULT_BLOG_IMAGE,
        featured: !!frontmatter.featured,
        published: true,
        status: 'published',
        views: 0,
        readingTime: calculateReadingTime(contentHtml),
        createdAt: dateStr,
        updatedAt: dateStr,
      });
    }

    return posts;
  } catch (err) {
    console.error('Error reading static blogs:', err);
    return [];
  }
}
