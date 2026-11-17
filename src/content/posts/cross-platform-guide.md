---
title: "Windows 与 Linux 跨平台运行与部署指南"
description: "同一份博客代码，如何在 Windows 本地写作预览，又如何无缝运行在 Linux 服务器或 Cloudflare Pages 上。"
pubDate: 2026-11-15
category: "运维部署"
tags: ["Windows", "Linux", "部署"]
---

本博客基于标准的 **Node.js + Astro** 构建，所有文件构建后会生成纯粹的静态 HTML/CSS/JS（在 `dist/` 目录），因此天然兼容 Windows 与 Linux。

## Windows 端本地预览

直接双击项目根目录的 `start-win.bat`，或者在终端运行：

```powershell
npm install
npm run dev
```

浏览器打开 `http://localhost:4321` 即可实时预览。

## Linux 端运行与部署

在 Ubuntu / Debian / CentOS 等 Linux 环境下，确保已安装 Node.js（建议 20+），运行：

```bash
chmod +x start-linux.sh
./start-linux.sh
```

如果要打包上线到 Nginx 或 Cloudflare Pages，只需执行：

```bash
npm run build
```

生成的 `dist/` 文件夹就是完整的静态网站，可以直接托管到任何地方。
