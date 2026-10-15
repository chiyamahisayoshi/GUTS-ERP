CREATE TABLE IF NOT EXISTS reservations (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  reservation_code CHAR(12) NOT NULL,
  site_id BIGINT UNSIGNED NOT NULL,
  guest_name VARCHAR(120) NOT NULL,
  guest_phone VARCHAR(32) NOT NULL,
  start_at DATETIME(3) NOT NULL,
  end_at DATETIME(3) NOT NULL,
  vehicle_id CHAR(36) NULL,
  status ENUM('reserved', 'checked_in', 'completed', 'cancelled') NOT NULL DEFAULT 'reserved',
  created_by BIGINT UNSIGNED NOT NULL,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uq_reservations_code (reservation_code),
  KEY ix_reservations_site_status_start (site_id, status, start_at),
  KEY ix_reservations_vehicle_period (vehicle_id, status, start_at, end_at),
  CONSTRAINT fk_reservations_site FOREIGN KEY (site_id) REFERENCES sites (id),
  CONSTRAINT fk_reservations_vehicle FOREIGN KEY (vehicle_id) REFERENCES vehicles (id),
  CONSTRAINT fk_reservations_creator FOREIGN KEY (created_by) REFERENCES accounts (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO permissions (permission_key, description) VALUES
  ('reservations:read', 'View rental reservations and reception queue'),
  ('reservations:write', 'Create reservations and process vehicle handover or return')
ON DUPLICATE KEY UPDATE description = VALUES(description);

INSERT IGNORE INTO role_permissions (role_id, permission_key)
SELECT r.id, p.permission_key
  FROM roles r
  JOIN permissions p ON p.permission_key IN ('reservations:read', 'reservations:write')
 WHERE r.role_key = 'headquarters_admin';
