# Soft-Blog · 柔和毛玻璃个人博客

参考 `vps-craft.com` 柔和渐变背景与毛玻璃卡片风格打造的纯 Markdown 个人博客，基于 **Astro** 构建，同时兼容 **Windows** 与 **Linux**。

## 1. 怎么写新文章？（纯小白必看）

1. 打开 `src/content/posts/` 文件夹。
2. 新建一个 `.md` 文件（例如 `hello.md`）。
3. 在文件开头写入标题、简介、日期和分类，下面正常写 Markdown 正文即可：

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

## 2. Windows 端使用

- **最简单方式**：直接双击根目录的 `start-win.bat`，浏览器打开 `http://localhost:4321`。
- **命令行方式**：
  ```powershell
  npm install
  npm run dev
  ```

## 3. Linux 端使用与部署

- **本地预览**：
  ```bash
  chmod +x start-linux.sh
  ./start-linux.sh
  ```
- **打包上线（生成纯静态网页 `dist/`）**：
  ```bash
  npm run build
  ```
  把生成的 `dist/` 目录丢到 Nginx、1Panel、宝塔面板，或直接关联 GitHub 部署到 **Cloudflare Pages / Vercel**（构建命令 `npm run build`，输出目录 `dist`），即可免费全球访问。
