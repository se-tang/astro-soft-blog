# 零基础用 Astro 搭建高颜值博客：柔和光斑 + 毛玻璃护眼皮肤（Linux 小白一键版）

很多人想搭一个自己的 Markdown 博客，但要么觉得 WordPress 太重，要么觉得默认主题“非纯白即纯黑”，看久了刺眼。

本教程专为**零基础小白**设计：不需要懂前端代码，不需要在 Linux 上折腾 Node.js 或 npm，只要一台刚装好系统的空白 Linux 服务器（或本地 Linux 电脑），**3 步就能跑起来**。

---

## 一、 这套博客美化的 4 个核心细节

1. **拒绝刺眼的纯白与纯黑**：浅色模式用柔白 `#f8fafc`，深色模式用带微弱紫调的 `#0b080f`。
2. **零卡顿的柔和光斑**：用两层大尺寸 `radial-gradient` 径向渐变在左上角（暖琥珀）与右下角（淡紫）铺出柔和光晕，不卡顿且护眼。
3. **毛玻璃卡片质感**：文章卡片采用半透明底色 + `backdrop-filter: blur(15px)`，让底层光斑与 `40px` 细网格若隐若现地透出来。
4. **纯 Markdown 写作**：写文章只需往 `src/content/posts/` 丢 `.md` 文件，自动生成分类筛选、归档与 RSS。

---

## 二、 一条命令全自动部署（最推荐）

在一台全新的空白 Linux 服务器上，你**不需要手动装 Docker、不需要装 Node.js / npm**，直接复制运行这一条命令：

```bash
curl -fsSL https://raw.githubusercontent.com/se-tang/astro-soft-blog/main/install.sh | bash
```

脚本会自动完成：`检查安装 git/Docker` → `拉取仓库` → `容器内构建并启动`，全程日志精简不刷屏。完成后会直接打印出你的访问地址（`http://你的服务器IP:8080`）。

> 如果是云服务器，记得在控制台安全组放行 `8080` 端口；正式上线建议配合 1Panel / 宝塔 / Caddy 反向代理绑定域名并开启 HTTPS。

---

<details>
<summary>如果想手动分步操作（或使用国内服务器镜像），点此展开</summary>

### 1. 安装 Docker
```bash
# 海外服务器官方脚本
curl -fsSL https://get.docker.com | sh && systemctl enable --now docker

# 国内服务器备用（阿里云镜像）
# curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun && systemctl enable --now docker
```

### 2. 拉取代码并启动
```bash
git clone https://github.com/se-tang/astro-soft-blog.git
cd astro-soft-blog
docker compose up -d --build
```

</details>

---

## 五、 以后怎么写新文章、更新博客？

所有文章都是纯文本 `.md` 文件，存放在 `soft-blog/src/content/posts/` 目录里。

1. 在 `src/content/posts/` 下新建一个文件，比如 `my-first-post.md`，写入以下内容：

```markdown
---
title: "我的第一篇博客"
description: "一句话介绍这篇文章"
pubDate: 2026-11-17
category: "随笔"
tags: ["生活", "记录"]
---

这里开始写你的 Markdown 正文内容……
```

2. 回到 `soft-blog` 目录，重新执行一次启动命令即可更新上线：
```bash
docker compose up -d --build
```

---

## 附：如果不想买服务器，怎么免费托管？

如果你连 Linux VPS 都不想买，可以直接把这套模板 Fork 到你的 GitHub 账号，然后用 **Cloudflare Pages** 免费托管：
1. 登录 Cloudflare 控制台 → **Workers 和 Pages** → **创建** → 关联你的 `soft-blog` 仓库。
2. 构建设置填写：
   - **框架预设**：`Astro`
   - **构建命令**：`npm run build`
   - **输出目录**：`dist`
3. 点击部署，几十秒后即可获得免费的全球 CDN 加速与 HTTPS 网址。
