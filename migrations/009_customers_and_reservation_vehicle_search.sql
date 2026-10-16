CREATE TABLE IF NOT EXISTS customers (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  site_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(120) NOT NULL,
  name_kana VARCHAR(120) NULL,
  phone VARCHAR(32) NOT NULL,
  email VARCHAR(254) NULL,
  birth_date DATE NULL,
  address VARCHAR(500) NULL,
  emergency_contact_name VARCHAR(120) NULL,
  emergency_contact_relationship VARCHAR(80) NULL,
  emergency_contact_phone VARCHAR(32) NULL,
  workplace_school VARCHAR(200) NULL,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  KEY ix_customers_site_name (site_id, name),
  KEY ix_customers_site_phone (site_id, phone),
  CONSTRAINT fk_customers_site FOREIGN KEY (site_id) REFERENCES sites (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE reservations
  ADD COLUMN customer_id BIGINT UNSIGNED NULL AFTER site_id,
  ADD KEY ix_reservations_customer (customer_id),
  ADD CONSTRAINT fk_reservations_customer FOREIGN KEY (customer_id)
    REFERENCES customers (id) ON DELETE SET NULL;

INSERT INTO permissions (permission_key, description) VALUES
  ('customers:read', 'View customer profiles within the assigned site'),
  ('customers:write', 'Create and update customer profiles within the assigned site')
ON DUPLICATE KEY UPDATE description = VALUES(description);

INSERT IGNORE INTO role_permissions (role_id, permission_key)
SELECT rp.role_id, 'customers:read'
  FROM role_permissions rp
 WHERE rp.permission_key IN ('reservations:read', 'reservations:write');

INSERT IGNORE INTO role_permissions (role_id, permission_key)
SELECT rp.role_id, 'customers:write'
  FROM role_permissions rp
 WHERE rp.permission_key = 'reservations:write';

INSERT IGNORE INTO account_permissions (account_id, permission_key)
SELECT ap.account_id, 'customers:read'
  FROM account_permissions ap
 WHERE ap.permission_key IN ('reservations:read', 'reservations:write');

INSERT IGNORE INTO account_permissions (account_id, permission_key)
SELECT ap.account_id, 'customers:write'
  FROM account_permissions ap
 WHERE ap.permission_key = 'reservations:write';
