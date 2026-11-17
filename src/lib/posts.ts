import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';
import { Marked } from 'marked';

export interface PostHeading {
  depth: number;
  slug: string;
  text: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  pubDate: string; // YYYY-MM-DD
  category: string;
  tags: string[];
  draft: boolean;
  content: string;
  html: string;
  headings: PostHeading[];
}

const POSTS_DIR = path.resolve(process.cwd(), 'data', 'posts');
const SEED_DIR = path.resolve(process.cwd(), 'src', 'content', 'posts');

function ensurePostsDir() {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
    if (fs.existsSync(SEED_DIR)) {
      for (const file of fs.readdirSync(SEED_DIR)) {
        if (file.endsWith('.md')) {
          fs.copyFileSync(path.join(SEED_DIR, file), path.join(POSTS_DIR, file));
        }
      }
    }
  }
}

export function sanitizeSlug(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5_-]+/g, '-')
    .replace(/^-+|-+$/g, '') || `post-${Date.now()}`;
}

export function renderMarkdown(md: string): { html: string; headings: PostHeading[] } {
  const headings: PostHeading[] = [];
  const usedSlugs = new Map<string, number>();

  const marked = new Marked({
    gfm: true,
    breaks: false,
  });

  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens).replace(/<[^>]+>/g, '');
        let baseSlug = text
          .trim()
          .toLowerCase()
          .replace(/[^\w\u4e00-\u9fa5-]+/g, '-')
          .replace(/^-+|-+$/g, '');
        if (!baseSlug) baseSlug = `section-${headings.length + 1}`;
        const count = usedSlugs.get(baseSlug) ?? 0;
        usedSlugs.set(baseSlug, count + 1);
        const slug = count > 0 ? `${baseSlug}-${count}` : baseSlug;

        headings.push({ depth, slug, text });
        const inner = this.parser.parseInline(tokens);
        return `<h${depth} id="${slug}">${inner}</h${depth}>\n`;
      },
    },
  });

  const html = marked.parse(md) as string;
  return { html, headings };
}

function parseMarkdownFile(slug: string, raw: string): BlogPost {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  let data: Record<string, unknown> = {};
  let content = raw;

  if (match) {
    try {
      data = (yaml.load(match[1]) as Record<string, unknown>) || {};
    } catch {
      data = {};
    }
    content = match[2];
  }

  let pubDateStr = new Date().toISOString().slice(0, 10);
  if (data.pubDate instanceof Date) {
    pubDateStr = data.pubDate.toISOString().slice(0, 10);
  } else if (typeof data.pubDate === 'string' && data.pubDate.trim()) {
    pubDateStr = data.pubDate.trim().slice(0, 10);
  }

  const tags = Array.isArray(data.tags)
    ? data.tags.map((t) => String(t).trim()).filter(Boolean)
    : [];

  const { html, headings } = renderMarkdown(content);

  return {
    slug,
    title: typeof data.title === 'string' && data.title.trim() ? data.title.trim() : slug,
    description: typeof data.description === 'string' ? data.description.trim() : '',
    pubDate: pubDateStr,
    category: typeof data.category === 'string' && data.category.trim() ? data.category.trim() : '随笔',
    tags,
    draft: Boolean(data.draft),
    content,
    html,
    headings,
  };
}

export function getAllPosts(includeDrafts = false): BlogPost[] {
  ensurePostsDir();
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
    return parseMarkdownFile(slug, raw);
  });

  return posts
    .filter((p) => includeDrafts || !p.draft)
    .sort((a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf());
}

export function getPostBySlug(slug: string, includeDrafts = false): BlogPost | null {
  ensurePostsDir();
  const safe = path.basename(slug);
  const filePath = path.join(POSTS_DIR, `${safe}.md`);
  if (!fs.existsSync(filePath)) return null;
  const post = parseMarkdownFile(safe, fs.readFileSync(filePath, 'utf-8'));
  if (!includeDrafts && post.draft) return null;
  return post;
}

export function savePost(input: {
  slug: string;
  originalSlug?: string;
  title: string;
  description: string;
  pubDate: string;
  category: string;
  tags: string[];
  draft: boolean;
  content: string;
}): BlogPost {
  ensurePostsDir();
  const targetSlug = sanitizeSlug(input.slug);
  const frontmatter = yaml.dump(
    {
      title: input.title.trim() || '未命名文章',
      description: input.description.trim(),
      pubDate: input.pubDate || new Date().toISOString().slice(0, 10),
      category: input.category.trim() || '随笔',
      tags: input.tags.filter(Boolean),
      draft: Boolean(input.draft),
    },
    { lineWidth: -1 }
  );

  const fileContent = `---\n${frontmatter}---\n\n${input.content.replace(/^\n+/, '')}`;
  fs.writeFileSync(path.join(POSTS_DIR, `${targetSlug}.md`), fileContent, 'utf-8');

  if (input.originalSlug && input.originalSlug !== targetSlug) {
    const oldPath = path.join(POSTS_DIR, `${path.basename(input.originalSlug)}.md`);
    if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
  }

  return getPostBySlug(targetSlug, true)!;
}

export function deletePost(slug: string): boolean {
  ensurePostsDir();
  const filePath = path.join(POSTS_DIR, `${path.basename(slug)}.md`);
  if (!fs.existsSync(filePath)) return false;
  fs.unlinkSync(filePath);
  return true;
}

export function renameCategory(oldName: string, newName: string): number {
  const posts = getAllPosts(true);
  let count = 0;
  for (const post of posts) {
    if (post.category === oldName) {
      savePost({ ...post, originalSlug: post.slug, category: newName });
      count++;
    }
  }
  return count;
}

export function renameTag(oldName: string, newName: string): number {
  const posts = getAllPosts(true);
  let count = 0;
  for (const post of posts) {
    if (post.tags.includes(oldName)) {
      const nextTags = Array.from(new Set(post.tags.map((t) => (t === oldName ? newName : t))));
      savePost({ ...post, originalSlug: post.slug, tags: nextTags });
      count++;
    }
  }
  return count;
}
