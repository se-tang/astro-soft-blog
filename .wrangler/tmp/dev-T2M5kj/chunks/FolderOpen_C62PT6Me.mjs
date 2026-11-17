globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, m as maybeRenderHead, r as renderTemplate, e as createAstro } from './astro/server_D9ASRNIz.mjs';
import { $ as $$ } from './Sparkles_CzhTbA5n.mjs';

const $$Astro$1 = createAstro("https://__site_origin__");
const $$Calendar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Calendar;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "calendar", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M8 2v4"></path> <path d="M16 2v4"></path> <rect width="18" height="18" x="3" y="4" rx="2"></rect> <path d="M3 10h18"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/Calendar.astro", void 0);

const $$Astro = createAstro("https://__site_origin__");
const $$FolderOpen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FolderOpen;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "folder-open", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/FolderOpen.astro", void 0);

export { $$FolderOpen as $, $$Calendar as a };
