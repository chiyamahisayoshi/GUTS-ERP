# GUTS-ERP

日本租车公司的 ERP API 第一版，使用 Node.js 24、Fastify 和 MySQL 8.4。所有 MySQL 访问封装在 repository 数据访问层中，便于以后迁移数据库主机。

## 第一版范围

- 账号管理：bcrypt 密码哈希（cost 12）、账号启停、失败登录锁定 15 分钟
- 本部、直营店、加盟店及总部账号管理
- 角色与稳定的权限标识符，支持角色权限和账号级权限
- 为 GUTS-Parking 签发 HS256 JWT，支持 issuer、audience 和有效期校验
- 车辆主数据的创建、查询、更新；车辆由 ERP 签发固定 UUID
- MySQL schema migration 和首次总部管理员初始化
- 车辆按门店隔离；只有总部账号可以创建门店、账号、角色并分配权限

运行时不调用 AI 或外部 token 服务。

## 本地开发

需要 Node.js 24 和 MySQL 8.4。

1. 执行 `npm ci`。
2. 将 `.env.example` 复制为 `.env`，配置数据库连接、至少 32 字节的随机 `JWT_SECRET` 和 `PUBLIC_BASE_URL`。
3. 创建空的 `guts_erp` 数据库和应用数据库用户。
4. 执行 `npm run migrate`。
5. 在 `.env` 设置 `ADMIN_USERNAME`、`ADMIN_DISPLAY_NAME`、`ADMIN_PASSWORD`（12–128 字符），以及可选的 `HQ_SITE_CODE` / `HQ_SITE_NAME`，再执行 `npm run seed:admin`。若账号已存在，初始化命令会拒绝覆盖。
6. 执行 `npm test`，使用 `npm start` 启动服务。

服务默认只监听 `127.0.0.1:3000`。数据库密码、JWT 密钥和管理员初始化密码均由环境变量提供，不会写入源代码。

## API

请求和响应使用 JSON。认证请求请设置 `Authorization` 头，值为 `Bearer` 加上登录接口返回的 access token。错误响应格式为 `{ "error": "stable_error_code" }`。

| 方法 | 路径 | 权限 | 说明 |
|---|---|---|---|
| POST | `/api/v1/auth/login` | 无 | 使用用户名和密码登录并签发 JWT |
| GET | `/api/v1/auth/me` | 已认证 | 返回当前账号和权限 |
| GET / POST | `/api/v1/sites` | `sites:read` / `sites:write` | 门店列表和创建 |
| GET | `/api/v1/permissions` | `accounts:write` | 稳定权限标识符目录 |
| GET / POST | `/api/v1/roles` | `accounts:write` | 角色列表和创建 |
| GET / POST | `/api/v1/accounts` | `accounts:write` | 账号列表和创建 |
| PATCH | `/api/v1/accounts/:id` | `accounts:write` | 更新门店、显示名、密码、状态、角色和账号级权限 |
| GET | `/api/v1/vehicles` | `vehicles:read` | 车辆列表，可按 `siteId`、`status` 筛选和分页 |
| GET | `/api/v1/vehicles/:id` | `vehicles:read` | 按 UUID 查询车辆 |
| POST | `/api/v1/vehicles` | `vehicles:write` | 创建车辆，由 ERP 分配 UUID |
| PATCH | `/api/v1/vehicles/:id` | `vehicles:write` | 更新车辆信息 |

当前权限标识符：`sites:read`、`sites:write`、`accounts:write`、`vehicles:read`、`vehicles:write`。JWT 含 `sub`、`username`、`siteId`、`siteCode`、`siteType`、`permissions` 和标准的 issuer、audience、expiry claims。GUTS-Parking 对接时需验证签名、issuer、audience 和有效期，并配置同一 JWT 密钥；密钥必须通过安全的环境变量分发，不能经非 HTTPS 传输。有效期默认为 1 小时、最长 24 小时。

门店创建和账号/角色/权限管理仅限总部账号。车辆按门店隔离，总部账号可处理全店数据。

## Debian 12 + 宝塔部署

1. 在宝塔安装 Node.js 24、MySQL 8.4 和 Nginx。MySQL 配置 `bind-address = 127.0.0.1`，然后重启 MySQL，确保数据库不对公网监听。
2. 创建数据库和专用应用账号（密码请换成随机长密码）：

   ```sql
   CREATE DATABASE guts_erp CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
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

本版本没有前端管理界面、refresh token、JWT 吊销列表、完整审计日志或预约模块。账号停用或权限变更后，已签发 JWT 在过期前仍可用（默认最长 1 小时）。车辆 API 仅覆盖主数据、状态和门店归属，不实现租车/预约业务规则。
