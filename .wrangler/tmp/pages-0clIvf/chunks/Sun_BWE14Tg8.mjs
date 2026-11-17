globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, e as createAstro, m as maybeRenderHead } from './astro/server_D9ASRNIz.mjs';
import { $ as $$ } from './Sparkles_CzhTbA5n.mjs';

const $$Astro$2 = createAstro("https://__site_origin__");
const $$Moon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "moon", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/Moon.astro", void 0);

const $$Astro$1 = createAstro("https://__site_origin__");
const $$Settings = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Settings;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "settings", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path> <circle cx="12" cy="12" r="3"></circle> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/Settings.astro", void 0);

const $$Astro = createAstro("https://__site_origin__");
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "sun", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="4"></circle> <path d="M12 2v2"></path> <path d="M12 20v2"></path> <path d="m4.93 4.93 1.41 1.41"></path> <path d="m17.66 17.66 1.41 1.41"></path> <path d="M2 12h2"></path> <path d="M20 12h2"></path> <path d="m6.34 17.66-1.41 1.41"></path> <path d="m19.07 4.93-1.41 1.41"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/Sun.astro", void 0);

export { $$Moon as $, $$Sun as a, $$Settings as b };
