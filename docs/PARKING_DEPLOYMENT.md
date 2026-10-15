# 駐車場配置ボードの導入・更新

ERP に GUTS-Parking v1.9.1 を同梱しています。ERP は車両基本情報の正本、Parking は配置・洗車/給油/修理・オプション・評価/損傷・ジョブの正本です。車両情報の連携は Parking 画面を開いた時には実行せず、本部の担当者が「車両管理」から「ERP車両を同期」を押した時だけ実行します。

## 既存 Parking データを保護する

Parking の SQLite、セッション、ユーザー、駐車場、配置、車両、評価、ジョブは従来どおり Parking が管理します。ERP はこれらを MySQL に移行せず、Parking の SQLite ファイルも初期化・上書きしません。更新前に現在の Parking プロセスの `DATABASE_PATH` と `ERROR_LOG_PATH` を確認してください。以前の標準例は `/www/wwwroot/rentalcar-data/rentalcar.db` ですが、実際の設定値を必ず優先します。

```sh
pm2 env <ParkingのPM2 id> | grep -E 'DATABASE_PATH|ERROR_LOG_PATH'
cp -a /実際の/現在/rentalcar.db /実際の/現在/rentalcar.db.backup-$(date +%Y%m%d-%H%M%S)
```

バックアップ先は SQLite の `.db-wal` / `.db-shm` を含めて保護してください。稼働中データの整合性が必要な場合は、バックアップ前に Parking を停止するか SQLite のオンラインバックアップ手順を使います。旧データを別の新規パスへコピーしたり、既存の `.env` を置換したりしないでください。

### 初回同期前の車両マッピング確認

Parking の現行スキーマは `external_id` で ERP 車両と対応させますが、既存 SQLite の全車両が ERP UUID に対応済みとは確認できません。**初回同期前に必ずバックアップし、Parking 本店 tenant の全車両について `external_id` と ERP UUID・ナンバーを照合してください。**

```sh
sqlite3 /実際の/現在/rentalcar.db \
  "SELECT id, COALESCE(external_id, '<NULL>'), plate, vehicle_type FROM vehicles WHERE tenant_id = (SELECT id FROM tenants WHERE is_headquarters = 1) ORDER BY id;"
```

ERP と同じナンバーなのに `external_id` が `NULL` または別の値の車両は、初回同期時に重複登録されないようアダプターが同期を中止します（全角/半角と空白を正規化して照合）。一方、ERP と Parking でナンバー自体が異なる既存車両は自動対応付けできないため、一覧を人が確認してください。該当車両の履歴/配置を保持したまま、バックアップ後に管理者が一意の ERP UUID へマッピングします。SQLite の一意制約に違反した場合はトランザクションをロールバックし、重複行を削除して解決しないでください。

```sql
BEGIN IMMEDIATE;
UPDATE vehicles
   SET external_id = '確認済みのERP車両UUID'
 WHERE id = 確認済みの既存Parking車両ID
   AND tenant_id = (SELECT id FROM tenants WHERE is_headquarters = 1)
   AND external_id IS NULL
   AND plate = '確認済みのナンバー';
SELECT changes();
```

`changes()` が 1 の場合のみ `COMMIT;` を実行し、それ以外は `ROLLBACK;` します。既存 `external_id` が別の非 NULL 値なら、旧値も条件に含めて明示的に確認した UPDATE を別途行い、追加の人手レビューなしに書き換えないでください。既存 UUID が全て照合できた後に限り ERP の「ERP車両を同期」を使います。同期は車両を削除しないため、未対応の旧行もデータベースから消えません。

## 初回設定と鍵

1. ERP ルートと `apps/parking` の両方で `npm ci` を実行します。Parking の `node:sqlite` に対応する Node.js 24 を使用してください。
2. `apps/parking/.env` を作成し、既存データの正確な絶対パスを設定します。既存 Parking の `SESSION_SECRET` と `DATABASE_PATH` を引き継ぎ、`COOKIE_SECURE=1`、`ERROR_LOG_PATH`、`ERP_API_KEY` を設定してください。`ERP_API_KEY` はランダムな 32 バイト以上の秘密値にし、ERP `.env` の `PARKING_API_KEY` と完全一致させます。秘密値はブラウザー、ソース、PM2 ecosystem 設定へ記入しないでください。
3. ERP `.env` に `PARKING_BACKEND_URL=http://127.0.0.1:8001`、`PARKING_API_URL=http://127.0.0.1:8001/api/v1`、`PARKING_API_KEY=Parking側と同じ秘密値` を設定します。Parking API は同じサーバー内の loopback だけを HTTP で呼び出せます；loopback 以外への接続は HTTPS が必須です。Parking `.env` の `ERP_API_KEY` は ERP の `PARKING_API_KEY` と同じ値にします。API 鍵は ERP サーバーからの同期リクエストだけに使われます。

4. ERP 用 PM2 アプリを更新し、Parking プロセスを追加起動します。

```sh
cd /www/wwwroot/guts-erp
npm ci --omit=dev
pm2 start ecosystem.config.cjs
cd /www/wwwroot/guts-erp/apps/parking
npm ci --omit=dev
pm2 start ecosystem.config.cjs
pm2 save
```

### ERP エラーログ

