globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_D9ASRNIz.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_CaTQvD5H.mjs';
import { i as isAuthenticated } from '../../chunks/auth_BzGuxISz.mjs';
import { a as getAllPosts } from '../../chunks/posts_eqsJ4eKJ.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://__site_origin__");
const $$Taxonomies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Taxonomies;
  const env = Astro2.locals.runtime?.env;
  if (!await isAuthenticated(Astro2.cookies, env)) {
    return Astro2.redirect("/admin/login/");
  }
  const posts = await getAllPosts(env, true);
  const categoryMap = /* @__PURE__ */ new Map();
  const tagMap = /* @__PURE__ */ new Map();
  for (const p of posts) {
    categoryMap.set(p.category, (categoryMap.get(p.category) ?? 0) + 1);
    for (const t of p.tags) {
      tagMap.set(t, (tagMap.get(t) ?? 0) + 1);
    }
  }
  const categories = Array.from(categoryMap.entries()).sort((a, b) => b[1] - a[1]);
  const tags = Array.from(tagMap.entries()).sort((a, b) => b[1] - a[1]);
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "\u5206\u7C7B\u4E0E\u6807\u7B7E", "activeNav": "taxonomies" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="admin-topbar"> <h1 class="admin-page-title">\u5206\u7C7B\u4E0E\u6807\u7B7E\u7BA1\u7406</h1> </div> <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:18px;"> <section class="glass-panel" style="padding:22px;"> <h2 style="margin:0 0 14px;font-size:1.05rem;font-weight:800;">\u6587\u7AE0\u5206\u7C7B (', ')</h2> <div style="display:flex;flex-direction:column;gap:10px;"> ', ' </div> </section> <section class="glass-panel" style="padding:22px;"> <h2 style="margin:0 0 14px;font-size:1.05rem;font-weight:800;">\u6587\u7AE0\u6807\u7B7E (', ')</h2> <div style="display:flex;flex-direction:column;gap:10px;"> ', " </div> </section> </div> <script>\n    (function () {\n      document.querySelectorAll('.rename-btn').forEach(function (btn) {\n        btn.addEventListener('click', function () {\n          var type = btn.getAttribute('data-type');\n          var oldName = btn.getAttribute('data-name');\n          var label = type === 'category' ? '\u5206\u7C7B' : '\u6807\u7B7E';\n          var newName = prompt('\u8BF7\u8F93\u5165\u300C' + oldName + '\u300D\u7684\u65B0' + label + '\u540D\u79F0\uFF1A', oldName);\n          if (!newName || newName.trim() === '' || newName.trim() === oldName) return;\n\n          fetch('/api/admin/taxonomies', {\n            method: 'POST',\n            headers: { 'content-type': 'application/json' },\n            body: JSON.stringify({ type: type, oldName: oldName, newName: newName.trim() }),\n          })\n            .then(function (r) { return r.json(); })\n            .then(function (data) {\n              if (data.ok) window.location.reload();\n              else alert(data.error || '\u4FEE\u6539\u5931\u8D25');\n            });\n        });\n      });\n    })();\n  <\/script> "])), maybeRenderHead(), categories.length, categories.map(([name, count]) => renderTemplate`<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-radius:10px;border:1px solid var(--border-neon);"> <div> <span class="post-category-badge">${name}</span> <span style="margin-left:8px;font-family:var(--font-mono);font-size:0.78rem;color:var(--text-secondary);"> ${count} 篇文章
</span> </div> <button type="button" class="admin-btn rename-btn" data-type="category"${addAttribute(name, "data-name")} style="height:30px;padding:0 10px;font-size:0.76rem;">
重命名
</button> </div>`), tags.length, tags.map(([name, count]) => renderTemplate`<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-radius:10px;border:1px solid var(--border-neon);"> <div> <span class="post-tag">#${name}</span> <span style="margin-left:8px;font-family:var(--font-mono);font-size:0.78rem;color:var(--text-secondary);"> ${count} 篇文章
</span> </div> <button type="button" class="admin-btn rename-btn" data-type="tag"${addAttribute(name, "data-name")} style="height:30px;padding:0 10px;font-size:0.76rem;">
重命名
</button> </div>`)) })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/src/pages/admin/taxonomies.astro", void 0);

const $$file = "E:/工作目录3/soft-blog/src/pages/admin/taxonomies.astro";
const $$url = "/admin/taxonomies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Taxonomies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
