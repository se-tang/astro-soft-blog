#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

if [ ! -d "node_modules" ]; then
  echo "[Soft-Blog] 首次运行，正在安装依赖..."
  npm install
fi

echo "[Soft-Blog] 正在启动本地预览服务器 (http://localhost:4321)..."
npm run dev
