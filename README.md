<div align="center">

# ✨ Astro Soft-Blog

**柔和渐变光斑 · 毛玻璃卡片 · 纯 Markdown 驱动的极简个人博客**

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Markdown](https://img.shields.io/badge/Content-Markdown-000000?style=flat-square&logo=markdown&logoColor=white)](https://www.markdownguide.org/)
[![Platform](https://img.shields.io/badge/Platform-Linux-FCC624?style=flat-square&logo=linux&logoColor=black)](https://github.com/se-tang/astro-soft-blog)

*专为 Linux 服务器一键部署与 Cloudflare Pages 免费托管打造，零数据库依赖，专注写作本身。*

</div>

---

## 🌟 特性亮点

| 特性 | 说明 |
| :--- | :--- |
| 🎨 **柔和氛围背景** | 底层固定 `40px` 细网格 + 径向渐变光斑（浅色柔白 `#f8fafc` / 深色暗紫 `#0b080f`），护眼且 GPU 零压力 |
| 🪟 **毛玻璃卡片质感** | 半透明面板配合 `backdrop-filter: blur(15px)`，支持右上角**浅色 / 深色模式**一键切换 |
| 📝 **纯 Markdown 写作** | 文章全部放在 `src/content/posts/`，自动生成分类筛选、时间归档、代码块高亮与 RSS 订阅 |
| 🐳 **Docker 一键上线** | 内置多阶段构建 `Dockerfile`，服务器无需安装 Node.js 与 npm，最终运行镜像仅约 **45MB** |
| ☁️ **免费静态托管** | 支持直接关联 GitHub 部署到 **Cloudflare Pages**，零服务器成本 |

---

## 🚀 极简一键部署（Linux 只需这一条命令）

在一台全新的 Linux 服务器上，**不需要手动装 Docker、不需要装 Node.js**，直接执行这一条命令即可全自动完成安装、拉取代码并启动（全程静默精简输出）：

```bash
curl -fsSL https://raw.githubusercontent.com/se-tang/astro-soft-blog/main/install.sh | bash
```

启动成功后，浏览器访问 **`http://你的服务器IP:8080`** 即可看到博客！  
*(云服务器请在安全组放行 `8080` 端口；正式上线建议配合 1Panel / 宝塔 / Caddy 反向代理绑定域名与 HTTPS。)*

<details>
<summary>展开查看：手动分步命令（含国内服务器 Docker 镜像源）</summary>

```bash
# 海外服务器安装 Docker
curl -fsSL https://get.docker.com | sh && systemctl enable --now docker

# 国内服务器备用（阿里云镜像）
# curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun && systemctl enable --now docker

git clone https://github.com/se-tang/astro-soft-blog.git
cd astro-soft-blog
docker compose up -d --build
```

</details>

---

## ✍️ 如何撰写与发布新文章？

1. 在 `src/content/posts/` 目录下新建一个 `.md` 文件（例如 `my-note.md`）：

```markdown
---
title: "我的第一篇文章"
description: "一句话概括文章内容"
pubDate: 2026-11-17
category: "随笔"
tags: ["Linux", "Astro"]
---

这里开始写你的 Markdown 正文……
```

2. 保存后回到项目根目录，重新执行启动命令即可更新上线：

```bash
docker compose up -d --build
```

---

## ☁️ 备选：Cloudflare Pages 免费托管（无需服务器）

1. Fork 本仓库到你的 GitHub 账号。
2. 登录 Cloudflare 控制台 → **Workers 和 Pages** → **创建** → 关联仓库。
3. 构建配置填写：
   - **框架预设**：`Astro`
   - **构建命令**：`npm run build`
   - **输出目录**：`dist`
4. 点击部署，几十秒后即可获得免费全球 CDN 加速与 HTTPS 网址。

---

## 🛠️ Linux 本地开发预览（可选）

如果本机已安装 Node.js 20+，可直接本地热更新预览：

```bash
chmod +x start-linux.sh
./start-linux.sh
```

---

## 📁 目录结构

```text
astro-soft-blog/
├── src/
│   ├── content/posts/     # 存放你的所有 Markdown 文章 (.md)
│   ├── layouts/           # 全局布局（柔和背景、导航栏、页脚）
│   ├── pages/             # 首页、归档、关于、文章详情、RSS
│   └── styles/theme.css   # 浅色/深色主题变量与毛玻璃样式
├── Dockerfile             # 多阶段构建配置（Node 打包 -> Nginx 托管）
├── docker-compose.yml     # 一键编排启动配置
├── nginx.conf             # 静态资源缓存与路由配置
└── TUTORIAL-LINUX.md      # 面向纯小白的完整 Linux 实战教程
```

📖 **详细图文步骤请阅读**：[Linux 纯小白完整搭建教程](./TUTORIAL-LINUX.md)
