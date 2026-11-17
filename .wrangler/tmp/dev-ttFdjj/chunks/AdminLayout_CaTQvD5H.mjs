globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, e as createAstro, m as maybeRenderHead, n as renderSlot, h as addAttribute, l as renderHead } from './astro/server_D9ASRNIz.mjs';
/* empty css                          */
/* empty css                          */
import { a as isUsingDefaultPassword } from './auth_BzGuxISz.mjs';
import { g as getSiteSettings } from './site_BdBnYs6r.mjs';
/* empty css                          */
import { $ as $$, a as $$Sparkles } from './Sparkles_CzhTbA5n.mjs';
import { $ as $$Moon, a as $$Sun, b as $$Settings } from './Sun_BWE14Tg8.mjs';

const $$Astro$5 = createAstro("https://__site_origin__");
const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "external-link", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 3h6v6"></path> <path d="M10 14 21 3"></path> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/ExternalLink.astro", void 0);

const $$Astro$4 = createAstro("https://__site_origin__");
const $$FileText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FileText;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "file-text", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path> <path d="M14 2v4a2 2 0 0 0 2 2h4"></path> <path d="M10 9H8"></path> <path d="M16 13H8"></path> <path d="M16 17H8"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/FileText.astro", void 0);

const $$Astro$3 = createAstro("https://__site_origin__");
const $$LogOut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LogOut;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "log-out", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path> <polyline points="16 17 21 12 16 7"></polyline> <line x1="21" x2="9" y1="12" y2="12"></line> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/LogOut.astro", void 0);

const $$Astro$2 = createAstro("https://__site_origin__");
const $$PenSquare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PenSquare;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "square-pen", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path> <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/PenSquare.astro", void 0);

