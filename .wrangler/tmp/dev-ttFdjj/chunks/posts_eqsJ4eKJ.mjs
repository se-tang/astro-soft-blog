globalThis.process ??= {}; globalThis.process.env ??= {};
import { S as SEED_POSTS, e as ensureDbReady } from './db_BwyXkORt.mjs';
import { r as renderMarkdown } from './markdown_HJiFQJYD.mjs';

function rowToPost(row) {
  let tags = [];
  try {
    const parsed = JSON.parse(row.tags);
    if (Array.isArray(parsed)) tags = parsed.map((t) => String(t).trim()).filter(Boolean);
  } catch {
    tags = [];
  }
  const { html, headings } = renderMarkdown(row.content || "");
  return {
    slug: row.slug,
    title: row.title,
    description: row.description || "",
    pubDate: row.pub_date,
    category: row.category || "随笔",
    tags,
    draft: Boolean(row.draft),
    content: row.content || "",
    html,
    headings
  };
}
function sanitizeSlug(raw) {
  return raw.trim().toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5_-]+/g, "-").replace(/^-+|-+$/g, "") || `post-${Date.now()}`;
}
async function getAllPosts(env, includeDrafts = false) {
  const db = env?.DB;
  if (!db) {
    return SEED_POSTS.filter((p) => includeDrafts || !p.draft).map((p) => {
      const { html, headings } = renderMarkdown(p.content);
      return { ...p, html, headings };
    });
  }
  await ensureDbReady(db);
  const sql = includeDrafts ? "SELECT slug, title, description, pub_date, category, tags, draft, content FROM posts ORDER BY pub_date DESC, updated_at DESC" : "SELECT slug, title, description, pub_date, category, tags, draft, content FROM posts WHERE draft = 0 ORDER BY pub_date DESC, updated_at DESC";
  const { results } = await db.prepare(sql).all();
  return (results || []).map(rowToPost);
}
async function getPostBySlug(env, slug, includeDrafts = false) {
  const cleanSlug = slug.trim();
  const db = env?.DB;
  if (!db) {
    const found = SEED_POSTS.find((p) => p.slug === cleanSlug && (includeDrafts || !p.draft));
    if (!found) return null;
    const { html, headings } = renderMarkdown(found.content);
    return { ...found, html, headings };
  }
  await ensureDbReady(db);
  const sql = includeDrafts ? "SELECT slug, title, description, pub_date, category, tags, draft, content FROM posts WHERE slug = ?" : "SELECT slug, title, description, pub_date, category, tags, draft, content FROM posts WHERE slug = ? AND draft = 0";
  const row = await db.prepare(sql).bind(cleanSlug).first();
  return row ? rowToPost(row) : null;
}
async function savePost(env, input) {
  const db = env?.DB;
  if (!db) {
    throw new Error("未检测到 D1 数据库绑定 (DB)，请先在 Cloudflare Pages 绑定 D1 数据库。");
  }
  await ensureDbReady(db);
  const targetSlug = sanitizeSlug(input.slug);
  const now = Date.now();
  const stmts = [
    db.prepare(
      `INSERT OR REPLACE INTO posts (slug, title, description, pub_date, category, tags, draft, content, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      targetSlug,
      input.title.trim() || "未命名文章",
      input.description.trim(),
      input.pubDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      input.category.trim() || "随笔",
      JSON.stringify(input.tags.filter(Boolean)),
      input.draft ? 1 : 0,
      input.content || "",
      now
    )
  ];
  if (input.originalSlug && input.originalSlug !== targetSlug) {
    stmts.push(db.prepare("DELETE FROM posts WHERE slug = ?").bind(input.originalSlug));
  }
  await db.batch(stmts);
  return await getPostBySlug(env, targetSlug, true);
}
async function deletePost(env, slug) {
  const db = env?.DB;
  if (!db) return false;
  await ensureDbReady(db);
  const res = await db.prepare("DELETE FROM posts WHERE slug = ?").bind(slug.trim()).run();
  return (res.meta?.changes ?? 0) > 0;
}
async function renameCategory(env, oldName, newName) {
  const db = env?.DB;
  if (!db) return 0;
  await ensureDbReady(db);
  const res = await db.prepare("UPDATE posts SET category = ? WHERE category = ?").bind(newName, oldName).run();
  return res.meta?.changes ?? 0;
}
async function renameTag(env, oldName, newName) {
  const posts = await getAllPosts(env, true);
  let count = 0;
  for (const post of posts) {
    if (post.tags.includes(oldName)) {
      const nextTags = Array.from(new Set(post.tags.map((t) => t === oldName ? newName : t)));
      await savePost(env, { ...post, originalSlug: post.slug, tags: nextTags });
      count++;
    }
  }
  return count;
}

export { getAllPosts as a, renameTag as b, deletePost as d, getPostBySlug as g, renameCategory as r, savePost as s };
