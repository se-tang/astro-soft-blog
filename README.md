<div align="center">

# ✨ Astro Soft-Blog (Cloudflare Pages + D1 版)

**柔和渐变光斑 · 毛玻璃卡片 · 带在线管理后台的极简个人博客**

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages%20%2B%20D1-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Markdown](https://img.shields.io/badge/Content-Markdown-000000?style=flat-square&logo=markdown&logoColor=white)](https://www.markdownguide.org/)

*零服务器成本，5 分钟在 Cloudflare 上免费部署带完整后台的个人博客。*

</div>

---

## 🌟 特性亮点

| 特性 | 说明 |
| :--- | :--- |
| 🎨 **柔和氛围背景** | 底层 `40px` 细网格 + 径向渐变光斑（浅色柔白 `#f8fafc` / 深色暗紫 `#0b080f`），护眼且丝滑 |
| 🪟 **毛玻璃卡片与主题** | 半透明面板配合 `backdrop-filter: blur(15px)`，支持右上角**浅色 / 深色模式**一键切换 |
| 📝 **内置在线后台 (`/admin/`)** | 仿 Halo 风格控制台：分屏 Markdown 编辑与实时预览、草稿箱、分类/标签管理、站点设置 |
| 🔍 **全局搜索与目录** | 顶栏 `Ctrl + K` 站内搜索、分类下拉菜单、文章页左侧「文章汇览」+ 右侧滚动跟随「本篇目录」 |
| ☁️ **Cloudflare 免费托管** | 基于 `@astrojs/cloudflare` + **D1 云数据库**，首次访问自动建表与初始化，无需手写 SQL |

---

## 🚀 5 分钟免费部署到 Cloudflare Pages

### 第一步：Fork 仓库并创建 Pages 项目

1. 点击右上角 **Fork** 将本仓库复制到你的 GitHub 账号。
2. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/) → **Workers 和 Pages** → **创建** → 切换到 **Pages** → **连接到 Git**，选择 `astro-soft-blog`。
3. 构建设置填写：
   - **框架预设**：`Astro`
   - **构建命令**：`npm run build`
   - **输出目录**：`dist`
4. 点击 **保存并部署**。

### 第二步：创建并绑定免费 D1 数据库（无需执行 SQL）

1. 在 Cloudflare 控制台左侧进入 **存储和数据库（Storage & Databases）** → **D1 SQL 数据库** → **创建数据库**（名称填 `soft-blog-db`）。
2. 回到你的 Pages 项目 → **设置（Settings）** → **绑定（Bindings）** → **添加** → 选择 **D1 数据库**：
   - **变量名称（Variable name）**：必须填 **`DB`**
   - **D1 数据库**：选择刚创建的 `soft-blog-db`
3. 保存后，到 **部署（Deployments）** 页对最新部署点一次 **`...` → 重试部署（Retry deployment）** 使绑定生效。

---

## ✍️ 进入后台写文章

1. 打开 `https://你的域名/admin/`（或点击顶栏右侧齿轮图标）。
2. 默认管理员密码：**`admin123`**（可在 Pages 环境变量 `ADMIN_PASSWORD` 或后台「站点设置」中修改）。
3. 登录后即可新建/编辑 Markdown 文章、管理分类标签、修改博客标题与「关于」页面。

---

## 📁 目录结构

```text
astro-soft-blog/
├── src/
│   ├── lib/
│   │   ├── db.ts          # D1 自动建表与示例数据初始化
│   │   ├── posts.ts       # 文章与分类标签 D1 读写接口
│   │   ├── site.ts        # 站点设置 D1 读写接口
│   │   ├── auth.ts        # Web Crypto 鉴权与 Cookie 会话
│   │   └── markdown.ts    # Markdown 渲染与目录提取
│   ├── layouts/           # 前台布局 & 后台控制台布局
│   ├── pages/             # 前台页面、/admin/* 后台、/api/admin/* 接口
│   ├── middleware.ts      # Cloudflare Pages HTML 响应兼容处理
│   └── styles/            # 柔和毛玻璃前台样式 & 后台样式
└── astro.config.mjs       # Astro + Cloudflare 适配器配置
```
