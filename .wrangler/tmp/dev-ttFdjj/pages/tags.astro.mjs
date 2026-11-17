globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_D9ASRNIz.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CozmwCZC.mjs';
import { a as getAllPosts } from '../chunks/posts_eqsJ4eKJ.mjs';
import { g as getSiteSettings } from '../chunks/site_BdBnYs6r.mjs';
import { $ as $$FolderOpen, a as $$Calendar } from '../chunks/FolderOpen_C62PT6Me.mjs';
import { $ as $$ArrowRight } from '../chunks/ArrowRight_CErlB4Yx.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://__site_origin__");
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const env = Astro2.locals.runtime?.env;
  const siteSettings = await getSiteSettings(env);
  const posts = await getAllPosts(env, false);
  const tagCounts = /* @__PURE__ */ new Map();
  for (const post of posts) {
    for (const tag of post.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    }
  }
  const tags = Array.from(tagCounts.entries()).sort((a, b) => b[1] - a[1]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `\u6807\u7B7E\u4E91 | ${siteSettings.title}`, "description": "\u6309\u6807\u7B7E\u6D4F\u89C8\u6240\u6709\u6587\u7AE0" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="glass-panel guides-header"> <h1 class="guides-h1">\u6587\u7AE0\u6807\u7B7E</h1> <p class="guides-lede">\u6309\u6807\u7B7E\u6D4F\u89C8\u6587\u7AE0\u3002</p> <p class="guides-count">\u5171 ', " \u4E2A\u6807\u7B7E \xB7 ", ' \u7BC7\u6587\u7AE0</p> </section> <div class="guides-tabs" role="tablist" aria-label="\u6807\u7B7E\u7B5B\u9009"> <button type="button" class="guides-tab active" data-tag="all">\n\u5168\u90E8 <span class="guides-tab-count">', "</span> </button> ", ' </div> <ul class="guides-list" id="tag-post-list"> ', " </ul> <script>\n    (function () {\n      var tabs = document.querySelectorAll('.guides-tab');\n      var cards = document.querySelectorAll('#tag-post-list .post-card');\n      tabs.forEach(function (tab) {\n        tab.addEventListener('click', function () {\n          var selected = tab.getAttribute('data-tag');\n          tabs.forEach(function (t) { t.classList.remove('active'); });\n          tab.classList.add('active');\n          cards.forEach(function (card) {\n            var tags = [];\n            try { tags = JSON.parse(card.getAttribute('data-tags') || '[]'); } catch (e) {}\n            card.style.display = (selected === 'all' || tags.indexOf(selected) !== -1) ? '' : 'none';\n          });\n        });\n      });\n    })();\n  <\/script> "])), maybeRenderHead(), tags.length, posts.length, posts.length, tags.map(([tag, count]) => renderTemplate`<button type="button" class="guides-tab"${addAttribute(tag, "data-tag")}>
#${tag} <span class="guides-tab-count">${count}</span> </button>`), posts.map((post) => renderTemplate`<li class="glass-panel post-card"${addAttribute(JSON.stringify(post.tags), "data-tags")}> <a${addAttribute(`/posts/${post.slug}/`, "href")} class="post-card-link"> <div class="post-card-meta"> <span class="post-category-badge"> ${renderComponent($$result2, "FolderOpen", $$FolderOpen, { "size": 12, "style": "display:inline;vertical-align:-2px;margin-right:4px;" })} ${post.category} </span> <span> ${renderComponent($$result2, "Calendar", $$Calendar, { "size": 12, "style": "display:inline;vertical-align:-2px;margin-right:4px;" })} ${post.pubDate} </span> </div> <h2 class="post-card-title">${post.title}</h2> <p class="post-card-desc">${post.description}</p> <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;"> <div class="post-tags"> ${post.tags.map((tag) => renderTemplate`<span class="post-tag">#${tag}</span>`)} </div> <span style="font-size:0.8rem;font-weight:700;color:var(--neon-cyan);display:inline-flex;align-items:center;gap:4px;">
阅读全文 ${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "size": 14 })} </span> </div> </a> </li>`)) })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/src/pages/tags.astro", void 0);

const $$file = "E:/工作目录3/soft-blog/src/pages/tags.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tags,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
