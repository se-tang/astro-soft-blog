globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, e as createAstro, m as maybeRenderHead, l as renderHead } from '../../chunks/astro/server_D9ASRNIz.mjs';
/* empty css                                     */
/* empty css                                     */
import { i as isAuthenticated } from '../../chunks/auth_BzGuxISz.mjs';
import { g as getSiteSettings } from '../../chunks/site_BdBnYs6r.mjs';
import { $ as $$, a as $$Sparkles } from '../../chunks/Sparkles_CzhTbA5n.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://__site_origin__");
const $$Lock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Lock;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "lock", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/Lock.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://__site_origin__");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const env = Astro2.locals.runtime?.env;
  if (await isAuthenticated(Astro2.cookies, env)) {
    return Astro2.redirect("/admin/");
  }
  const siteSettings = await getSiteSettings(env);
  return renderTemplate(_a || (_a = __template(['<html lang="zh-CN"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>\u767B\u5F55\u540E\u53F0 | ', `</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><script>
      (function () {
        try {
          var saved = localStorage.getItem('soft-blog-theme');
          var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (saved === 'dark' || (!saved && prefersDark)) {
            document.documentElement.dataset.theme = 'dark';
          }
        } catch (e) {}
      })();
    <\/script>`, `</head> <body style="justify-content:center;align-items:center;padding:20px;"> <script>
      if (document.documentElement.dataset.theme === 'dark') {
        document.body.classList.add('dark-theme');
      }
    <\/script> <div class="ambient-bg" aria-hidden="true"> <div class="ambient-grid"></div> <div class="blob blob-cyan"></div> <div class="blob blob-purple"></div> </div> <div class="glass-panel" style="width:100%;max-width:400px;padding:34px 30px;"> <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;"> `, ' <h1 style="margin:0;font-size:1.35rem;font-weight:800;">', ' \u540E\u53F0</h1> </div> <p style="margin:0 0 22px;font-size:0.86rem;color:var(--text-secondary);">\n\u8F93\u5165\u7BA1\u7406\u5458\u5BC6\u7801\u4EE5\u7BA1\u7406\u6587\u7AE0\u3001\u5206\u7C7B\u4E0E\u7AD9\u70B9\u8BBE\u7F6E\u3002\n</p> <form id="login-form" style="display:flex;flex-direction:column;gap:14px;"> <div class="form-field"> <label for="password">\u7BA1\u7406\u5458\u5BC6\u7801</label> <input type="password" id="password" class="admin-input" placeholder="\u9ED8\u8BA4\u5BC6\u7801: admin123" required autofocus> </div> <div id="login-error" style="display:none;color:#ef4444;font-size:0.82rem;font-weight:700;"></div> <button type="submit" class="admin-btn admin-btn-primary" style="height:40px;width:100%;"> ', ` \u767B\u5F55\u63A7\u5236\u53F0
</button> </form> <div style="margin-top:18px;text-align:center;"> <a href="/" style="font-size:0.82rem;color:var(--text-secondary);text-decoration:none;">\u2190 \u8FD4\u56DE\u535A\u5BA2\u9996\u9875</a> </div> </div> <script>
      (function () {
        var form = document.getElementById('login-form');
        var input = document.getElementById('password');
        var err = document.getElementById('login-error');
        if (!form) return;
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          err.style.display = 'none';
          fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ password: input.value }),
          })
            .then(function (r) {
              if (!r.ok) throw new Error('\u5BC6\u7801\u9519\u8BEF');
              window.location.href = '/admin/';
            })
            .catch(function (ex) {
              err.textContent = ex.message || '\u767B\u5F55\u5931\u8D25';
              err.style.display = 'block';
            });
        });
      })();
    <\/script> </body> </html>`])), siteSettings.title, renderHead(), renderComponent($$result, "Sparkles", $$Sparkles, { "size": 20, "style": "color:var(--neon-cyan);" }), siteSettings.title, renderComponent($$result, "Lock", $$Lock, { "size": 15 }));
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/src/pages/admin/login.astro", void 0);

const $$file = "E:/工作目录3/soft-blog/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Login,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
