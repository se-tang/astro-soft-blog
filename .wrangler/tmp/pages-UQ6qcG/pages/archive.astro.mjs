globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_D9ASRNIz.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CozmwCZC.mjs';
import { a as getAllPosts } from '../chunks/posts_eqsJ4eKJ.mjs';
import { g as getSiteSettings } from '../chunks/site_BdBnYs6r.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://__site_origin__");
const $$Archive = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Archive;
  const env = Astro2.locals.runtime?.env;
  const siteSettings = await getSiteSettings(env);
  const posts = await getAllPosts(env, false);
  const byYear = /* @__PURE__ */ new Map();
  for (const post of posts) {
    const year = new Date(post.pubDate).getFullYear() || (/* @__PURE__ */ new Date()).getFullYear();
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year).push(post);
  }
  const years = Array.from(byYear.entries()).sort((a, b) => b[0] - a[0]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `\u6587\u7AE0\u5F52\u6863 | ${siteSettings.title}`, "description": "\u6309\u5E74\u4EFD\u6574\u7406\u7684\u6240\u6709\u6587\u7AE0\u5F52\u6863\u3002" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="glass-panel guides-header"> <h1 class="guides-h1">文章归档</h1> <p class="guides-lede">按时间线整理的所有文章，目前共 ${posts.length} 篇。</p> </section> ${years.map(([year, list]) => renderTemplate`<section class="glass-panel" style="padding: 24px 28px; margin-bottom: 18px;"> <h2 style="margin: 0 0 14px; font-family: var(--font-mono); font-size: 1.2rem; color: var(--neon-cyan);"> ${year} 年 (${list.length})
</h2> <ul style="list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px;"> ${list.map((post) => renderTemplate`<li style="display: flex; align-items: baseline; gap: 14px; flex-wrap: wrap;"> <span style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-secondary);"> ${post.pubDate} </span> <a${addAttribute(`/posts/${post.slug}/`, "href")} style="color: var(--text-primary); font-weight: 700; text-decoration: none;"> ${post.title} </a> <span class="post-category-badge" style="font-size: 0.72rem;">${post.category}</span> </li>`)} </ul> </section>`)}` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/src/pages/archive.astro", void 0);

const $$file = "E:/工作目录3/soft-blog/src/pages/archive.astro";
const $$url = "/archive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archive,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
