# GUTS-ERP

日本租车公司的 ERP 第一版，提供可在电脑、iPad 和手机使用的响应式管理界面与 API。使用 TypeScript 构建前端，服务端为 Node.js 24 + Fastify，数据库支持 MySQL 8.0/8.4 与 MariaDB 10.11 LTS。浏览器端是静态构建文件，不需额外运行前端服务；所有数据库访问封装在 repository 数据访问层中。

## 第一版范围

- 账号管理：bcrypt 密码哈希（cost 12）、账号启停、失败登录锁定 15 分钟
- 本部、直营店、加盟店及总部账号管理
- 角色与稳定的权限标识符，支持角色权限和账号级权限
- ERP API 使用 HS256 JWT，支持 issuer、audience 和有效期校验
- 车辆主数据的创建、查询、更新；车辆由 ERP 签发固定 UUID
- 门店接待预约：记录客人、租期、预留车辆，办理取车、还车或取消
- 响应式运营工作台：登录、运营概览、门店、员工/账号、角色权限、车辆和预约接待页面
- MySQL schema migration 和首次总部管理员初始化
- 车辆按门店隔离；只有总部账号可以创建门店、账号、角色并分配权限
- ERP 原生停车板：与 ERP 共用 MySQL、账号、JWT、权限及门店隔离，支持实时更新、地图布局编辑、车辆损伤 3D 检查和原 SQLite 数据导入

运行时不调用 AI 或外部 token 服务。

## 本地开发

需要 Node.js 24 和 MySQL 8.0/8.4 或 MariaDB 10.11 LTS。宝塔上如果 MySQL 8.4 安装失败，建议改装 MariaDB 10.11 LTS；应用通过 MySQL 协议连接，配置方式相同。

1. 执行 `npm ci` 和 `npm run build`。
2. 现有停车数据应保存在仓库之外的 SQLite 路径；迁移前不要删除或覆盖该文件。
3. 将 `.env.example` 复制为 `.env`，配置数据库连接、至少 32 字节的随机 `JWT_SECRET` 和 `PUBLIC_BASE_URL`。
4. 创建空的 `guts_erp` 数据库和应用数据库用户。
5. 执行 `npm run migrate`。
6. 在 `.env` 设置 `ADMIN_USERNAME`、`ADMIN_DISPLAY_NAME`、`ADMIN_PASSWORD`（12–128 字符），以及可选的 `HQ_SITE_CODE` / `HQ_SITE_NAME`，再执行 `npm run seed:admin`。若账号已存在，初始化命令会拒绝覆盖。
7. 执行 `npm run typecheck`、`npm test`、`npm run test:parking`，使用 `npm start` 启动服务。

浏览器访问服务根路径 `/` 即可进入管理界面。前端 TypeScript 源码在 `src/ui/`，构建产物 `public/app.js` 已随仓库发布，因此线上使用 `npm ci --omit=dev` 即可运行，无需前端运行时或独立应用服务器。PWA service worker 只缓存应用 shell 静态资源；API、登录凭据和业务数据不缓存，离线时不能执行需要服务器的数据操作。

服务默认只监听 `127.0.0.1:3000`。数据库密码、JWT 密钥和管理员初始化密码均由环境变量提供，不会写入源代码。

### 错误日志与磁盘限制

ERP 只持久化未处理的服务端 5xx 和明确的停车系统集成异常；参数校验、权限拒绝、登录失败及业务冲突不会写入错误日志。日志为精简 JSON 行，仅包含时间、HTTP 方法、路由路径、固定错误代码和通用说明；不记录请求体、请求头、凭据、JWT、API key 或 query string，也不保存 stack。

默认路径是运行目录下 `.runtime/erp-errors.log`（一份活动日志和一份 `.1` 轮转日志），该目录已加入 `.gitignore`。可用 `ERP_ERROR_LOG_PATH` 指定其他绝对路径；部署到 `/www/wwwroot/guts-erp` 时默认位置为 `/www/wwwroot/guts-erp/.runtime/erp-errors.log`。每个文件最多 1 MiB，轮转时删除更旧日志，因此总占用上限约 2 MiB；目录创建及文件权限尽可能限制为仅服务账号可读写。写入或轮转失败会明确报到 console/PM2 日志，不会静默忽略。达到上限后自动轮转，手动清理时可删除该路径及其 `.1` 文件。

