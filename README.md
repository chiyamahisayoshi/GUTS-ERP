# GUTS-ERP

**版本：0.3.3**

## 新 VPS 部署（Debian 12 + 宝塔）

### 1. 准备 VPS 和数据库

在宝塔安装并启动 MariaDB 10.11（部署目标版本为 10.11.10；尚未连接生产 VPS 实测），确保数据库在
`127.0.0.1:3306` 监听。不要把数据库端口开放到公网。准备好域名，并将 DNS 指向 VPS。

### 2. 运行安装程序

用 SSH 登录 VPS，以 `root` 身份执行。安装程序会安装 Node.js 24 和 PM2、创建 ERP 数据库
及专用数据库账号、生成 `.env`、迁移数据库、创建首个管理员并启动 ERP。

```bash
curl -fsSL https://raw.githubusercontent.com/chiyamahisayoshi/GUTS-ERP/main/deploy/install.sh -o install.sh
bash install.sh
```

按提示输入 MariaDB `root` 密码和 ERP 访问域名（例如 `https://erp.example.jp`）。安装完成时
管理员密码只显示一次，请立即保存并妥善保管。若安装程序报告数据库未启动或没有监听
`127.0.0.1:3306`，先在宝塔启动 MariaDB，再重新运行安装命令。

### 3. 配置域名和 HTTPS

在宝塔「网站」中添加域名、申请并启用 HTTPS 证书，将网站反向代理到：

```text
http://127.0.0.1:3000
```

确保反向代理传递 `Host`、`X-Real-IP`、`X-Forwarded-For` 和 `X-Forwarded-Proto` 请求头。
首次配置后，用浏览器打开 `https://你的域名`。

### 4. 验证安装

在 VPS 上执行：

```bash
erp status
curl -fsS https://你的域名/health
```

健康检查应返回 `{"status":"ok"}`。如启动失败，查看服务日志：

```bash
erp logs
```

数据库连接和 JWT 配置保存在 `/www/wwwroot/guts-erp/.env`，仅允许服务器运行账号读取。
修改配置后运行 `erp restart`。更新时先备份数据库，再运行 `erp update`。

## 版本号规则

每次发布都更新版本号：兼容性 bug 修复增加 patch（例如 `0.3.2` → `0.3.3`），后向兼容的
功能更新增加 minor，破坏兼容性的更新增加 major。`package.json` 和 `package-lock.json`
中的版本必须保持一致。
