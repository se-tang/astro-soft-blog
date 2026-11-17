import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../../lib/auth';
import { renderMarkdown } from '../../../lib/markdown';

export const POST: APIRoute = async ({ request, cookies, locals }) => {
  const env = locals.runtime?.env;
  if (!(await isAuthenticated(cookies, env))) {
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