ERP 已提供原生停车板页面和 `/api/v1/parking/*` API，停车运行数据位于与ERP共用的MySQL数据库，使用ERP JWT、账号、权限和站点隔离。迁移原有SQLite数据前必须按 [`docs/PARKING_DATABASE_MIGRATION.md`](docs/PARKING_DATABASE_MIGRATION.md) 执行显式映射、预检、备份和导入；没有真实数据导入及验收前，应保留旧SQLite原件和备份。

## API

请求和响应使用 JSON。认证请求请设置 `Authorization` 头，值为 `Bearer` 加上登录接口返回的 access token。错误响应格式为 `{ "error": "stable_error_code" }`。

| 方法 | 路径 | 权限 | 说明 |
|---|---|---|---|
| POST | `/api/v1/auth/login` | 无 | 使用用户名和密码登录并签发 JWT |
| GET | `/api/v1/auth/me` | 已认证 | 返回当前账号和权限 |
| GET | `/api/v1/dashboard/stats` | 已认证 | 返回当前门店或总部运营统计 |
| GET / POST | `/api/v1/sites` | `sites:read` / `sites:write` | 门店列表和创建 |
| GET | `/api/v1/permissions` | `accounts:write` | 稳定权限标识符目录 |
| GET / POST | `/api/v1/roles` | `accounts:write` | 角色列表和创建 |
| GET / POST | `/api/v1/accounts` | `accounts:write` | 账号列表和创建 |
| PATCH | `/api/v1/accounts/:id` | `accounts:write` | 更新门店、显示名、密码、状态、角色和账号级权限 |
| GET | `/api/v1/vehicles` | `vehicles:read` | 车辆列表，可按 `siteId`、`status` 筛选和分页 |
| GET | `/api/v1/vehicles/:id` | `vehicles:read` | 按 UUID 查询车辆 |
| POST | `/api/v1/vehicles` | `vehicles:write` | 创建车辆，由 ERP 分配 UUID |
| PATCH | `/api/v1/vehicles/:id` | `vehicles:write` | 更新车辆信息 |
| GET / POST | `/api/v1/reservations` | `reservations:read` / `reservations:write` | 查询预约、登记客人与租期并预留车辆 |
| PATCH | `/api/v1/reservations/:id` | `reservations:write` | 办理取车、还车或取消；同步车辆状态 |
| GET | `/api/v1/parking/bootstrap` | `parking:read` | 读取当前ERP站点的停车板、车辆、任务、査定与管理数据 |
| PATCH | `/api/v1/parking/vehicles/:id` | `parking:read`, `parking:write` | 更新车辆位置、状态、选项、评估和损伤标记 |
| POST / PATCH / DELETE | `/api/v1/parking/*` | `parking:admin` | 管理停车区域、状态、类别、选项、门店、距离、评估项与损伤类型 |
| POST / PATCH / DELETE | `/api/v1/parking/jobs` | `parking:read`, `parking:write` | 管理当前站点车辆搬运任务 |

当前权限标识符：`sites:read`、`sites:write`、`accounts:write`、`vehicles:read`、`vehicles:write`、`parking:read`、`parking:write`、`parking:admin`、`reservations:read`、`reservations:write`。停车API和WebSocket使用ERP签发的JWT与site权限；停车数据通过ERP MySQL数据访问层读写。总部管理员默认获得停车三项权限，其他角色由管理员在角色管理中配置。JWT含 `sub`、`username`、`siteId`、`siteCode`、`siteType`、`permissions` 和标准 issuer、audience、expiry claims；有效期默认为1小时、最长24小时。

门店创建和账号/角色/权限管理仅限总部账号。车辆按门店隔离，总部账号可处理全店数据。

## 一键部署（推荐）

前提：宝塔里已安装并启动 MySQL 8.0/8.4 或 MariaDB 10.11，并在 `[mysqld]` 加了 `bind-address = 127.0.0.1`。用 root 执行：

```bash
curl -fsSL https://raw.githubusercontent.com/chiyamahisayoshi/GUTS-ERP/main/deploy/install.sh -o install.sh && bash install.sh
```

