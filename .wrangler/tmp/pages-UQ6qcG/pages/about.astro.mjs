globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_D9ASRNIz.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CozmwCZC.mjs';
import { g as getSiteSettings } from '../chunks/site_BdBnYs6r.mjs';
import { r as renderMarkdown } from '../chunks/markdown_HJiFQJYD.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://__site_origin__");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const env = Astro2.locals.runtime?.env;
  const siteSettings = await getSiteSettings(env);
  const { html } = renderMarkdown(siteSettings.aboutContent || "");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `\u5173\u4E8E | ${siteSettings.title}`, "description": `\u5173\u4E8E ${siteSettings.title}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="glass-panel article-panel"> <header class="article-header"> <h1 class="article-title">关于 ${siteSettings.title}</h1> <p class="guides-lede">${siteSettings.subtitle}</p> </header> <div class="prose">${unescapeHTML(html)}</div> </article> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/src/pages/about.astro", void 0);

const $$file = "E:/工作目录3/soft-blog/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
