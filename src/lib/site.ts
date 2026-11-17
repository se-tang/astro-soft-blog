import fs from 'node:fs';
import path from 'node:path';

export interface SiteSettings {
  title: string;
  subtitle: string;
  description: string;
  footerText: string;
  aboutContent: string;
  adminPassword?: string;
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const SITE_FILE = path.join(DATA_DIR, 'site.json');

const DEFAULT_ABOUT = `## 设计理念

本博客采用 **低饱和底色 + 径向渐变柔和光斑 + 40px 细网格 + 毛玻璃卡片** 的组合，尽量减少长时间阅读带来的视觉疲劳。

## 写作与管理

- 所有文章均以纯 \`Markdown\` 格式存储，可在后台直接可视化编写、分类与管理。
- 支持浅色 / 深色模式一键切换，适配桌面与移动端阅读。`;

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  title: 'Soft-Blog',
  subtitle: '柔和毛玻璃个人博客',
  description: '记录技术折腾、生活随笔与阅读笔记。',
  footerText: 'Powered by Astro',
  aboutContent: DEFAULT_ABOUT,
};

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function getSiteSettings(): SiteSettings {
  ensureDataDir();
  if (!fs.existsSync(SITE_FILE)) {
    fs.writeFileSync(SITE_FILE, JSON.stringify(DEFAULT_SITE_SETTINGS, null, 2), 'utf-8');
    return { ...DEFAULT_SITE_SETTINGS };
  }
  try {
    const raw = fs.readFileSync(SITE_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SITE_SETTINGS, ...parsed };
  } catch {
    return { ...DEFAULT_SITE_SETTINGS };
  }
}

export function saveSiteSettings(partial: Partial<SiteSettings>): SiteSettings {
  ensureDataDir();
  const current = getSiteSettings();
  const next: SiteSettings = {
    ...current,
    ...partial,
  };
  fs.writeFileSync(SITE_FILE, JSON.stringify(next, null, 2), 'utf-8');
  return next;
}
