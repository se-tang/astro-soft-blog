globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, m as maybeRenderHead, r as renderTemplate, e as createAstro, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_D9ASRNIz.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CozmwCZC.mjs';
import { g as getPostBySlug, a as getAllPosts } from '../../chunks/posts_eqsJ4eKJ.mjs';
import { g as getSiteSettings } from '../../chunks/site_BdBnYs6r.mjs';
import { $ as $$$1 } from '../../chunks/Sparkles_CzhTbA5n.mjs';
import { $ as $$ArrowLeft } from '../../chunks/ArrowLeft_tyzblxvZ.mjs';
import { a as $$Calendar, $ as $$FolderOpen } from '../../chunks/FolderOpen_C62PT6Me.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro("https://__site_origin__");
const $$ArrowUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ArrowUp;
  return renderTemplate`${renderComponent($$result, "Layout", $$$1, { "iconName": "arrow-up", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m5 12 7-7 7 7"></path> <path d="M12 19V5"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/ArrowUp.astro", void 0);

const $$Astro$2 = createAstro("https://__site_origin__");
const $$BookOpen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BookOpen;
  return renderTemplate`${renderComponent($$result, "Layout", $$$1, { "iconName": "book-open", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 7v14"></path> <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/BookOpen.astro", void 0);

const $$Astro$1 = createAstro("https://__site_origin__");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$List;
  return renderTemplate`${renderComponent($$result, "Layout", $$$1, { "iconName": "list", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M3 12h.01"></path> <path d="M3 18h.01"></path> <path d="M3 6h.01"></path> <path d="M8 12h13"></path> <path d="M8 18h13"></path> <path d="M8 6h13"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/List.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://__site_origin__");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const env = Astro2.locals.runtime?.env;
  const rawSlug = (Astro2.params.slug || "").replace(/\/+$/, "");
  const post = await getPostBySlug(env, rawSlug, false);
  if (!post) {
    return Astro2.redirect("/");
  }
  const siteSettings = await getSiteSettings(env);
  const allPosts = await getAllPosts(env, false);
  const tocHeadings = post.headings.filter((h) => h.depth >= 2 && h.depth <= 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${post.title} | ${siteSettings.title}`, "description": post.description, "wide": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<nav class="breadcrumbs" aria-label="\u9762\u5305\u5C51\u5BFC\u822A"> <a href="/" class="bc-link">\u9996\u9875</a> <span class="bc-sep">/</span> <span class="bc-current">', '</span> </nav> <div class="doc-shell"> <!-- \u5DE6\u4FA7\uFF1A\u6587\u7AE0\u6C47\u89C8 --> <aside class="glass-panel doc-sidebar" aria-label="\u6587\u7AE0\u6C47\u89C8"> <div class="sidebar-header"> <span class="sidebar-title"> ', '\n\u6587\u7AE0\u6C47\u89C8\n</span> <span class="sidebar-count">', '</span> </div> <nav class="sidebar-nav"> ', ' </nav> </aside> <!-- \u4E2D\u95F4\uFF1A\u6587\u7AE0\u6B63\u6587 --> <div class="doc-main"> <article class="glass-panel article-panel"> <header class="article-header"> <div class="post-card-meta" style="margin-bottom: 12px;"> <span class="post-category-badge"> ', " ", " </span> <span> ", "\n\u53D1\u5E03\u4E8E ", ' </span> </div> <h1 class="article-title">', '</h1> <p class="guides-lede" style="margin-top: 12px;">', "</p> ", ' </header> <div class="prose" id="article-prose">', '</div> </article> <div style="margin-top: 20px;"> <a href="/" class="nav-link" style="display:inline-flex;align-items:center;gap:6px;"> ', ' \u8FD4\u56DE\u6587\u7AE0\u5217\u8868\n</a> </div> </div> <!-- \u53F3\u4FA7\uFF1A\u672C\u7BC7\u76EE\u5F55 --> <aside class="glass-panel doc-toc-sidebar" aria-label="\u672C\u7BC7\u76EE\u5F55"> <div class="toc-title"> ', "\n\u672C\u7BC7\u76EE\u5F55\n</div> ", ' <div class="toc-actions"> <button type="button" id="back-to-top" class="toc-action-btn"> ', " \u56DE\u5230\u9876\u90E8\n</button> </div> </aside> </div> <script>\n    (function () {\n      var backBtn = document.getElementById('back-to-top');\n      if (backBtn) {\n        backBtn.addEventListener('click', function () {\n          window.scrollTo({ top: 0, behavior: 'smooth' });\n        });\n      }\n\n      var tocLinks = Array.from(document.querySelectorAll('#toc-list .toc-item'));\n      var tocSidebar = document.querySelector('.doc-toc-sidebar');\n      var prose = document.getElementById('article-prose');\n      if (!tocLinks.length || !prose) return;\n\n      var headings = Array.from(prose.querySelectorAll('h2[id], h3[id], h4[id]'));\n      if (!headings.length) return;\n\n      var currentId = '';\n      function setActive(id) {\n        if (!id || id === currentId) return;\n        currentId = id;\n        var activeEl = null;\n        tocLinks.forEach(function (link) {\n          var matched = link.getAttribute('data-toc-id') === id;\n          link.classList.toggle('active', matched);\n          if (matched) activeEl = link;\n        });\n        if (activeEl && tocSidebar) {\n          var sRect = tocSidebar.getBoundingClientRect();\n          var aRect = activeEl.getBoundingClientRect();\n          if (aRect.top < sRect.top + 40 || aRect.bottom > sRect.bottom - 40) {\n            tocSidebar.scrollTo({\n              top: tocSidebar.scrollTop + (aRect.top - sRect.top) - sRect.height / 2 + aRect.height / 2,\n              behavior: 'smooth',\n            });\n          }\n        }\n      }\n\n      function updateActiveByScroll() {\n        var nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40;\n        if (nearBottom) {\n          setActive(headings[headings.length - 1].id);\n          return;\n        }\n        var active = headings[0].id;\n        for (var i = 0; i < headings.length; i++) {\n          if (headings[i].getBoundingClientRect().top <= 110) {\n            active = headings[i].id;\n          } else {\n            break;\n          }\n        }\n        setActive(active);\n      }\n\n      var ticking = false;\n      window.addEventListener('scroll', function () {\n        if (!ticking) {\n          ticking = true;\n          requestAnimationFrame(function () {\n            updateActiveByScroll();\n            ticking = false;\n          });\n        }\n      }, { passive: true });\n\n      updateActiveByScroll();\n    })();\n  <\/script> "])), maybeRenderHead(), post.title, renderComponent($$result2, "BookOpen", $$BookOpen, { "size": 15, "style": "color: var(--neon-cyan);" }), allPosts.length, allPosts.map((item) => renderTemplate`<a${addAttribute(`/posts/${item.slug}/`, "href")}${addAttribute(["doc-nav-item", { active: item.slug === post.slug }], "class:list")}${addAttribute(item.title, "title")}> <span class="dni-dot" aria-hidden="true"></span> <span class="dni-title">${item.title}</span> </a>`), renderComponent($$result2, "FolderOpen", $$FolderOpen, { "size": 12, "style": "display:inline;vertical-align:-2px;margin-right:4px;" }), post.category, renderComponent($$result2, "Calendar", $$Calendar, { "size": 12, "style": "display:inline;vertical-align:-2px;margin-right:4px;" }), post.pubDate, post.title, post.description, post.tags.length > 0 && renderTemplate`<div class="post-tags" style="margin-top: 14px;"> ${post.tags.map((tag) => renderTemplate`<span class="post-tag">#${tag}</span>`)} </div>`, unescapeHTML(post.html), renderComponent($$result2, "ArrowLeft", $$ArrowLeft, { "size": 15 }), renderComponent($$result2, "List", $$List, { "size": 15, "style": "color: var(--neon-cyan);" }), tocHeadings.length > 0 ? renderTemplate`<nav class="toc-list" id="toc-list"> ${tocHeadings.map((h) => renderTemplate`<a${addAttribute(`#${h.slug}`, "href")}${addAttribute(["toc-item", `toc-h${h.depth}`], "class:list")}${addAttribute(h.slug, "data-toc-id")}> ${h.text} </a>`)} </nav>` : renderTemplate`<div class="toc-empty">本篇暂无小节目录</div>`, renderComponent($$result2, "ArrowUp", $$ArrowUp, { "size": 13 })) })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/src/pages/posts/[...slug].astro", void 0);

const $$file = "E:/工作目录3/soft-blog/src/pages/posts/[...slug].astro";
const $$url = "/posts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
