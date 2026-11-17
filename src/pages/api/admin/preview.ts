import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../../lib/auth';
import { renderMarkdown } from '../../../lib/posts';

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isAuthenticated(cookies)) {
    return new Response(JSON.stringify({ error: '未登录' }), { status: 401 });
  }
  try {
    const body = await request.json();
    const { html } = renderMarkdown(String(body.content || ''));
    return new Response(JSON.stringify({ html }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ html: '' }), {
      headers: { 'content-type': 'application/json' },
    });
  }
};
