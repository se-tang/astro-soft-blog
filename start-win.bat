@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist "node_modules" (
  echo [Soft-Blog] 首次运行，正在安装依赖...
  call npm install
)
echo [Soft-Blog] 正在启动本地预览服务器 (http://localhost:4321)...
call npm run dev
pause
