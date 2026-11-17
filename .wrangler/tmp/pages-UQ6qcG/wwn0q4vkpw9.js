// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/favicon.svg"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "E:\\\u5DE5\u4F5C\u76EE\u5F553\\soft-blog\\.wrangler\\tmp\\pages-UQ6qcG\\bundledWorker-0.9207194161915276.mjs";
import { isRoutingRuleMatch } from "E:\\\u5DE5\u4F5C\u76EE\u5F553\\soft-blog\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "E:\\\u5DE5\u4F5C\u76EE\u5F553\\soft-blog\\.wrangler\\tmp\\pages-UQ6qcG\\bundledWorker-0.9207194161915276.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=wwn0q4vkpw9.js.map
