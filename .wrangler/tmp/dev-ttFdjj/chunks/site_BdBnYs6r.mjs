globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as ensureDbReady } from './db_BwyXkORt.mjs';

const DEFAULT_ABOUT = `## 设计理念

本博客采用 **低饱和底色 + 径向渐变柔和光斑 + 40px 细网格 + 毛玻璃卡片** 的组合，尽量减少长时间阅读带来的视觉疲劳。

## 写作与管理

- 基于 **Astro + Cloudflare Pages + D1** 构建，所有文章与设置均保存在云端 D1 数据库。
- 访问 \`/admin/\` 即可在线编写 Markdown、管理分类标签与站点信息。`;
const DEFAULT_SITE_SETTINGS = {
  title: "Soft-Blog",
  subtitle: "柔和毛玻璃个人博客",
  description: "记录技术折腾、生活随笔与阅读笔记。",
  footerText: "Powered by Astro",
  aboutContent: DEFAULT_ABOUT
};
async function getSiteSettings(env) {
  const db = env?.DB;
  if (!db) return { ...DEFAULT_SITE_SETTINGS };
  try {
    await ensureDbReady(db);
    const { results } = await db.prepare("SELECT key, value FROM site_settings").all();
    const map = {};
    for (const row of results || []) {
      map[row.key] = row.value;
    }
    return {
      title: map.title || DEFAULT_SITE_SETTINGS.title,
      subtitle: map.subtitle || DEFAULT_SITE_SETTINGS.subtitle,
      description: map.description || DEFAULT_SITE_SETTINGS.description,
      footerText: map.footerText || DEFAULT_SITE_SETTINGS.footerText,
      aboutContent: map.aboutContent || DEFAULT_SITE_SETTINGS.aboutContent,
      adminPassword: map.adminPassword,
      sessionSecret: map.sessionSecret
    };
  } catch {
    return { ...DEFAULT_SITE_SETTINGS };
  }
}
async function saveSiteSettings(env, partial) {
  const db = env?.DB;
  if (!db) {
    throw new Error("未检测到 Cloudflare D1 数据库绑定 (DB)，请先在 Pages 设置中绑定 D1 数据库。");
  }
  await ensureDbReady(db);
  const entries = Object.entries(partial).filter(([, v]) => typeof v === "string");
  if (entries.length > 0) {
    const stmts = entries.map(
      ([k, v]) => db.prepare("INSERT OR REPLACE INTO site_settings (key, value) VALUES (?, ?)").bind(k, v)
    );
    await db.batch(stmts);
  }
  return getSiteSettings(env);
}

export { getSiteSettings as g, saveSiteSettings as s };
