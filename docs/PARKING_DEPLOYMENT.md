# ERP 駐車場ボードのデプロイ

ERP はセマンティックバージョニングを使用します。互換性を保つバグ修正ではpatch、
後方互換の機能追加ではminor、互換性を壊す変更ではmajorを更新し、`package.json` と
`package-lock.json` のバージョンを一致させます。

駐車場ボードは ERP Fastify プロセス内で動作し、ERP と同じ MySQL データベースの
`parking_*` テーブルを使用します。ログイン、JWT、拠点スコープ、権限は ERP と共通です。
本番用に `apps/parking` の Node/SQLite プロセス、PM2 ecosystem、別のログイン情報、
`PARKING_API_*` / `PARKING_BACKEND_URL` は必要ありません。旧 SQLite ファイルは移行と
照合のための原本として保管し、自動削除・上書きしないでください。

## 新規または既存ERPのセットアップ

1. ERP の MySQL 8.0/8.4 または MariaDB 10.11（10.11.10を含む）データベースと `.env` を用意します。
   `DB_*`、`JWT_SECRET`（32バイト以上）、`JWT_ISSUER`、`JWT_AUDIENCE`、
   `PUBLIC_BASE_URL` を設定してください。
2. `npm ci` と `npm run migrate` を実行します。Migration `003_parking_mysql.sql` は
   ERPアカウントの権限カタログへ `parking:read`、`parking:write`、`parking:admin` を
   追加します。
   `headquarters_admin` に3権限が付与されます。その他の役割には「役割」画面で必要な
   駐車権限を割り当てます。
3. VPSが空の新規ERPなら、Parking SQLiteのimportは不要です。駐車場ボードも同じERP
   MySQLとERPアカウントを使います。既存ParkingのSQLiteデータがある場合だけ、先に
   [PARKING_DATABASE_MIGRATION.md](PARKING_DATABASE_MIGRATION.md) の手順でマッピングを
   作成し、preflight・バックアップ・明示的な `--apply` を実行します。旧Parkingの
   各テナントは異なるERP拠点へ明示的に対応付けます。旧パスワードは移行しません。
4. 初期ERPアカウントは `npm run seed:admin` で作成し、スタッフと権限はERPのアカウント/
   役割管理で運用します。Parking専用のアカウントシステムはありません。
5. `npm run typecheck`、`npm run build`、`npm test` を実行してから ERP のみを起動します。
   `deploy/erp.sh` と `ecosystem.config.cjs` は ERP プロセスだけを管理します。
6. 空の本番DBでは `/health` が200を返すこと、ERPログインで作成したスタッフが割り当てられた
   拠点とParking権限だけを使えること、エラー発生時にログが書き込まれることを確認します。
   バックアップを別DBへ復元できることも本番Goの必須条件です。

## 既存のParkingサーバーから切り替える

事前にSQLiteの一貫性バックアップとERP MySQLバックアップを取得し、旧テナント・ユーザー・
車両をERP拠点・アカウント・車両へ対応付けます。preflightの行数、チェックサム、
未リンク車両件数を確認したあとにだけimportを適用してください。移行後、ERPログインで
各拠点の駐車ボードを開き、車両、位置、状態、タスク、査定、損傷マーカー、店舗・距離、
管理設定をサンプルだけでなく行数とID対応を含めて照合します。

検証・利用者受け入れが終わるまでSQLite原本とバックアップを保管します。旧Parkingの
PM2プロセスは切り替え完了後に停止しても、データファイルやPM2定義を削除しないで
ください。復旧時は旧アプリと原本を使う前に、ERP側で切替後に行われた更新をどう扱うか
確認してください。両方を同時に利用すると別々の更新が発生するため、二重稼働はしません。

### 既存Parkingデータを移行する場合の本番切替Go/No-Goチェック

以下がすべて完了するまで旧Parkingを停止・削除せず、本番切替を承認しないでください。

1. 旧Parkingを停止し、SQLite原本とSQLite整合性バックアップを読み取り専用で保管する。
   ERP MySQL全体もバックアップし、復元可能性を確認する。
2. ERP migrationを適用し、importerのread-only preflightで全テナント・ユーザーの明示的な
   拠点/アカウント対応、車両UUID対応、テーブル別行数、チェックサム、未リンク車両を確認する。
   不明な対応があれば中止し、推測で補完しない。
3. MySQLへimportし、出力された行数・ID対応・checksumsを記録する。ERPアカウントでログインし、
   各拠点のボード、権限別の閲覧/更新/管理、車両移動と位置保存、レイアウト/区画線、査定・
   損傷3Dマーカー、ジョブ、管理設定、WebSocket更新を確認する。
4. オンライン状態で通常のERP操作、HTTPS、WebSocket、`/health`、PWAの初回インストールを
   検証する。PWAは静的アプリshellのみをオフライン表示し、API/認証/業務データはオフライン
   利用できないことを確認する。
5. 全テナントの件数とID対応を照合し、利用者受け入れと運用責任者の承認を記録する。
   実MySQLへのmigration/import/restore試験が未実施の場合はNo-Goとし、本番切替後も原本と
   バックアップを保持する。

### ロールバック

切替後に不具合が見つかったら、まずERP更新を停止し、現在のERP MySQLを別の障害調査用
バックアップとして保存してください。旧Parkingを再開する場合は、旧SQLite原本と元の旧
アプリ設定を使用します。旧アプリへ切り戻してもERPで切替後に行われた変更は反映されないため、
ERP切替後の更新を記録・照合し、必要な更新を旧側へ手作業で反映するか、ERPへ復旧するまで
旧側を読み取り専用としてください。両方の書き込みを並行させないでください。

誤ったERP importを取り消す必要がある場合は、書き込みを停止した状態で、検証済みの
切替前ERP MySQLバックアップ全体を別環境へ復元して内容を確認します。復元はERP全体の
切替後データを置き換える操作です。切替後のERPデータを保存・照合し、所有者の承認を得る
までは本番DBへ復元しないでください。importerは既存データを上書き・削除しません。

## リバースプロキシ

WebSocket のみHTTP upgradeを通します。既存のHTTPSサイト設定は維持し、次のlocationを
追加してください。

```nginx
location /api/v1/parking/ws {
    proxy_pass http://127.0.0.1:3000/api/v1/parking/ws;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_read_timeout 3600s;
}
```

ERPのWebSocketは短命・一回限りのERP JWT ticketを検証し、接続をユーザーのERP拠点へ
限定します。HTTP APIもERP JWTを検証し、site IDはリクエスト本文から受け付けません。

## 更新と運用

通常の `erp update`、`erp status`、`erp logs`、`erp restart` コマンドがERPプロセスだけを
対象にします。旧 `guts-parking` PM2プロセスが残る場合は、移行を検証してから運用者が
個別に停止してください。`/health` はMySQL接続も確認し、DB障害時は503を返します。
ERPのサーバー5xxとブラウザー実行時エラーは `.runtime/erp-errors.log`（`ERP_ERROR_LOG_PATH`
で変更可能）に記録されます。ログは機密値をマスクし、最大1 MiBの現行+ローテート各1個を
保持します。VPS上でのログ書込権限、rotation、MySQL復旧、バックアップ復元を実地確認し、
各migrationは一度適用した後に編集せず、新しい番号のmigrationを追加します。
