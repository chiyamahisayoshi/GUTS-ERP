# Parking data import into the ERP database

The ERP-native parking board now reads and writes the ERP MySQL schema and uses
the signed-in ERP account, permissions, and site scope. This document describes
the one-time, non-destructive transfer of existing Parking SQLite data. The
legacy SQLite file remains a rollback/verification source and is never modified
or deleted by the importer.

## What the import does

- Copies board locations, vehicles, statuses and assignments, assessment fields
  and values, damage types and markers, options, jobs, vehicle classes, stores,
  and distance settings into `parking_*` tables in the configured ERP MySQL
  schema.
- Preserves each legacy numeric ID and each legacy external vehicle ID. Where
  an ERP vehicle UUID is known, it also records the explicit
  `parking_vehicles.erp_vehicle_id` mapping.
- Requires every legacy tenant to map to an active ERP site and every legacy
  user to map to an active ERP account at that site.
- Does **not** copy or import legacy password hashes, create accounts, change
  the source SQLite file, or delete the old service/database. The source user
  names and roles are retained only as an audit mapping to ERP accounts.
- Creates a SQLite-consistent backup before writes, imports inside one MySQL
  transaction, verifies row insertions and preserved IDs, and records source
  and mapping checksums plus row counts. A repeat with the same source and
  mapping is skipped; another import is refused if the destination tables
  already contain data.

Vehicle matches are deliberately strict. An existing `external_id` is linked
only when it exactly identifies an ERP vehicle UUID at the mapped site. Other
vehicles remain imported with their legacy ID and external ID but without an
ERP vehicle link until an operator explicitly adds a mapping. Plate-only
matching is never guessed.

## Prepare the mapping file

Create a JSON file outside the repository and protect it because it contains
account and vehicle identifiers. Every legacy tenant and user must be listed.
Vehicle mappings are optional, but should be included wherever the old vehicle
is known to be an ERP master record.

```json
{
  "tenants": {
    "1": "1",
    "2": "5"
  },
  "accounts": {
    "1:1": "1",
    "1:2": "8",
    "2:3": "19"
  },
  "vehicles": {
    "1:104": "7a30eab7-0b6e-4d3d-b7f1-e07a780cfc2d"
  }
}
```

The left side of an account/vehicle key is the legacy tenant ID and the right
side is the legacy user/vehicle ID. Tenant values are ERP `sites.id`; account
values are ERP `accounts.id`; vehicle values are ERP vehicle UUIDs. Each legacy
tenant must map to a distinct active ERP site. Do not map multiple parking
vehicles to one ERP vehicle. The application checks site ownership, active
status, source foreign keys, and cross-tenant references before importing.

## Run preflight and import

1. Stop the old Parking service briefly so its SQLite data cannot change during
   the import. Keep the SQLite file and all its SQLite sidecar files intact.
2. Apply ERP migrations using `npm run migrate`.
3. Run the preflight first. It is read-only and is the default mode:

   ```sh
   npm run import:parking -- --source /path/to/rentalcar.db --mapping /secure/path/parking-map.json
   ```

   Review the tenant/account/vehicle mappings, source checksum, table row
   counts, and number of unlinked vehicles. Any tenant/user/ERP site/account
   mapping error stops before writes.
4. Back up the ERP database using the deployment's normal database backup
   procedure, then apply the import explicitly:

   ```sh
   npm run import:parking -- --source /path/to/rentalcar.db --mapping /secure/path/parking-map.json --apply
   ```

   By default, a SQLite-consistent backup is written beside the source in
   `<source>.backups/`. Use `--backup-dir <private-directory>` to choose another
   location. The source database remains unchanged.
5. Retain the SQLite database and generated backup until the ERP board has been
   validated against the imported records and explicitly accepted. The
   importer does not enable or start the legacy Parking process.

An import failure rolls back the MySQL transaction. If any destination parking
table already contains data, the importer refuses to mix datasets. Investigate
the reported source/mapping checksums and row counts before any retry; do not
clear tables or overwrite the old SQLite data as a troubleshooting step.
