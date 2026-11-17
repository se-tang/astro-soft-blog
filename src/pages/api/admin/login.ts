import type { APIRoute } from 'astro';
import { createSessionToken, getAdminPassword, SESSION_COOKIE } from '../../../lib/auth';

export const POST: APIRoute = async ({ request, cookies, locals }) => {
  const env = locals.runtime?.env;
  try {
    const body = await request.json();
    const password = typeof body.password === 'string' ? body.password : '';
    const expected = await getAdminPassword(env);
    if (!password || password !== expected) {
      return new Response(JSON.stringify({ error: '密码错误' }), {
        status: 401,
        headers: { 'content-type': 'application/json' },
      });
    }

    const token = await createSessionToken(env);
    cookies.set(SESSION_COOKIE, token, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
    });

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: '请求格式错误' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }
};