脚本会安装 Node 24 与 PM2、拉取公开仓库、自动建库和专用账号、生成 `.env` 与随机密钥、运行数据库迁移、创建管理员、启动服务并安装 `erp` 命令。安装后浏览器打开绑定的域名即可登录：

| 命令 | 作用 |
|------|------|
| `erp update` | 拉取最新代码、迁移、平滑重启；失败自动回滚 |
| `erp status` / `erp logs` / `erp restart` | 查看状态/日志/重启 |
| `erp domain https://域名` | 修改域名并重启 |
| `erp passwd admin` | 重置管理员密码并显示一次 |

之后只需在宝塔「网站」将域名反向代理到 `http://127.0.0.1:3000` 并开启 HTTPS。总部账号可在界面创建门店、员工与角色；每位员工可用自己的手机、电脑或 iPad 登录，按所属门店权限操作预约接待和车辆。数据库连接信息在 `/www/wwwroot/guts-erp/.env`（修改后 `erp restart`）。

## Debian 12 + 宝塔手动部署

1. 在宝塔安装 Node.js 24、MySQL 8.0/8.4（或 MariaDB 10.11 LTS）和 Nginx。如果 MySQL 8.4 安装失败，优先选择 MariaDB 10.11 LTS。数据库配置 `bind-address = 127.0.0.1`，然后重启数据库，确保数据库不对公网监听。
2. 创建数据库和专用应用账号（密码请换成随机长密码）：

   ```sql
   CREATE DATABASE guts_erp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   CREATE USER 'guts_erp'@'127.0.0.1' IDENTIFIED BY 'USE_A_LONG_RANDOM_PASSWORD';
   GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, INDEX, REFERENCES
     ON guts_erp.* TO 'guts_erp'@'127.0.0.1';
   FLUSH PRIVILEGES;
   ```

3. 通过宝塔文件管理器或可信的发布流程部署到 `/www/wwwroot/guts-erp`，在该目录执行 `npm ci --omit=dev`。
4. 将 `.env.example` 复制为 `.env`，配置数据库连接、随机 `JWT_SECRET`（至少 32 字节）、`PUBLIC_BASE_URL=https://你的域名`，以及首次管理员信息。确保 `.env` 不在网站公开目录，并执行 `chmod 600 .env` 限制读取权限。
5. 先执行 `npm run migrate` 和 `npm run seed:admin`，然后从 `.env` 删除首次管理员密码。运行账号应能读取运行所需的 `.env`。
6. 根据实际部署路径调整 `ecosystem.config.cjs` 的 `cwd`，用 PM2 启动并配置开机启动：

   ```sh
   cd /www/wwwroot/guts-erp
   pm2 start ecosystem.config.cjs
   pm2 save
   pm2 startup
   ```

   按 PM2 输出执行对应的 `sudo` 命令。服务仅监听 `127.0.0.1:3000`，防火墙不要开放 3000 端口。

7. 在宝塔“网站”中绑定域名、配置 HTTPS 证书和反向代理 `http://127.0.0.1:3000`。代理配置示例：

   ```nginx
   location / {
       proxy_pass http://127.0.0.1:3000;
       proxy_http_version 1.1;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $remote_addr;
       proxy_set_header X-Forwarded-Proto $scheme;
       proxy_read_timeout 30s;
   }
   ```

   Fastify 只信任本机回环地址作为代理；请保留覆盖 `X-Forwarded-For` 的设置。不要移除宝塔生成的 HTTPS server 和证书配置。
8. 使用 `curl https://你的域名/health` 确认返回 `{"status":"ok"}`，并检查 `pm2 status`、`pm2 logs guts-erp` 和宝塔 Nginx 错误日志。升级前备份数据库；后续 schema 变更应新增编号 migration，不要改已经执行过的 migration。

## 当前边界

预约接待目前覆盖预约登记、车辆预留、取车/还车和取消，并检查同车时间重叠及车辆可用状态；尚未接入外部预约来源、价格/费用、付款、驾照核验、电子合同或完整审计日志。账号停用或权限变更后，已签发 JWT 在过期前仍可用（默认最长 1 小时）；本版本也未提供 refresh token 或 JWT 吊销列表。
