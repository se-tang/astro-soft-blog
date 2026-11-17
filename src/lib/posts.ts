import { ensureDbReady, SEED_POSTS, type RuntimeEnv } from './db';
import { renderMarkdown, type PostHeading } from './markdown';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  category: string;
  tags: string[];
  draft: boolean;
  content: string;
  html: string;
  headings: PostHeading[];
}

interface PostRow {
  slug: string;
  title: string;
  description: string;
  pub_date: string;
  category: string;
  tags: string;
  draft: number;
  content: string;
}

function rowToPost(row: PostRow): BlogPost {
  let tags: string[] = [];
  try {
    const parsed = JSON.parse(row.tags);
    if (Array.isArray(parsed)) tags = parsed.map((t) => String(t).trim()).filter(Boolean);
  } catch {
    tags = [];
  }
  const { html, headings } = renderMarkdown(row.content || '');
  return {
    slug: row.slug,
    title: row.title,
    description: row.description || '',
    pubDate: row.pub_date,
    category: row.category || '随笔',
    tags,
    draft: Boolean(row.draft),
    content: row.content || '',
    html,
    headings,
  };
}

export function sanitizeSlug(raw: string): string {
  return (
    raw
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fa5_-]+/g, '-')
      .replace(/^-+|-+$/g, '') || `post-${Date.now()}`
  );
}

export async function getAllPosts(env?: RuntimeEnv, includeDrafts = false): Promise<BlogPost[]> {
  const db = env?.DB;
  if (!db) {
    return SEED_POSTS.filter((p) => includeDrafts || !p.draft).map((p) => {
      const { html, headings } = renderMarkdown(p.content);
      return { ...p, html, headings };
    });
  }

  await ensureDbReady(db);
  const sql = includeDrafts
    ? 'SELECT slug, title, description, pub_date, category, tags, draft, content FROM posts ORDER BY pub_date DESC, updated_at DESC'
    : 'SELECT slug, title, description, pub_date, category, tags, draft, content FROM posts WHERE draft = 0 ORDER BY pub_date DESC, updated_at DESC';
  const { results } = await db.prepare(sql).all<PostRow>();
  return (results || []).map(rowToPost);
}

export async function getPostBySlug(env: RuntimeEnv | undefined, slug: string, includeDrafts = false): Promise<BlogPost | null> {
  const cleanSlug = slug.trim();
  const db = env?.DB;
  if (!db) {
    const found = SEED_POSTS.find((p) => p.slug === cleanSlug && (includeDrafts || !p.draft));
    if (!found) return null;
    const { html, headings } = renderMarkdown(found.content);
    return { ...found, html, headings };
  }

  await ensureDbReady(db);
  const sql = includeDrafts
    ? 'SELECT slug, title, description, pub_date, category, tags, draft, content FROM posts WHERE slug = ?'
    : 'SELECT slug, title, description, pub_date, category, tags, draft, content FROM posts WHERE slug = ? AND draft = 0';
  const row = await db.prepare(sql).bind(cleanSlug).first<PostRow>();
  return row ? rowToPost(row) : null;
}

export async function savePost(
  env: RuntimeEnv,
  input: {
    slug: string;
    originalSlug?: string;
    title: string;
    description: string;
    pubDate: string;
    category: string;
    tags: string[];
    draft: boolean;
    content: string;
  }
): Promise<BlogPost> {
  const db = env?.DB;
  if (!db) {
    throw new Error('未检测到 D1 数据库绑定 (DB)，请先在 Cloudflare Pages 绑定 D1 数据库。');
  }
  await ensureDbReady(db);

  const targetSlug = sanitizeSlug(input.slug);
  const now = Date.now();
  const stmts = [
    db
      .prepare(
        `INSERT OR REPLACE INTO posts (slug, title, description, pub_date, category, tags, draft, content, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(
        targetSlug,
        input.title.trim() || '未命名文章',
        input.description.trim(),
        input.pubDate || new Date().toISOString().slice(0, 10),
        input.category.trim() || '随笔',
        JSON.stringify(input.tags.filter(Boolean)),
        input.draft ? 1 : 0,
        input.content || '',
        now
      ),
  ];

  if (input.originalSlug && input.originalSlug !== targetSlug) {
    stmts.push(db.prepare('DELETE FROM posts WHERE slug = ?').bind(input.originalSlug));
  }

  await db.batch(stmts);
  return {
    slug: targetSlug,
    title: input.title.trim() || '未命名文章',
    description: input.description.trim(),
    pubDate: input.pubDate || new Date().toISOString().slice(0, 10),
    category: input.category.trim() || '随笔',
    tags: input.tags.filter(Boolean),
    draft: Boolean(input.draft),
    content: input.content || '',
    html: '',
    headings: [],
  };
}

export async function deletePost(env: RuntimeEnv, slug: string): Promise<boolean> {
  const db = env?.DB;
  if (!db) return false;
  await ensureDbReady(db);
  const res = await db.prepare('DELETE FROM posts WHERE slug = ?').bind(slug.trim()).run();
  return (res.meta?.changes ?? 0) > 0;
}

export async function renameCategory(env: RuntimeEnv, oldName: string, newName: string): Promise<number> {
  const db = env?.DB;
  if (!db) return 0;
  await ensureDbReady(db);
  const res = await db.prepare('UPDATE posts SET category = ? WHERE category = ?').bind(newName, oldName).run();
  return res.meta?.changes ?? 0;
}

export async function renameTag(env: RuntimeEnv, oldName: string, newName: string): Promise<number> {
  const posts = await getAllPosts(env, true);
  let count = 0;
  for (const post of posts) {
    if (post.tags.includes(oldName)) {
      const nextTags = Array.from(new Set(post.tags.map((t) => (t === oldName ? newName : t))));
      await savePost(env, { ...post, originalSlug: post.slug, tags: nextTags });
      count++;
    }
  }
  return count;
}
