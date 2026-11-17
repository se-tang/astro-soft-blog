globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, m as maybeRenderHead, r as renderTemplate, e as createAstro, h as addAttribute } from '../chunks/astro/server_D9ASRNIz.mjs';
import { $ as $$AdminLayout, a as $$ExternalLink, b as $$PenSquare } from '../chunks/AdminLayout_CaTQvD5H.mjs';
import { i as isAuthenticated } from '../chunks/auth_BzGuxISz.mjs';
import { a as getAllPosts } from '../chunks/posts_eqsJ4eKJ.mjs';
import { $ as $$ } from '../chunks/Sparkles_CzhTbA5n.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://__site_origin__");
const $$Edit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Edit;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "square-pen", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path> <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/Edit.astro", void 0);

const $$Astro$1 = createAstro("https://__site_origin__");
const $$Trash2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Trash2;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "trash-2", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M3 6h18"></path> <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path> <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path> <line x1="10" x2="10" y1="11" y2="17"></line> <line x1="14" x2="14" y1="11" y2="17"></line> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/Trash2.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://__site_origin__");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const env = Astro2.locals.runtime?.env;
  if (!await isAuthenticated(Astro2.cookies, env)) {
    return Astro2.redirect("/admin/login/");
  }
  const posts = await getAllPosts(env, true);
  const publishedCount = posts.filter((p) => !p.draft).length;
  const draftCount = posts.filter((p) => p.draft).length;
  const categoriesCount = new Set(posts.map((p) => p.category)).size;
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "\u6587\u7AE0\u7BA1\u7406", "activeNav": "posts" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="admin-topbar"> <h1 class="admin-page-title">\u6587\u7AE0\u7BA1\u7406</h1> <a href="/admin/editor/" class="admin-btn admin-btn-primary"> ', ' \u5199\u65B0\u6587\u7AE0\n</a> </div> <div class="admin-stats-grid"> <div class="glass-panel admin-stat-card"> <div class="admin-stat-label">\u5168\u90E8\u6587\u7AE0</div> <div class="admin-stat-value">', '</div> </div> <div class="glass-panel admin-stat-card"> <div class="admin-stat-label">\u5DF2\u53D1\u5E03</div> <div class="admin-stat-value" style="color:var(--neon-green);">', '</div> </div> <div class="glass-panel admin-stat-card"> <div class="admin-stat-label">\u8349\u7A3F\u7BB1</div> <div class="admin-stat-value">', '</div> </div> <div class="glass-panel admin-stat-card"> <div class="admin-stat-label">\u6587\u7AE0\u5206\u7C7B</div> <div class="admin-stat-value" style="color:var(--neon-purple);">', '</div> </div> </div> <div class="glass-panel admin-toolbar"> <div style="display:flex;gap:8px;flex-wrap:wrap;"> <button type="button" class="guides-tab active" data-filter="all">\u5168\u90E8 (', ')</button> <button type="button" class="guides-tab" data-filter="published">\u5DF2\u53D1\u5E03 (', ')</button> <button type="button" class="guides-tab" data-filter="draft">\u8349\u7A3F (', ')</button> </div> <input type="text" id="admin-search" class="admin-input" placeholder="\u7B5B\u9009\u6587\u7AE0\u6807\u9898\u6216\u5206\u7C7B..." style="max-width:260px;"> </div> <div class="glass-panel admin-table-wrap"> <table class="admin-table" id="posts-table"> <thead> <tr> <th>\u6807\u9898</th> <th>\u5206\u7C7B</th> <th>\u6807\u7B7E</th> <th>\u53D1\u5E03\u65E5\u671F</th> <th>\u72B6\u6001</th> <th style="text-align:right;">\u64CD\u4F5C</th> </tr> </thead> <tbody> ', " </tbody> </table> </div> <script>\n    (function () {\n      var filterBtns = document.querySelectorAll('[data-filter]');\n      var searchInput = document.getElementById('admin-search');\n      var rows = document.querySelectorAll('#posts-table tbody tr');\n      var activeFilter = 'all';\n\n      function applyFilter() {\n        var q = (searchInput ? searchInput.value : '').trim().toLowerCase();\n        rows.forEach(function (row) {\n          var status = row.getAttribute('data-status');\n          var text = row.getAttribute('data-search') || '';\n          var okStatus = activeFilter === 'all' || status === activeFilter;\n          var okQuery = !q || text.indexOf(q) !== -1;\n          row.style.display = okStatus && okQuery ? '' : 'none';\n        });\n      }\n\n      filterBtns.forEach(function (btn) {\n        btn.addEventListener('click', function () {\n          activeFilter = btn.getAttribute('data-filter');\n          filterBtns.forEach(function (b) { b.classList.remove('active'); });\n          btn.classList.add('active');\n          applyFilter();\n        });\n      });\n\n      if (searchInput) {\n        searchInput.addEventListener('input', applyFilter);\n      }\n\n      document.querySelectorAll('.delete-post-btn').forEach(function (btn) {\n        btn.addEventListener('click', function () {\n          var slug = btn.getAttribute('data-slug');\n          var title = btn.getAttribute('data-title');\n          if (!confirm('\u786E\u5B9A\u8981\u5220\u9664\u6587\u7AE0\u300C' + title + '\u300D\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002')) return;\n          fetch('/api/admin/posts', {\n            method: 'DELETE',\n            headers: { 'content-type': 'application/json' },\n            body: JSON.stringify({ slug: slug }),\n          }).then(function (r) {\n            if (r.ok) window.location.reload();\n            else alert('\u5220\u9664\u5931\u8D25');\n          });\n        });\n      });\n    })();\n  <\/script> "])), maybeRenderHead(), renderComponent($$result2, "PenSquare", $$PenSquare, { "size": 15 }), posts.length, publishedCount, draftCount, categoriesCount, posts.length, publishedCount, draftCount, posts.map((post) => renderTemplate`<tr${addAttribute(post.draft ? "draft" : "published", "data-status")}${addAttribute(`${post.title} ${post.category} ${post.tags.join(" ")}`.toLowerCase(), "data-search")}> <td> <a${addAttribute(`/admin/editor/?slug=${encodeURIComponent(post.slug)}`, "href")} style="font-weight:700;color:var(--text-primary);text-decoration:none;"> ${post.title} </a> <div style="font-family:var(--font-mono);font-size:0.72rem;color:var(--text-secondary);">
/posts/${post.slug}/
</div> </td> <td> <span class="post-category-badge">${post.category}</span> </td> <td> <div class="post-tags"> ${post.tags.map((tag) => renderTemplate`<span class="post-tag">#${tag}</span>`)} </div> </td> <td style="font-family:var(--font-mono);font-size:0.82rem;color:var(--text-secondary);"> ${post.pubDate} </td> <td> <span${addAttribute(["status-badge", post.draft ? "status-draft" : "status-published"], "class:list")}> ${post.draft ? "\u8349\u7A3F" : "\u5DF2\u53D1\u5E03"} </span> </td> <td style="text-align:right;white-space:nowrap;"> <div style="display:inline-flex;gap:6px;"> <a${addAttribute(`/admin/editor/?slug=${encodeURIComponent(post.slug)}`, "href")} class="admin-btn" style="height:30px;padding:0 10px;font-size:0.78rem;"> ${renderComponent($$result2, "Edit", $$Edit, { "size": 13 })} 编辑
</a> ${!post.draft && renderTemplate`<a${addAttribute(`/posts/${post.slug}/`, "href")} target="_blank" class="admin-btn" style="height:30px;padding:0 10px;font-size:0.78rem;" title="前台查看"> ${renderComponent($$result2, "ExternalLink", $$ExternalLink, { "size": 13 })} </a>`} <button type="button" class="admin-btn admin-btn-danger delete-post-btn"${addAttribute(post.slug, "data-slug")}${addAttribute(post.title, "data-title")} style="height:30px;padding:0 10px;font-size:0.78rem;"> ${renderComponent($$result2, "Trash2", $$Trash2, { "size": 13 })} </button> </div> </td> </tr>`)) })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/src/pages/admin/index.astro", void 0);

const $$file = "E:/工作目录3/soft-blog/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
