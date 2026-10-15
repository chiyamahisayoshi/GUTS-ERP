#!/usr/bin/env bash
# GUTS-ERP one-click installer for Debian 12 (+ Baota MySQL 8.4). Safe to re-run.
set -euo pipefail

APP_DIR="${APP_DIR:-/www/wwwroot/guts-erp}"
REPO="${REPO:-chiyamahisayoshi/GUTS-ERP}"
BRANCH="${BRANCH:-main}"
DB_NAME="${DB_NAME:-guts_erp}"
DB_USER="${DB_USER:-guts_erp}"

say() { printf '\n\033[1;32m== %s\033[0m\n' "$*"; }
die() { printf '\033[1;31m错误: %s\033[0m\n' "$*" >&2; exit 1; }
rand() { head -c 512 /dev/urandom | tr -dc 'A-Za-z0-9' | head -c "$1"; }

[ "$(id -u)" -eq 0 ] || die "请用 root 运行。"

say "1/7 检查 MySQL"
MYSQL_BIN="$(command -v mysql || true)"
[ -x /www/server/mysql/bin/mysql ] && MYSQL_BIN=/www/server/mysql/bin/mysql
[ -n "$MYSQL_BIN" ] || die "没找到 mysql 客户端，请先在宝塔软件商店安装 MySQL 8.4 并启动。"
(exec 3<>/dev/tcp/127.0.0.1/3306) 2>/dev/null || die "127.0.0.1:3306 没有 MySQL 在监听，请先在宝塔里启动 MySQL。"

say "2/7 安装 git / Node 24 / PM2"
if ! command -v git >/dev/null || ! command -v curl >/dev/null; then apt-get update -y && apt-get install -y git curl; fi
NODE_MAJOR="$(node -v 2>/dev/null | sed 's/^v\([0-9]*\).*/\1/' || true)"
if [ -z "${NODE_MAJOR:-}" ] || [ "$NODE_MAJOR" -lt 24 ]; then
  curl -fsSL https://deb.nodesource.com/setup_24.x | bash -
  apt-get install -y nodejs
fi
command -v pm2 >/dev/null || npm install -g pm2

say "3/7 获取代码"
if [ ! -d "$APP_DIR/.git" ]; then
  if [ -z "${GITHUB_TOKEN:-}" ]; then
    echo "仓库是私有的，需要 GitHub 只读令牌（GitHub → Settings → Developer settings → Fine-grained tokens，"
    echo "只选 $REPO 仓库，权限 Contents: Read-only）。"
    read -rsp "粘贴令牌（输入不显示）: " GITHUB_TOKEN; echo
  fi
  [ -n "$GITHUB_TOKEN" ] || die "令牌为空。"
  mkdir -p "$(dirname "$APP_DIR")"
  git clone --branch "$BRANCH" "https://x-access-token:${GITHUB_TOKEN}@github.com/${REPO}.git" "$APP_DIR"
  git -C "$APP_DIR" remote set-url origin "https://github.com/${REPO}.git"
  git -C "$APP_DIR" config credential.helper "store --file /root/.guts-erp-git-credentials"
  umask 077
  printf 'https://x-access-token:%s@github.com\n' "$GITHUB_TOKEN" > /root/.guts-erp-git-credentials
  umask 022
else
  git -C "$APP_DIR" pull --ff-only
fi
cd "$APP_DIR"
npm ci --omit=dev

say "4/7 创建数据库和 .env"
ADMIN_PASS=""
ADMIN_USER="${ADMIN_USERNAME:-admin}"
if [ ! -f .env ]; then
  if [ -z "${MYSQL_ROOT_PASSWORD:-}" ]; then
    echo "需要 MySQL root 密码（宝塔 → 软件商店 → MySQL → 设置 → root 密码）。"
    read -rsp "MySQL root 密码（输入不显示）: " MYSQL_ROOT_PASSWORD; echo
  fi
  read -rp "访问域名（如 https://erp.example.jp ，还没定就直接回车）: " BASE_URL || true
  BASE_URL="${BASE_URL:-http://127.0.0.1:3000}"
  DB_PASS="$(rand 32)"
  ADMIN_PASS="$(rand 20)"
  MYSQL_PWD="$MYSQL_ROOT_PASSWORD" "$MYSQL_BIN" -h127.0.0.1 -uroot <<SQL
CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
CREATE USER IF NOT EXISTS '${DB_USER}'@'127.0.0.1' IDENTIFIED BY '${DB_PASS}';
ALTER USER '${DB_USER}'@'127.0.0.1' IDENTIFIED BY '${DB_PASS}';
GRANT ALL PRIVILEGES ON \`${DB_NAME}\`.* TO '${DB_USER}'@'127.0.0.1';
FLUSH PRIVILEGES;
SQL
  umask 077
  sed -e "s|^PUBLIC_BASE_URL=.*|PUBLIC_BASE_URL=${BASE_URL}|" \
      -e "s|^DB_USER=.*|DB_USER=${DB_USER}|" \
      -e "s|^DB_PASSWORD=.*|DB_PASSWORD=${DB_PASS}|" \
      -e "s|^DB_NAME=.*|DB_NAME=${DB_NAME}|" \
      -e "s|^JWT_SECRET=.*|JWT_SECRET=$(rand 64)|" \
      -e '/^# Used only by npm run seed:admin/d;/^ADMIN_/d' .env.example > .env
  chmod 600 .env
  umask 022
else
  echo ".env 已存在，保留不动。"
fi

say "5/7 初始化数据库表"
npm run migrate

say "6/7 创建首个总部管理员"
if [ -n "$ADMIN_PASS" ]; then
  ADMIN_USERNAME="$ADMIN_USER" ADMIN_DISPLAY_NAME="总部管理员" ADMIN_PASSWORD="$ADMIN_PASS" npm run seed:admin
else
  echo "跳过（已安装过）。"
fi

say "7/7 启动服务并安装 erp 命令"
pm2 startOrReload ecosystem.config.cjs --update-env
pm2 save
pm2 startup systemd -u root --hp /root >/dev/null 2>&1 || true
chmod +x deploy/erp.sh
ln -sf "$APP_DIR/deploy/erp.sh" /usr/local/bin/erp

sleep 2
curl -fsS http://127.0.0.1:3000/health && echo || die "服务没起来，运行 erp logs 查看原因。"

echo
echo "安装完成。"
if [ -n "$ADMIN_PASS" ]; then
  echo "管理员账号: $ADMIN_USER"
  echo "管理员密码: $ADMIN_PASS   （只显示这一次，请立刻保存！）"
fi
echo "以后更新只需要执行:  erp update"
echo "其他命令:            erp status | logs | restart | domain https://你的域名"
