#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/se-tang/astro-soft-blog.git"
APP_DIR="astro-soft-blog"

echo "=========================================="
echo "  Astro Soft-Blog 一键部署脚本 (Linux)"
echo "=========================================="

# 1. 检查并安装基础依赖 (git / curl)
if ! command -v git >/dev/null 2>&1 || ! command -v curl >/dev/null 2>&1; then
  echo "[1/3] 正在安装 git 与 curl..."
  if command -v apt-get >/dev/null 2>&1; then
    apt-get update -qq >/dev/null
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq git curl >/dev/null
  elif command -v yum >/dev/null 2>&1; then
    yum install -y -q git curl >/dev/null
  elif command -v dnf >/dev/null 2>&1; then
    dnf install -y -q git curl >/dev/null
  fi
fi

# 2. 检查并静默安装 Docker
if ! command -v docker >/dev/null 2>&1; then
  echo "[1/3] 未检测到 Docker，正在静默安装..."
  curl -fsSL https://get.docker.com | sh >/dev/null 2>&1
  systemctl enable --now docker >/dev/null 2>&1 || true
else
  echo "[1/3] Docker 已就绪 ($(docker -v | awk '{print $3}' | tr -d ','))"
fi

# 3. 拉取或更新项目仓库
if [ -d "$APP_DIR/.git" ]; then
  echo "[2/3] 检测到已有目录，正在拉取最新代码..."
  git -C "$APP_DIR" pull -q origin main
else
  echo "[2/3] 正在克隆项目仓库..."
  git clone -q "$REPO_URL" "$APP_DIR"
fi

# 4. 构建并启动容器
echo "[3/3] 正在打包并启动博客容器（首次构建约需 1-2 分钟）..."
cd "$APP_DIR"
docker compose up -d --build --quiet-pull >/dev/null 2>&1

SERVER_IP=$(curl -s4m 3 https://ifconfig.me 2>/dev/null || hostname -I | awk '{print $1}')

echo "=========================================="
echo "  部署成功！请放行 8080 端口后访问："
echo "  http://${SERVER_IP:-你的服务器IP}:8080"
echo "=========================================="
