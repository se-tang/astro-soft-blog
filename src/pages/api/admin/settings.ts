import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../../lib/auth';
import { saveSiteSettings } from '../../../lib/site';

export const POST: APIRoute = async ({ request, cookies, locals }) => {
  const env = locals.runtime?.env;
  if (!(await isAuthenticated(cookies, env))) {
    return new Response(JSON.stringify({ error: '未登录' }), { status: 401 });
  }
  try {
    const body = await request.json();
    const patch: Record<string, string> = {};
    if (typeof body.title === 'string') patch.title = body.title.trim() || 'Soft-Blog';
    if (typeof body.subtitle === 'string') patch.subtitle = body.subtitle.trim();
    if (typeof body.description === 'string') patch.description = body.description.trim();
    if (typeof body.footerText === 'string') patch.footerText = body.footerText.trim();
    if (typeof body.aboutContent === 'string') patch.aboutContent = body.aboutContent;
    if (typeof body.newPassword === 'string' && body.newPassword.trim()) {
      patch.adminPassword = body.newPassword.trim();
    }

    const saved = await saveSiteSettings(env, patch);
    return new Response(JSON.stringify({ ok: true, settings: saved }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : '保存设置失败' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }
};
