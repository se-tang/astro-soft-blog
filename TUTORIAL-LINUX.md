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

## 二、 第一步：在空白 Linux 上安装 Docker

服务器上只需要装 Docker 这一个软件（不需要装 Node.js / npm / Nginx），以 Ubuntu / Debian 为例：

```bash
curl -fsSL https://get.docker.com | sh
systemctl enable --now docker
```

---

## 三、 第二步：获取博客模板文件

因为你的电脑/服务器上目前什么文件都没有，直接拉取已经配置好柔和毛玻璃皮肤与 Docker 文件的整套模板即可（将下面的 `你的用户名` 替换为实际的 GitHub 用户名，或使用作者提供的压缩包）：

### 方式 A：通过 Git 拉取（推荐）
```bash
git clone https://github.com/se-tang/astro-soft-blog.git
cd astro-soft-blog
```

### 方式 B：通过压缩包上传（适合不会用 Git 的新手）
1. 在仓库页面点击 **Code → Download ZIP** 下载 `astro-soft-blog-main.zip`，上传到服务器（例如 `/root/` 目录）。
2. 解压并进入目录：
   ```bash
   unzip astro-soft-blog-main.zip
   cd astro-soft-blog-main
   ```

> **提示**：进入目录后，里面已经为你准备好了网页源码（`src/`）、字体、以及 Docker 部署所需的 `Dockerfile`、`docker-compose.yml` 和 `nginx.conf`。

---

## 四、 第三步：一键构建并启动博客

在 `astro-soft-blog` 目录下，只需执行这一条命令：

```bash
docker compose up -d --build
```

**这条命令在背后自动做了什么？**
- 它会根据根目录的 `Dockerfile`，自动从 **Docker Hub 官方仓库** 拉取 `node:22-alpine` 镜像在容器内打包网页，然后再拉取 `nginx:alpine` 镜像（仅约 45MB）对外提供网页服务；
- 整个过程全自动完成，不会污染你服务器本身的系统环境。

启动完成后，在浏览器输入 **`http://你的服务器IP:8080`**，就能看到博客首页了！（如果是云服务器，记得在安全组/防火墙放行 `8080` 端口；正式上线建议用 1Panel / 宝塔 / Caddy 反向代理绑定域名并开启 HTTPS。）

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
