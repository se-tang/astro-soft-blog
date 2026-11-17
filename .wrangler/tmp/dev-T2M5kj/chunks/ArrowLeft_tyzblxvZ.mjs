globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, m as maybeRenderHead, r as renderTemplate, e as createAstro } from './astro/server_D9ASRNIz.mjs';
import { $ as $$ } from './Sparkles_CzhTbA5n.mjs';

const $$Astro = createAstro("https://__site_origin__");
const $$ArrowLeft = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArrowLeft;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "arrow-left", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m12 19-7-7 7-7"></path> <path d="M19 12H5"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/ArrowLeft.astro", void 0);

export { $$ArrowLeft as $ };
