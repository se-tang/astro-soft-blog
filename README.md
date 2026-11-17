# Astro Soft-Blog · 柔和毛玻璃个人博客（Linux / Docker 版）

参考 `vps-craft.com` 柔和渐变背景与毛玻璃卡片风格打造的纯 Markdown 个人博客，基于 **Astro** 构建，专为 **Linux** 服务器一键部署与 **Cloudflare Pages** 免费托管优化。

## 1. Docker 一键部署（推荐，无需安装 Node / npm）

```bash
git clone https://github.com/se-tang/astro-soft-blog.git
cd astro-soft-blog
docker compose up -d --build
```

启动后访问 `http://你的服务器IP:8080`。

## 2. 怎么写新文章？

1. 打开 `src/content/posts/` 文件夹，新建一个 `.md` 文件（例如 `hello.md`）：

```markdown
---
title: "我的新文章"
description: "一句话摘要"
pubDate: 2026-11-17
category: "随笔"
tags: ["日常"]
---

这里是正文……
```

2. 保存后重新执行 `docker compose up -d --build` 即可更新上线。

## 3. Linux 本地开发预览（可选）

如果本机已安装 Node.js 20+，可直接运行：

```bash
chmod +x start-linux.sh
./start-linux.sh
```

完整小白部署教程见 [TUTORIAL-LINUX.md](./TUTORIAL-LINUX.md)。
