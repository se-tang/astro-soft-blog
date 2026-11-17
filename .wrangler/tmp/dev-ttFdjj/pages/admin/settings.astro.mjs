globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_D9ASRNIz.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_CaTQvD5H.mjs';
import { i as isAuthenticated } from '../../chunks/auth_BzGuxISz.mjs';
import { g as getSiteSettings } from '../../chunks/site_BdBnYs6r.mjs';
import { $ as $$Save } from '../../chunks/Save_LzSbG8dr.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://__site_origin__");
const $$Settings = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Settings;
  const env = Astro2.locals.runtime?.env;
  if (!await isAuthenticated(Astro2.cookies, env)) {
    return Astro2.redirect("/admin/login/");
  }
  const settings = await getSiteSettings(env);
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "\u7AD9\u70B9\u8BBE\u7F6E", "activeNav": "settings" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="admin-topbar"> <h1 class="admin-page-title">\u7AD9\u70B9\u8BBE\u7F6E</h1> <div style="display:flex;align-items:center;gap:10px;"> <span id="settings-toast" style="font-size:0.82rem;font-weight:700;color:var(--neon-green);display:none;"></span> <button type="button" id="save-settings-btn" class="admin-btn admin-btn-primary"> ', ' \u4FDD\u5B58\u8BBE\u7F6E\n</button> </div> </div> <div class="glass-panel" style="padding:24px;max-width:780px;display:flex;flex-direction:column;gap:16px;"> <div class="form-field"> <label for="site-title">\u535A\u5BA2\u540D\u79F0</label> <input type="text" id="site-title" class="admin-input"', '> </div> <div class="form-field"> <label for="site-subtitle">\u526F\u6807\u9898</label> <input type="text" id="site-subtitle" class="admin-input"', '> </div> <div class="form-field"> <label for="site-desc">\u9996\u9875\u6B22\u8FCE\u8BED / SEO \u7B80\u4ECB</label> <textarea id="site-desc" class="admin-textarea" rows="2">', '</textarea> </div> <div class="form-field"> <label for="site-footer">\u9875\u811A\u6587\u5B57</label> <input type="text" id="site-footer" class="admin-input"', '> </div> <div class="form-field"> <label for="site-about">\u300C\u5173\u4E8E\u300D\u9875\u9762\u5185\u5BB9\uFF08Markdown \u683C\u5F0F\uFF09</label> <textarea id="site-about" class="admin-textarea" rows="8" style="font-family:var(--font-mono);font-size:0.85rem;">', `</textarea> </div> <hr style="border:none;border-top:1px solid var(--border-neon);margin:4px 0;"> <div class="form-field"> <label for="new-password">\u4FEE\u6539\u7BA1\u7406\u5458\u5BC6\u7801\uFF08\u7559\u7A7A\u5219\u4FDD\u6301\u5F53\u524D\u5BC6\u7801\u4E0D\u53D8\uFF09</label> <input type="password" id="new-password" class="admin-input" placeholder="\u8F93\u5165\u65B0\u5BC6\u7801..."> </div> </div> <script>
    (function () {
      var btn = document.getElementById('save-settings-btn');
      var toast = document.getElementById('settings-toast');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var payload = {
          title: document.getElementById('site-title').value,
          subtitle: document.getElementById('site-subtitle').value,
          description: document.getElementById('site-desc').value,
          footerText: document.getElementById('site-footer').value,
          aboutContent: document.getElementById('site-about').value,
          newPassword: document.getElementById('new-password').value,
        };
        fetch('/api/admin/settings', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(payload),
        })
          .then(function (r) { return r.json(); })
          .then(function (data) {
            if (!data.ok) throw new Error(data.error || '\u4FDD\u5B58\u5931\u8D25');
            document.getElementById('new-password').value = '';
            toast.textContent = '\u8BBE\u7F6E\u5DF2\u4FDD\u5B58\u5E76\u7ACB\u5373\u751F\u6548\uFF01';
            toast.style.display = 'inline';
            setTimeout(function () { toast.style.display = 'none'; }, 2500);
          })
          .catch(function (err) {
            alert(err.message || '\u4FDD\u5B58\u5931\u8D25');
          });
      });
    })();
  <\/script> `])), maybeRenderHead(), renderComponent($$result2, "Save", $$Save, { "size": 15 }), addAttribute(settings.title, "value"), addAttribute(settings.subtitle, "value"), settings.description, addAttribute(settings.footerText, "value"), settings.aboutContent) })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/src/pages/admin/settings.astro", void 0);

const $$file = "E:/工作目录3/soft-blog/src/pages/admin/settings.astro";
const $$url = "/admin/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
