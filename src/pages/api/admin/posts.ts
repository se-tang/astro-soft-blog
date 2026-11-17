import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../../lib/auth';
import { deletePost, getAllPosts, savePost } from '../../../lib/posts';

export const GET: APIRoute = async ({ cookies }) => {
  if (!isAuthenticated(cookies)) {
    return new Response(JSON.stringify({ error: '未登录' }), { status: 401 });
  }
  const posts = getAllPosts(true);
  return new Response(JSON.stringify(posts), {
    headers: { 'content-type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isAuthenticated(cookies)) {
    return new Response(JSON.stringify({ error: '未登录' }), { status: 401 });
  }
  try {
    const body = await request.json();
    const tags = Array.isArray(body.tags)
      ? body.tags.map((t: unknown) => String(t).trim()).filter(Boolean)
      : typeof body.tags === 'string'
        ? body.tags.split(/[,，]/).map((t: string) => t.trim()).filter(Boolean)
        : [];

    const saved = savePost({
      slug: String(body.slug || body.title || `post-${Date.now()}`),
      originalSlug: body.originalSlug ? String(body.originalSlug) : undefined,
      title: String(body.title || '未命名文章'),
      description: String(body.description || ''),
      pubDate: String(body.pubDate || new Date().toISOString().slice(0, 10)),
      category: String(body.category || '随笔'),
      tags,
      draft: Boolean(body.draft),
      content: String(body.content || ''),
    });

    return new Response(JSON.stringify({ ok: true, post: saved }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: '保存失败' }), { status: 400 });
  }
};

export const DELETE: APIRoute = async ({ request, cookies }) => {
  if (!isAuthenticated(cookies)) {
    return new Response(JSON.stringify({ error: '未登录' }), { status: 401 });
  }
  try {
    const body = await request.json();
    const ok = deletePost(String(body.slug || ''));
    return new Response(JSON.stringify({ ok }), {
      status: ok ? 200 : 404,
      headers: { 'content-type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: '删除失败' }), { status: 400 });
  }
};
