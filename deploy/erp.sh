#!/usr/bin/env bash
# `erp` management command (symlinked to /usr/local/bin/erp by install.sh).
set -euo pipefail

APP_DIR="$(cd "$(dirname "$(readlink -f "$0")")/.." && pwd)"
cd "$APP_DIR"

install_dependencies() {
  npm ci --omit=dev
  if [ -f apps/parking/.env ]; then
    npm ci --omit=dev --prefix apps/parking
  fi
}

reload_services() {
  pm2 reload ecosystem.config.cjs --update-env
  if [ -f apps/parking/.env ]; then
    pm2 startOrReload apps/parking/ecosystem.config.cjs --update-env
  fi
}

case "${1:-help}" in
  update)
    old="$(git rev-parse HEAD)"
    git fetch --quiet origin
    if [ "$old" = "$(git rev-parse '@{u}')" ]; then echo "已经是最新版本。"; exit 0; fi
    git pull --ff-only
    if install_dependencies && npm run migrate && reload_services; then
      sleep 2
      curl -fsS http://127.0.0.1:3000/health && echo
      echo "更新完成: $(git rev-parse --short HEAD)"
    else
      echo "更新失败，回滚到 ${old:0:7}" >&2
      git reset --hard "$old"
      install_dependencies && reload_services
      exit 1
    fi
    ;;
  passwd)
    u="${2:-admin}"
    p="$(head -c 512 /dev/urandom | tr -dc 'A-Za-z0-9' | head -c 20)"
    RESET_USERNAME="$u" RESET_PASSWORD="$p" npm run --silent reset:password
    echo "账号: $u"; echo "新密码: $p   （只显示这一次，请保存）"
    ;;
  status) pm2 status; curl -fsS http://127.0.0.1:3000/health && echo ;;
  logs) pm2 logs guts-erp --lines "${2:-100}" ;;
  restart)
    pm2 restart guts-erp --update-env
    if [ -f apps/parking/.env ]; then pm2 restart guts-parking --update-env; fi
    ;;
  domain)
    [ -n "${2:-}" ] || { echo "用法: erp domain https://erp.example.jp"; exit 1; }
    sed -i "s|^PUBLIC_BASE_URL=.*|PUBLIC_BASE_URL=$2|" .env
    pm2 restart guts-erp --update-env
    ;;
  *)
    echo "用法: erp update | status | logs [行数] | restart | passwd [账号] | domain <https://域名>"
    ;;
esac
