globalThis.process ??= {}; globalThis.process.env ??= {};
import { i as isAuthenticated } from '../../../chunks/auth_BzGuxISz.mjs';
import { r as renderMarkdown } from '../../../chunks/markdown_HJiFQJYD.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, locals }) => {
  const env = locals.runtime?.env;
  if (!await isAuthenticated(cookies, env)) {
    return new Response(JSON.stringify({ error: "未登录" }), { status: 401 });
  }
  try {
    const body = await request.json();
    const { html } = renderMarkdown(String(body.content || ""));
    return new Response(JSON.stringify({ html }), {
      headers: { "content-type": "application/json" }
    });
  } catch {
    return new Response(JSON.stringify({ html: "" }), {
      headers: { "content-type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
