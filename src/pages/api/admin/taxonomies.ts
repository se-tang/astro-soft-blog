import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../../lib/auth';
import { renameCategory, renameTag } from '../../../lib/posts';

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isAuthenticated(cookies)) {
    return new Response(JSON.stringify({ error: '未登录' }), { status: 401 });
  }
  try {
    const body = await request.json();
    const type = String(body.type || '');
    const oldName = String(body.oldName || '').trim();
    const newName = String(body.newName || '').trim();
    if (!oldName || !newName) {
      return new Response(JSON.stringify({ error: '名称不能为空' }), { status: 400 });
    }
    const updated =
      type === 'category'
        ? renameCategory(oldName, newName)
        : type === 'tag'
          ? renameTag(oldName, newName)
          : 0;

    return new Response(JSON.stringify({ ok: true, updated }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: '操作失败' }), { status: 400 });
  }
};
