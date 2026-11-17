globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, m as maybeRenderHead, r as renderTemplate, e as createAstro } from './astro/server_D9ASRNIz.mjs';
import { $ as $$ } from './Sparkles_CzhTbA5n.mjs';

const $$Astro = createAstro("https://__site_origin__");
const $$Save = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Save;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "save", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path> <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path> <path d="M7 3v4a1 1 0 0 0 1 1h7"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/Save.astro", void 0);

export { $$Save as $ };
