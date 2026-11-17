globalThis.process ??= {}; globalThis.process.env ??= {};
const SEED_POSTS = [
  {
    slug: "welcome-how-to-write",
    title: "欢迎使用 Soft-Blog：后台管理与 Markdown 写作指南",
    description: "在 Cloudflare Pages + D1 环境下直接通过 /admin/ 后台写文章、管理分类标签与站点设置。",
    pubDate: "2026-11-17",
    category: "新手指南",
    tags: ["Markdown", "教程", "入门"],
    draft: false,
    content: `欢迎来到你的新博客！这套博客基于 **Astro + Cloudflare Pages + D1 数据库** 构建，兼具静态站的极速访问与动态后台的便捷管理。

## 如何发布一篇新文章？

1. 点击页脚或顶栏右侧的 **后台管理**（\`/admin/\`），使用管理员密码登录；
2. 点击左侧 **写新文章**，在分屏编辑器中输入标题与 Markdown 正文；
3. 在右侧抽屉选好分类、标签与发布日期，点击 **发布文章** 即可立即生效。

## 常用 Markdown 排版示例

| 语法 | 效果 | 适用场景 |
| :--- | :--- | :--- |
| \`## 标题\` | 二级小标题 | 划分文章段落 |
| \`**加粗**\` | **加粗文字** | 强调重点 |
| \`> 引用\` | 左侧带竖线的提示块 | 引用名言或注意事项 |
| \`\\\`代码\\\`\` | \`行内代码\` | 标注文件名或命令 |

> 提示：文章支持草稿箱功能，未写完的内容可以先点「存为草稿」，不会出现在前台首页。`
  },
  {
    slug: "soft-ui-design-notes",
    title: "为什么这种「柔和光斑 + 毛玻璃」背景看着这么舒服？",
    description: "拆解低饱和底色、径向渐变光晕与半透明卡片背后的视觉设计逻辑，以及它为什么比纯白/纯黑更护眼。",
    pubDate: "2026-11-16",
    category: "设计笔记",
    tags: ["UI设计", "毛玻璃", "护眼"],
    draft: false,
    content: `很多网站一打开要么刺眼（纯白 \`#ffffff\`），要么压抑（纯黑 \`#000000\`）。而让人觉得“看着就舒服”的界面，通常在背景上做了三层克制的处理：

1. **微灰柔白 / 深紫暗底**：浅色模式用 \`#f8fafc\` 替代纯白，深色模式用 \`#0b080f\` 替代纯黑，降低对比度刺激。
2. **超大径向渐变光斑**：在屏幕左上角与右下角放置极低透明度的暖琥珀色与淡紫色光晕，营造呼吸感。
3. **毛玻璃面板（Glassmorphism）**：正文卡片采用半透明背景配合 \`blur(15px)\` 模糊，让背景光影若隐若现地透出来。

你可以点击右上角的 **太阳/月亮按钮**，对比一下浅色与深色两种模式下的光斑变化。`
  },
  {
    slug: "cloudflare-pages-d1-guide",
    title: "Cloudflare Pages + D1 数据库免费部署指南",
    description: "零服务器成本，5 分钟在 Cloudflare 上部署带完整后台的个人博客。",
    pubDate: "2026-11-15",
    category: "运维部署",
    tags: ["Cloudflare", "D1", "部署"],
    draft: false,
    content: `本博客已全面适配 **Cloudflare Pages + D1（免费边缘 SQLite 数据库）**，无需购买 VPS 服务器即可拥有完整的前后台。

## 部署步骤

1. 在 Cloudflare 控制台创建一个 **D1 数据库**（例如命名 \`soft-blog-db\`）；
2. 在你的 **Pages 项目 → 设置 → 绑定（Bindings）** 中，添加一条 D1 数据库绑定，变量名填写 **\`DB\`**，选择刚创建的数据库；
3. 推送代码并重新部署后，**首次访问会自动建表并初始化示例文章**，无需手动执行任何 SQL 命令！

## 安全建议

- 初次登录 \`/admin/\` 的默认密码为 \`admin123\`；
- 登录后请立即前往 **站点设置** 修改管理员密码，或在 Pages 环境变量中配置 \`ADMIN_PASSWORD\`。`
  }
];
let initializedForDb = /* @__PURE__ */ new WeakSet();
async function ensureDbReady(db) {
  if (initializedForDb.has(db)) return;
  await db.batch([
    db.prepare(`
      CREATE TABLE IF NOT EXISTS posts (
        slug TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL DEFAULT '',
        pub_date TEXT NOT NULL,
        category TEXT NOT NULL DEFAULT '随笔',
        tags TEXT NOT NULL DEFAULT '[]',
        draft INTEGER NOT NULL DEFAULT 0,
        content TEXT NOT NULL DEFAULT '',
        updated_at INTEGER NOT NULL DEFAULT 0
      )
    `),
    db.prepare(`
      CREATE TABLE IF NOT EXISTS site_settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      )
    `)
  ]);
  const countRow = await db.prepare("SELECT COUNT(*) AS cnt FROM posts").first();
  if ((countRow?.cnt ?? 0) === 0) {
    const now = Date.now();
    const stmts = SEED_POSTS.map(
      (p) => db.prepare(
        "INSERT OR IGNORE INTO posts (slug, title, description, pub_date, category, tags, draft, content, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
      ).bind(p.slug, p.title, p.description, p.pubDate, p.category, JSON.stringify(p.tags), p.draft ? 1 : 0, p.content, now)
    );
    await db.batch(stmts);
  }
  initializedForDb.add(db);
}

export { SEED_POSTS as S, ensureDbReady as e };
