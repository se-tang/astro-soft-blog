globalThis.process ??= {}; globalThis.process.env ??= {};
import { i as isAuthenticated } from '../../../chunks/auth_BzGuxISz.mjs';
import { d as deletePost, a as getAllPosts, s as savePost } from '../../../chunks/posts_eqsJ4eKJ.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ cookies, locals }) => {
  const env = locals.runtime?.env;
  if (!await isAuthenticated(cookies, env)) {
    return new Response(JSON.stringify({ error: "未登录" }), { status: 401 });
  }
  const posts = await getAllPosts(env, true);
  return new Response(JSON.stringify(posts), {
    headers: { "content-type": "application/json" }
  });
};
const POST = async ({ request, cookies, locals }) => {
  const env = locals.runtime?.env;
  if (!await isAuthenticated(cookies, env)) {
    return new Response(JSON.stringify({ error: "未登录" }), { status: 401 });
  }
  try {
    const body = await request.json();
    const tags = Array.isArray(body.tags) ? body.tags.map((t) => String(t).trim()).filter(Boolean) : typeof body.tags === "string" ? body.tags.split(/[,，]/).map((t) => t.trim()).filter(Boolean) : [];
    const saved = await savePost(env, {
      slug: String(body.slug || body.title || `post-${Date.now()}`),
      originalSlug: body.originalSlug ? String(body.originalSlug) : void 0,
      title: String(body.title || "未命名文章"),
      description: String(body.description || ""),
      pubDate: String(body.pubDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)),
      category: String(body.category || "随笔"),
      tags,
      draft: Boolean(body.draft),
      content: String(body.content || "")
    });
    return new Response(JSON.stringify({ ok: true, post: saved }), {
      headers: { "content-type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "保存失败" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }
};
const DELETE = async ({ request, cookies, locals }) => {
  const env = locals.runtime?.env;
  if (!await isAuthenticated(cookies, env)) {
    return new Response(JSON.stringify({ error: "未登录" }), { status: 401 });
  }
  try {
    const body = await request.json();
    const ok = await deletePost(env, String(body.slug || ""));
    return new Response(JSON.stringify({ ok }), {
      status: ok ? 200 : 404,
      headers: { "content-type": "application/json" }
    });
  } catch {
    return new Response(JSON.stringify({ error: "删除失败" }), { status: 400 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