const $$Astro$1 = createAstro("https://__site_origin__");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tags;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "tags", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"></path> <path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"></path> <circle cx="6.5" cy="9.5" r=".5" fill="currentColor"></circle> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/Tags.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://__site_origin__");
const $$AdminLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const env = Astro2.locals.runtime?.env;
  const { title, activeNav = "posts" } = Astro2.props;
  const siteSettings = await getSiteSettings(env);
  const defaultPwd = await isUsingDefaultPassword(env);
  const hasDb = Boolean(env?.DB);
  return renderTemplate(_a || (_a = __template(['<html lang="zh-CN" data-astro-cid-2kanml4j> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', ` | \u540E\u53F0\u7BA1\u7406</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><script>
      (function () {
        try {
          var saved = localStorage.getItem('soft-blog-theme');
          var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (saved === 'dark' || (!saved && prefersDark)) {
            document.documentElement.dataset.theme = 'dark';
          }
        } catch (e) {}
      })();
    <\/script>`, `</head> <body data-astro-cid-2kanml4j> <script>
      if (document.documentElement.dataset.theme === 'dark') {
        document.body.classList.add('dark-theme');
      }
    <\/script> <div class="ambient-bg" aria-hidden="true" data-astro-cid-2kanml4j> <div class="ambient-grid" data-astro-cid-2kanml4j></div> <div class="blob blob-cyan" data-astro-cid-2kanml4j></div> <div class="blob blob-purple" data-astro-cid-2kanml4j></div> </div> <div class="admin-shell" data-astro-cid-2kanml4j> <aside class="admin-sidebar" data-astro-cid-2kanml4j> <a href="/admin/" class="admin-brand" data-astro-cid-2kanml4j> `, " <span data-astro-cid-2kanml4j>", '</span> <span class="admin-brand-badge" data-astro-cid-2kanml4j>Admin</span> </a> <nav class="admin-nav" data-astro-cid-2kanml4j> <a href="/admin/"', " data-astro-cid-2kanml4j> ", ' \u6587\u7AE0\u7BA1\u7406\n</a> <a href="/admin/editor/"', " data-astro-cid-2kanml4j> ", ' \u5199\u65B0\u6587\u7AE0\n</a> <a href="/admin/taxonomies/"', " data-astro-cid-2kanml4j> ", ' \u5206\u7C7B\u4E0E\u6807\u7B7E\n</a> <a href="/admin/settings/"', " data-astro-cid-2kanml4j> ", ' \u7AD9\u70B9\u8BBE\u7F6E\n</a> </nav> <div class="admin-sidebar-footer" data-astro-cid-2kanml4j> <button type="button" id="admin-theme-toggle" class="admin-nav-item" data-astro-cid-2kanml4j> ', " ", ' <span data-astro-cid-2kanml4j>\u5207\u6362\u4E3B\u9898</span> </button> <a href="/" target="_blank" class="admin-nav-item" data-astro-cid-2kanml4j> ', ' \u8BBF\u95EE\u524D\u53F0\u535A\u5BA2\n</a> <button type="button" id="admin-logout-btn" class="admin-nav-item" style="color:#ef4444;" data-astro-cid-2kanml4j> ', ' \u9000\u51FA\u767B\u5F55\n</button> </div> </aside> <main class="admin-main" data-astro-cid-2kanml4j> ', " ", " ", " </main> </div>  <script>\n      (function () {\n        var themeBtn = document.getElementById('admin-theme-toggle');\n        if (themeBtn) {\n          themeBtn.addEventListener('click', function () {\n            var isDark = document.body.classList.toggle('dark-theme');\n            try {\n              localStorage.setItem('soft-blog-theme', isDark ? 'dark' : 'light');\n            } catch (e) {}\n          });\n        }\n\n        var logoutBtn = document.getElementById('admin-logout-btn');\n        if (logoutBtn) {\n          logoutBtn.addEventListener('click', function () {\n            fetch('/api/admin/logout', { method: 'POST' }).then(function () {\n              window.location.href = '/admin/login/';\n            });\n          });\n        }\n      })();\n    <\/script> </body> </html>"])), title, renderHead(), renderComponent($$result, "Sparkles", $$Sparkles, { "size": 18, "style": "color: var(--neon-cyan);", "data-astro-cid-2kanml4j": true }), siteSettings.title, addAttribute(["admin-nav-item", { active: activeNav === "posts" }], "class:list"), renderComponent($$result, "FileText", $$FileText, { "size": 16, "data-astro-cid-2kanml4j": true }), addAttribute(["admin-nav-item", { active: activeNav === "editor" }], "class:list"), renderComponent($$result, "PenSquare", $$PenSquare, { "size": 16, "data-astro-cid-2kanml4j": true }), addAttribute(["admin-nav-item", { active: activeNav === "taxonomies" }], "class:list"), renderComponent($$result, "Tags", $$Tags, { "size": 16, "data-astro-cid-2kanml4j": true }), addAttribute(["admin-nav-item", { active: activeNav === "settings" }], "class:list"), renderComponent($$result, "Settings", $$Settings, { "size": 16, "data-astro-cid-2kanml4j": true }), renderComponent($$result, "Sun", $$Sun, { "size": 16, "class": "icon-sun", "data-astro-cid-2kanml4j": true }), renderComponent($$result, "Moon", $$Moon, { "size": 16, "class": "icon-moon", "data-astro-cid-2kanml4j": true }), renderComponent($$result, "ExternalLink", $$ExternalLink, { "size": 16, "data-astro-cid-2kanml4j": true }), renderComponent($$result, "LogOut", $$LogOut, { "size": 16, "data-astro-cid-2kanml4j": true }), !hasDb && renderTemplate`<div class="admin-alert" style="border-color:rgba(239,68,68,0.45);background:rgba(239,68,68,0.12);color:#ef4444;" data-astro-cid-2kanml4j> <span data-astro-cid-2kanml4j>未检测到 Cloudflare D1 数据库绑定（变量名 DB）。请在 Pages 设置 → 绑定中添加 D1 数据库后重新部署，否则修改无法持久化保存。</span> </div>`, defaultPwd && renderTemplate`<div class="admin-alert" data-astro-cid-2kanml4j> <span data-astro-cid-2kanml4j>当前仍在使用默认管理员密码（admin123），建议前往「站点设置」尽快修改。</span> <a href="/admin/settings/" class="admin-btn" style="height:30px;font-size:0.78rem;" data-astro-cid-2kanml4j>去修改</a> </div>`, renderSlot($$result, $$slots["default"]));
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $, $$ExternalLink as a, $$PenSquare as b };
