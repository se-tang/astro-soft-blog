globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, n as renderSlot, r as renderTemplate, e as createAstro, k as renderComponent } from './astro/server_D9ASRNIz.mjs';

const $$Astro$1 = createAstro("https://__site_origin__");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro = createAstro("https://__site_origin__");
const $$Sparkles = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sparkles;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "sparkles", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path> <path d="M20 3v4"></path> <path d="M22 5h-4"></path> <path d="M4 17v2"></path> <path d="M5 18H3"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/Sparkles.astro", void 0);

export { $$ as $, $$Sparkles as a };
