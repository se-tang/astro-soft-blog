import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  const contentType = response.headers.get('content-type') || '';

  // 将流式 HTML 响应转为纯文本 Response，兼容 Cloudflare Pages 默认旧版 compatibility_date（避免输出 [object Object]）
  if (contentType.includes('text/html') && response.body) {
    const html = await response.text();
    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  }

  return response;
});
