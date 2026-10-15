CREATE TABLE IF NOT EXISTS parking_import_runs (
  source_digest CHAR(64) NOT NULL,
  mapping_digest CHAR(64) NOT NULL,
  source_name VARCHAR(255) NOT NULL,
  table_counts JSON NOT NULL,
  id_map_digest CHAR(64) NOT NULL,
  backup_path TEXT NOT NULL,
  imported_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (source_digest, mapping_digest)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_legacy_users (
  legacy_tenant_id BIGINT UNSIGNED NOT NULL,
  legacy_user_id BIGINT UNSIGNED NOT NULL,
  site_id BIGINT UNSIGNED NOT NULL,
  account_id BIGINT UNSIGNED NOT NULL,
  username VARCHAR(80) NOT NULL,
  legacy_role VARCHAR(16) NOT NULL,
  PRIMARY KEY (legacy_tenant_id, legacy_user_id),
  UNIQUE KEY uq_parking_legacy_user_account (legacy_tenant_id, account_id),
  KEY ix_parking_legacy_users_site (site_id),
  CONSTRAINT fk_parking_legacy_users_site FOREIGN KEY (site_id) REFERENCES sites (id),
  CONSTRAINT fk_parking_legacy_users_account FOREIGN KEY (account_id) REFERENCES accounts (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_legacy_tenants (
  legacy_tenant_id BIGINT UNSIGNED NOT NULL,
  site_id BIGINT UNSIGNED NOT NULL,
  legacy_name VARCHAR(120) NOT NULL,
  is_headquarters TINYINT(1) NOT NULL,
  is_active TINYINT(1) NOT NULL,
  legacy_created_at VARCHAR(40) NOT NULL,
  PRIMARY KEY (legacy_tenant_id),
  KEY ix_parking_legacy_tenants_site (site_id),
  CONSTRAINT fk_parking_legacy_tenants_site FOREIGN KEY (site_id) REFERENCES sites (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_lots (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  site_id BIGINT UNSIGNED NOT NULL,
  legacy_tenant_id BIGINT UNSIGNED NULL,
  name VARCHAR(120) NOT NULL,
  display_order INT NOT NULL DEFAULT 0,
  area_height INT NOT NULL DEFAULT 210,
  area_width INT NOT NULL DEFAULT 50,
  navigation_url TEXT NOT NULL,
  markings JSON NOT NULL,
  capacity INT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  class_priority JSON NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_parking_lots_site_name (site_id, name),
  KEY ix_parking_lots_site_order (site_id, display_order, id),
  CONSTRAINT fk_parking_lots_site FOREIGN KEY (site_id) REFERENCES sites (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_vehicles (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  site_id BIGINT UNSIGNED NOT NULL,
  legacy_tenant_id BIGINT UNSIGNED NULL,
  erp_vehicle_id CHAR(36) NULL,
  external_id VARCHAR(255) NULL,
  plate VARCHAR(120) NOT NULL,
  vehicle_type VARCHAR(120) NOT NULL,
  parking_lot_id BIGINT UNSIGNED NULL,
  position_x DOUBLE NOT NULL DEFAULT 0.5,
  position_y DOUBLE NOT NULL DEFAULT 0.5,
  unwashed TINYINT(1) NOT NULL DEFAULT 0,
  no_fuel TINYINT(1) NOT NULL DEFAULT 0,
  needs_repair TINYINT(1) NOT NULL DEFAULT 0,
  options JSON NOT NULL,
  notes TEXT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_parking_vehicle_erp_id (erp_vehicle_id),
  UNIQUE KEY uq_parking_vehicle_external_id (site_id, external_id),
  KEY ix_parking_vehicles_site_plate (site_id, plate),
  KEY ix_parking_vehicles_lot (parking_lot_id),
  CONSTRAINT fk_parking_vehicles_site FOREIGN KEY (site_id) REFERENCES sites (id),
  CONSTRAINT fk_parking_vehicles_erp_vehicle FOREIGN KEY (erp_vehicle_id) REFERENCES vehicles (id),
  CONSTRAINT fk_parking_vehicles_lot FOREIGN KEY (parking_lot_id) REFERENCES parking_lots (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_vehicle_statuses (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  site_id BIGINT UNSIGNED NOT NULL,
  legacy_tenant_id BIGINT UNSIGNED NULL,
  `key` VARCHAR(64) NULL,
  name VARCHAR(120) NOT NULL,
  icon VARCHAR(40) NOT NULL DEFAULT '🔔',
  PRIMARY KEY (id),
  UNIQUE KEY uq_parking_status_site_key (site_id, `key`),
  UNIQUE KEY uq_parking_status_site_name (site_id, name),
  CONSTRAINT fk_parking_statuses_site FOREIGN KEY (site_id) REFERENCES sites (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_vehicle_status_assignments (
  vehicle_id BIGINT UNSIGNED NOT NULL,
  status_id BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (vehicle_id, status_id),
  CONSTRAINT fk_parking_status_assignments_vehicle FOREIGN KEY (vehicle_id)
    REFERENCES parking_vehicles (id) ON DELETE CASCADE,
  CONSTRAINT fk_parking_status_assignments_status FOREIGN KEY (status_id)
    REFERENCES parking_vehicle_statuses (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_assessment_fields (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  site_id BIGINT UNSIGNED NOT NULL,
  legacy_tenant_id BIGINT UNSIGNED NULL,
  built_in_key VARCHAR(64) NULL,
  group_key VARCHAR(64) NOT NULL DEFAULT 'custom',
  name VARCHAR(255) NOT NULL,
  field_type ENUM('rating', 'checkbox', 'text', 'number') NOT NULL,
  suffix VARCHAR(120) NOT NULL DEFAULT '',
  display_order INT NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY uq_parking_assessment_field_site_key (site_id, built_in_key),
  KEY ix_parking_assessment_field_site_order (site_id, group_key, display_order),
  CONSTRAINT fk_parking_assessment_fields_site FOREIGN KEY (site_id) REFERENCES sites (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_assessment_values (
  vehicle_id BIGINT UNSIGNED NOT NULL,
  field_id BIGINT UNSIGNED NOT NULL,
  value TEXT NOT NULL,
  PRIMARY KEY (vehicle_id, field_id),
  CONSTRAINT fk_parking_assessment_values_vehicle FOREIGN KEY (vehicle_id)
    REFERENCES parking_vehicles (id) ON DELETE CASCADE,
  CONSTRAINT fk_parking_assessment_values_field FOREIGN KEY (field_id)
    REFERENCES parking_assessment_fields (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_damage_types (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  site_id BIGINT UNSIGNED NOT NULL,
  legacy_tenant_id BIGINT UNSIGNED NULL,
  built_in_key VARCHAR(64) NULL,
  name VARCHAR(120) NOT NULL,
  icon VARCHAR(40) NOT NULL DEFAULT '⚠️',
  color CHAR(7) NOT NULL DEFAULT '#e34b4b',
  PRIMARY KEY (id),
  UNIQUE KEY uq_parking_damage_type_site_key (site_id, built_in_key),
  CONSTRAINT fk_parking_damage_types_site FOREIGN KEY (site_id) REFERENCES sites (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_damage_marks (
  id VARCHAR(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  vehicle_id BIGINT UNSIGNED NOT NULL,
  damage_type_id BIGINT UNSIGNED NOT NULL,
  x DOUBLE NOT NULL,
  y DOUBLE NOT NULL,
  world_x DOUBLE NULL,
  world_y DOUBLE NULL,
  world_z DOUBLE NULL,
  world_nx DOUBLE NULL,
  world_ny DOUBLE NULL,
  world_nz DOUBLE NULL,
  PRIMARY KEY (id),
  KEY ix_parking_damage_marks_vehicle (vehicle_id),
  CONSTRAINT fk_parking_damage_marks_vehicle FOREIGN KEY (vehicle_id)
    REFERENCES parking_vehicles (id) ON DELETE CASCADE,
  CONSTRAINT fk_parking_damage_marks_type FOREIGN KEY (damage_type_id)
    REFERENCES parking_damage_types (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_vehicle_option_types (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  site_id BIGINT UNSIGNED NOT NULL,
  legacy_tenant_id BIGINT UNSIGNED NULL,
  name VARCHAR(120) NOT NULL,
  built_in_key VARCHAR(120) NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_parking_option_type_site_name (site_id, name),
  UNIQUE KEY uq_parking_option_type_site_key (site_id, built_in_key),
  CONSTRAINT fk_parking_option_types_site FOREIGN KEY (site_id) REFERENCES sites (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_vehicle_option_suppressions (
  site_id BIGINT UNSIGNED NOT NULL,
  built_in_key VARCHAR(120) NOT NULL,
  PRIMARY KEY (site_id, built_in_key),
  CONSTRAINT fk_parking_option_suppressions_site FOREIGN KEY (site_id) REFERENCES sites (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_jobs (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  site_id BIGINT UNSIGNED NOT NULL,
  legacy_tenant_id BIGINT UNSIGNED NULL,
  vehicle_id BIGINT UNSIGNED NOT NULL,
  destination_lot_id BIGINT UNSIGNED NOT NULL,
  scheduled_at VARCHAR(32) NOT NULL,
  completed TINYINT(1) NOT NULL DEFAULT 0,
  completed_at VARCHAR(32) NULL,
  PRIMARY KEY (id),
  KEY ix_parking_jobs_site_schedule (site_id, completed, scheduled_at),
  CONSTRAINT fk_parking_jobs_site FOREIGN KEY (site_id) REFERENCES sites (id),
  CONSTRAINT fk_parking_jobs_vehicle FOREIGN KEY (vehicle_id)
    REFERENCES parking_vehicles (id) ON DELETE CASCADE,
  CONSTRAINT fk_parking_jobs_lot FOREIGN KEY (destination_lot_id)
    REFERENCES parking_lots (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_vehicle_classes (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  site_id BIGINT UNSIGNED NOT NULL,
  legacy_tenant_id BIGINT UNSIGNED NULL,
  name VARCHAR(120) NOT NULL,
  color CHAR(7) NOT NULL DEFAULT '#9aa5b1',
  display_order INT NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY uq_parking_vehicle_classes_site_name (site_id, name),
  CONSTRAINT fk_parking_vehicle_classes_site FOREIGN KEY (site_id) REFERENCES sites (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_stores (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  site_id BIGINT UNSIGNED NOT NULL,
  legacy_tenant_id BIGINT UNSIGNED NULL,
  name VARCHAR(120) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_parking_stores_site_name (site_id, name),
  CONSTRAINT fk_parking_stores_site FOREIGN KEY (site_id) REFERENCES sites (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_lot_distances (
  site_id BIGINT UNSIGNED NOT NULL,
  legacy_tenant_id BIGINT UNSIGNED NULL,
  from_lot_id BIGINT UNSIGNED NOT NULL,
  to_lot_id BIGINT UNSIGNED NOT NULL,
  minutes DOUBLE NOT NULL,
  km DOUBLE NULL,
  PRIMARY KEY (from_lot_id, to_lot_id),
  CONSTRAINT fk_parking_lot_distances_site FOREIGN KEY (site_id) REFERENCES sites (id),
  CONSTRAINT fk_parking_lot_distances_from FOREIGN KEY (from_lot_id)
    REFERENCES parking_lots (id) ON DELETE CASCADE,
  CONSTRAINT fk_parking_lot_distances_to FOREIGN KEY (to_lot_id)
    REFERENCES parking_lots (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS parking_store_lot_distances (
  site_id BIGINT UNSIGNED NOT NULL,
  legacy_tenant_id BIGINT UNSIGNED NULL,
  store_id BIGINT UNSIGNED NOT NULL,
  lot_id BIGINT UNSIGNED NOT NULL,
  minutes DOUBLE NOT NULL,
  km DOUBLE NULL,
  PRIMARY KEY (store_id, lot_id),
  CONSTRAINT fk_parking_store_distances_site FOREIGN KEY (site_id) REFERENCES sites (id),
  CONSTRAINT fk_parking_store_distances_store FOREIGN KEY (store_id)
    REFERENCES parking_stores (id) ON DELETE CASCADE,
  CONSTRAINT fk_parking_store_distances_lot FOREIGN KEY (lot_id)
    REFERENCES parking_lots (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO permissions (permission_key, description) VALUES
  ('parking:read', 'View the parking board for the assigned site'),
  ('parking:write', 'Update vehicles, positions, jobs, and assessments on the parking board'),
  ('parking:admin', 'Manage parking locations, statuses, vehicle classes, and logistics')
ON DUPLICATE KEY UPDATE description = VALUES(description);

INSERT IGNORE INTO role_permissions (role_id, permission_key)
SELECT r.id, p.permission_key
  FROM roles r
  JOIN permissions p ON p.permission_key IN ('parking:read', 'parking:write', 'parking:admin')
 WHERE r.role_key = 'headquarters_admin';
