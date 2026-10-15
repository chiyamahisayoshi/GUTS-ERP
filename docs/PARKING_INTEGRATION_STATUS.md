# Parking / ERP integration status

This records the current implementation and its release boundary. It is not a
claim that a production data migration or cutover has been completed.

## Implemented in this branch

- Parking board routes and persistence use `parking_*` tables in the ERP MySQL
  schema, the ERP account/JWT, stable parking permissions, and ERP site scope.
- ERP account administration is the only account system. Legacy Parking
  passwords are intentionally not imported; users receive ERP accounts and
  parking permissions through the ERP role/site administration.
- Parking includes board vehicles and status assignments, areas and map
  layouts, statuses, vehicle classes/options, stores/distances, jobs,
  assessment values, damage types and vehicle damage markers, plus site-scoped
  WebSocket updates.
- The ERP UI supports vehicle movement between parking areas, persisted map
  coordinates/layout markings, undo for the latest board actions, edge
  auto-scroll, and a Three.js 3D vehicle damage inspector.
- The explicit SQLite importer requires tenant/account/site mappings, supports
  preflight and dry-run, creates a source backup before writes, imports in a
  MySQL transaction, checks IDs/row counts, and does not copy legacy passwords
  or modify/delete the source SQLite database.
- The SQLite importer is only for transferring an existing legacy Parking
  database. A new/empty ERP deployment already uses the same ERP MySQL database
  for parking and must not run the importer.
- Server 5xx and explicitly caught parking failures retain sanitized messages
  and stack traces in the rotated ERP error log. The same-origin, rate-limited
  client error endpoint captures browser exceptions, unhandled promise
  rejections, and failed page resources. `/health` checks MySQL connectivity.
- ERP serves a PWA manifest and an app-shell-only service worker. It never
  caches API responses or authenticated business data; data operations require
  a network connection.
- Deployment and migration documents include cutover checks, data retention,
  and rollback cautions. Version is `0.3.1`.

## Verified in this workspace

- ERP automated tests: 64 passed.
- Legacy Parking regression tests: 31 passed.
- ERP frontend typecheck and production bundle build passed.
- Parking server endpoints for the PWA manifest, service worker, and icon have
  route assertions; the service worker is restricted to an explicit static
  shell allow-list.

These checks use test doubles and do not constitute a real MySQL migration.

## Production readiness boundary

For a new empty ERP installation, no SQLite import or account migration is
needed. Before opening it to users, run migrations, create the initial ERP
administrator, verify MySQL-backed `/health`, HTTPS and WebSocket routing, ERP
login/parking permissions, and acceptance checks for each site. Confirm that
database backup and restore procedures are operational.

For this empty-ERP path, Go requires all checks above to pass. A failed database
health check returns HTTP 503 and is written to the error log. Do not treat an
unavailable production VPS/database as verified by local tests.

For an existing Parking installation, also complete the legacy-data checks
below. Do not call either path production-ready based only on automated tests;
no production VPS or live target database was available in this workspace.

- Run migrations, importer preflight/apply, row-count and ID-fidelity checks,
  permission/site-isolation checks, backup restore, and rollback rehearsal
  against the target MySQL/MariaDB version and representative source data.
- Complete user acceptance for every mapped site and retain the original
  SQLite database and backups until acceptance is recorded.
- Re-run the complete test suite and release checks on the final commit.

No target MySQL service or production Parking SQLite source was available in
this workspace, so importer behavior against a live database and actual legacy
records remains unverified. Do not declare production cutover ready until the
required checks above pass.
