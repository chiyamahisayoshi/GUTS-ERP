# Parking / ERP integration status

This records the current implementation and its release boundary. It is not a
claim that a production data migration or cutover has been completed.

## Implemented in this branch

- Parking board routes and persistence use `parking_*` tables in the ERP MySQL
  schema, the ERP account/JWT, stable parking permissions, and ERP site scope.
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
- ERP serves a PWA manifest and an app-shell-only service worker. It never
  caches API responses or authenticated business data; data operations require
  a network connection.
- Deployment and migration documents include cutover checks, data retention,
  and rollback cautions. Version is `0.3.0`.

## Verified in this workspace

- ERP automated tests: 59 passed.
- Legacy Parking regression tests: 31 passed.
- ERP frontend typecheck and production bundle build passed.
- Parking server endpoints for the PWA manifest, service worker, and icon have
  route assertions; the service worker is restricted to an explicit static
  shell allow-list.

These checks use test doubles and do not constitute a real MySQL migration.

## Required before production cutover

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
