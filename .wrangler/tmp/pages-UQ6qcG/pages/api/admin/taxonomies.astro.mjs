globalThis.process ??= {}; globalThis.process.env ??= {};
import { i as isAuthenticated } from '../../../chunks/auth_BzGuxISz.mjs';
import { r as renameCategory, b as renameTag } from '../../../chunks/posts_eqsJ4eKJ.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, locals }) => {
  const env = locals.runtime?.env;
  if (!await isAuthenticated(cookies, env)) {
    return new Response(JSON.stringify({ error: "未登录" }), { status: 401 });
  }
  try {
    const body = await request.json();
    const type = String(body.type || "");
    const oldName = String(body.oldName || "").trim();
    const newName = String(body.newName || "").trim();
    if (!oldName || !newName) {
      return new Response(JSON.stringify({ error: "名称不能为空" }), { status: 400 });
    }
    const updated = type === "category" ? await renameCategory(env, oldName, newName) : type === "tag" ? await renameTag(env, oldName, newName) : 0;
    return new Response(JSON.stringify({ ok: true, updated }), {
      headers: { "content-type": "application/json" }
    });
  } catch {
    return new Response(JSON.stringify({ error: "操作失败" }), { status: 400 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
