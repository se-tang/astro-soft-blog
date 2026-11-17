---
title: "Linux 下 Docker 一键部署与 Cloudflare Pages 免费托管指南"
description: "在空白 Linux 服务器上无需安装 Node.js，一条 Docker 命令即可完成打包上线，也支持免费托管到 Cloudflare Pages。"
pubDate: 2026-11-15
category: "运维部署"
tags: ["Linux", "Docker", "部署"]
---

本博客基于 **Astro** 构建，最终输出纯粹的静态 HTML/CSS/JS（在 `dist/` 目录），非常适合在 Linux 服务器上用 Docker 一键部署。

## 方式一：Linux + Docker 一键部署（推荐）

宿主机无需安装 Node.js 或 npm，只要有 Docker：

```bash
git clone https://github.com/se-tang/astro-soft-blog.git
cd astro-soft-blog
docker compose up -d --build
```

容器内部会自动完成打包并启动轻量 Nginx，访问 `http://你的服务器IP:8080` 即可查看。

## 方式二：Linux 本地预览（需 Node.js 20+）

```bash
chmod +x start-linux.sh
./start-linux.sh
```

## 方式三：Cloudflare Pages 免费托管

将仓库关联到 Cloudflare Pages（构建命令 `npm run build`，输出目录 `dist`），即可免费获得全球 CDN 加速与 HTTPS 域名。
