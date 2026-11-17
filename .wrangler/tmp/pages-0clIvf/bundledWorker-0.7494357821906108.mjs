var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js/index.js
import { renderers } from "./renderers.mjs";
import { c as createExports, s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_thzyobPk.mjs";
import { manifest } from "./manifest_CjQrtHN8.mjs";
globalThis.process ??= {};
globalThis.process.env ??= {};
var serverIslandMap = /* @__PURE__ */ new Map();
var _page0 = /* @__PURE__ */ __name(() => import("./pages/_image.astro.mjs"), "_page0");
var _page1 = /* @__PURE__ */ __name(() => import("./pages/about.astro.mjs"), "_page1");
var _page2 = /* @__PURE__ */ __name(() => import("./pages/admin/editor.astro.mjs"), "_page2");
var _page3 = /* @__PURE__ */ __name(() => import("./pages/admin/login.astro.mjs"), "_page3");
var _page4 = /* @__PURE__ */ __name(() => import("./pages/admin/settings.astro.mjs"), "_page4");
var _page5 = /* @__PURE__ */ __name(() => import("./pages/admin/taxonomies.astro.mjs"), "_page5");
var _page6 = /* @__PURE__ */ __name(() => import("./pages/admin.astro.mjs"), "_page6");
var _page7 = /* @__PURE__ */ __name(() => import("./pages/api/admin/login.astro.mjs"), "_page7");
var _page8 = /* @__PURE__ */ __name(() => import("./pages/api/admin/logout.astro.mjs"), "_page8");
var _page9 = /* @__PURE__ */ __name(() => import("./pages/api/admin/posts.astro.mjs"), "_page9");
var _page10 = /* @__PURE__ */ __name(() => import("./pages/api/admin/preview.astro.mjs"), "_page10");
var _page11 = /* @__PURE__ */ __name(() => import("./pages/api/admin/settings.astro.mjs"), "_page11");
var _page12 = /* @__PURE__ */ __name(() => import("./pages/api/admin/taxonomies.astro.mjs"), "_page12");
var _page13 = /* @__PURE__ */ __name(() => import("./pages/archive.astro.mjs"), "_page13");
var _page14 = /* @__PURE__ */ __name(() => import("./pages/category/_category_.astro.mjs"), "_page14");
var _page15 = /* @__PURE__ */ __name(() => import("./pages/posts/_---slug_.astro.mjs"), "_page15");
var _page16 = /* @__PURE__ */ __name(() => import("./pages/rss.xml.astro.mjs"), "_page16");
var _page17 = /* @__PURE__ */ __name(() => import("./pages/search-index.json.astro.mjs"), "_page17");
var _page18 = /* @__PURE__ */ __name(() => import("./pages/tags.astro.mjs"), "_page18");
var _page19 = /* @__PURE__ */ __name(() => import("./pages/index.astro.mjs"), "_page19");
var pageMap = /* @__PURE__ */ new Map([
  ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/about.astro", _page1],
  ["src/pages/admin/editor.astro", _page2],
  ["src/pages/admin/login.astro", _page3],
  ["src/pages/admin/settings.astro", _page4],
  ["src/pages/admin/taxonomies.astro", _page5],
  ["src/pages/admin/index.astro", _page6],
  ["src/pages/api/admin/login.ts", _page7],
  ["src/pages/api/admin/logout.ts", _page8],
  ["src/pages/api/admin/posts.ts", _page9],
  ["src/pages/api/admin/preview.ts", _page10],
  ["src/pages/api/admin/settings.ts", _page11],
  ["src/pages/api/admin/taxonomies.ts", _page12],
  ["src/pages/archive.astro", _page13],
  ["src/pages/category/[category].astro", _page14],
  ["src/pages/posts/[...slug].astro", _page15],
  ["src/pages/rss.xml.js", _page16],
  ["src/pages/search-index.json.js", _page17],
  ["src/pages/tags.astro", _page18],
  ["src/pages/index.astro", _page19]
]);
var _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: /* @__PURE__ */ __name(() => import("./noop-entrypoint.mjs"), "actions"),
  middleware: /* @__PURE__ */ __name(() => import("./_astro-internal_middleware.mjs"), "middleware")
});
var _args = void 0;
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
//# sourceMappingURL=bundledWorker-0.7494357821906108.mjs.map