ERP は未処理のサーバー 5xx と重要な Parking 連携例外だけを JSON Lines 形式で保存します。通常の 4xx、ログイン失敗、業務上の競合、アクセス履歴は記録しません。ログには時刻・HTTP メソッド・ルート・固定エラーコードと一般的な説明のみを記録し、リクエスト本文/ヘッダー、認証情報、JWT/API key、query string、stack は含めません。

既定の保存先は ERP の作業ディレクトリにある `.runtime/erp-errors.log` で、Git 管理対象外です。別の場所を使う場合は ERP の環境変数 `ERP_ERROR_LOG_PATH` に絶対パスを指定してください。現在のファイルと `.1` の最大 1 MiB の二世代を保持し、合計最大約 2 MiB です。上限到達時には古い世代を自動削除します。書き込み/ローテーションに失敗した場合は ERP の console/PM2 ログにエラーを出します。手動削除ではログ本体と `.1` を削除してください。

`apps/parking/ecosystem.config.cjs` は Parking を `127.0.0.1:8001` だけで待ち受けます。既存 Parking PM2 过程がある場合は、重複起動せず既存プロセスを停止してから設定を置き換えてください。両プロセスは同じアプリ専用サーバー上に置き、ポート 8001 をインターネットへ公開しないでください。

本番 `npm ci --omit=dev` では esbuild が入らないためビルドは実行しません。ERP の `public/app.js` はリポジトリに同梱されたビルド成果物で、`erp update` はその成果物を使用します。ソースからビルドする開発環境では dev dependencies を含む `npm ci` の後に `npm run build` を実行してください。

Parking の管理者・スタッフは従来の SQLite ユーザーでログインします。既存アカウント/パスワードを引き継ぎ、必要なら Parking の `npm run create-admin` / `npm run create-operator` を利用してください。ERP のログイン cookie/token は Parking に渡しません。ERP から発行する短命の HttpOnly cookie は `/parking` の経路だけで使われ、プロキシはそれを Parking に転送せず、Parking 自身の `rentalcar_session` のみを通します。両アプリは同一 HTTPS オリジン配下で動作します。

## Nginx / 宝塔 WebSocket 設定

通常の HTTPS サーバー設定を保ったまま、`location /` より前に WebSocket 用 location を追加します。ERP と Parking の HTTP/WebSocket は Nginx → ERP (`127.0.0.1:3000`) → Parking (`127.0.0.1:8001`) の順に通ります。

```nginx
location /parking/ws {
    proxy_pass http://127.0.0.1:3000/parking/ws;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_read_timeout 3600s;
}

location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_read_timeout 3600s;
}
```

Parking の WebSocket は元の `Host` と HTTPS 的 `X-Forwarded-Proto` を用いて `Origin` を検証します。ERP は WebSocket upgrade を `/parking/ws` から `/ws` へ渡し、同一のホスト・scheme と Parking の署名済みセッションを保持します。Parking の Helmet `SAMEORIGIN` / CSP 制限は弱めず、ERP の同一オリジン iframe だけを許可します。

## 同期対象と操作

- 同期対象は ERP で **active の直営店に所属する、retired 以外の全車両**です。加盟店車両、無効店舗の車両、登録抹消車両は除外します。複数の直営店は Parking の本店テナントを共有します。
- ERP UUID を `external_id` として使います。Parking に既にある UUID は既存の車種クラスを再利用し、新しい UUID は `その他` クラスで登録します；Parking にそのクラスがない場合、同期 API の具体的エラーを画面に表示します。
- 各同期 API 呼び出しは最大 500 台に分割します。送信項目は `external_id`、`plate`、`vehicle_type` のみで、**`parking_lot_id` は送信しません**。これにより既存 Parking 車両の配置、位置、ステータス、メモ、オプション、損傷/評価を ERP 同期が変更しません。
- 退役車両や削除車両は Parking から自動削除しません。記録と履歴を保ち、運用担当者が Parking 側で扱います。Parking から ERP への位置/状態同期もありません。
- 「車両管理」ページの「駐車場配置」は同一オリジン iframe を開きます。ERP ユーザーには `vehicles:read` が必要です。Parking の車両/配置/設定を変更する要求には ERP `vehicles:write` も必要です（ログイン、ログアウト、エラー報告を除く）。同期ボタンは本部ユーザーにのみ表示し、サーバー側で `vehicles:read` と `vehicles:write` の両方を検証します。Parking の board/API/WebSocket 操作は引き続き Parking の SQLite アカウントと権限でも保護されます。

同期の失敗は HTTP/API の状態と Parking 側の説明を画面に表示します。バッチ途中で失敗した場合、先に成功したバッチは取り消されません。設定を直した後、同じ手動同期を再実行できます（UUID upsert は冪等です）。

## 更新後の確認

`pm2 status` で `guts-erp` と `guts-parking` が稼働していることを確認します。ERP に `vehicles:read` の本部ユーザーでログインし、車両管理から配置ボードを開いて Parking の専用アカウントでログインしてください。ドラッグ位置を一台変更して保存した後、ERP の手動同期を行い、その位置が保持されることを確認します。さらに、HTTPS 経由で WebSocket が接続されることと同期結果の台数を確認してください。
