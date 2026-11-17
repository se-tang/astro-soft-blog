globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_D9ASRNIz.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CozmwCZC.mjs';
import { a as getAllPosts } from '../../chunks/posts_eqsJ4eKJ.mjs';
import { g as getSiteSettings } from '../../chunks/site_BdBnYs6r.mjs';
import { $ as $$FolderOpen, a as $$Calendar } from '../../chunks/FolderOpen_C62PT6Me.mjs';
import { $ as $$ArrowRight } from '../../chunks/ArrowRight_CErlB4Yx.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://__site_origin__");
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const env = Astro2.locals.runtime?.env;
  const category = decodeURIComponent((Astro2.params.category || "").replace(/\/+$/, ""));
  const siteSettings = await getSiteSettings(env);
  const posts = (await getAllPosts(env, false)).filter((p) => p.category === category);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${category} | \u5206\u7C7B | ${siteSettings.title}`, "description": `\u300C${category}\u300D\u5206\u7C7B\u4E0B\u7684\u6240\u6709\u6587\u7AE0` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="breadcrumbs" aria-label="面包屑导航"> <a href="/" class="bc-link">首页</a> <span class="bc-sep">/</span> <span class="bc-current">分类：${category}</span> </nav> <section class="glass-panel guides-header"> <h1 class="guides-h1">${category}</h1> <p class="guides-lede">「${category}」分类下的所有文章。</p> <p class="guides-count">共 ${posts.length} 篇文章</p> </section> <ul class="guides-list"> ${posts.map((post) => renderTemplate`<li class="glass-panel post-card"> <a${addAttribute(`/posts/${post.slug}/`, "href")} class="post-card-link"> <div class="post-card-meta"> <span class="post-category-badge"> ${renderComponent($$result2, "FolderOpen", $$FolderOpen, { "size": 12, "style": "display:inline;vertical-align:-2px;margin-right:4px;" })} ${post.category} </span> <span> ${renderComponent($$result2, "Calendar", $$Calendar, { "size": 12, "style": "display:inline;vertical-align:-2px;margin-right:4px;" })} ${post.pubDate} </span> </div> <h2 class="post-card-title">${post.title}</h2> <p class="post-card-desc">${post.description}</p> <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;"> <div class="post-tags"> ${post.tags.map((tag) => renderTemplate`<span class="post-tag">#${tag}</span>`)} </div> <span style="font-size:0.8rem;font-weight:700;color:var(--neon-cyan);display:inline-flex;align-items:center;gap:4px;">
阅读全文 ${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "size": 14 })} </span> </div> </a> </li>`)} </ul> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/src/pages/category/[category].astro", void 0);

const $$file = "E:/工作目录3/soft-blog/src/pages/category/[category].astro";
const $$url = "/category/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
