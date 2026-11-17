globalThis.process ??= {}; globalThis.process.env ??= {};
import { S as SESSION_COOKIE } from '../../../chunks/auth_BzGuxISz.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ cookies }) => {
  cookies.delete(SESSION_COOKIE, { path: "/" });
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "content-type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
