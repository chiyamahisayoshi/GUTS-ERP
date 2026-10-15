CREATE TABLE IF NOT EXISTS sites (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  code VARCHAR(32) NOT NULL,
  name VARCHAR(120) NOT NULL,
  type ENUM('headquarters', 'direct', 'franchise') NOT NULL,
  status ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uq_sites_code (code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS accounts (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  site_id BIGINT UNSIGNED NOT NULL,
  username VARCHAR(64) NOT NULL,
  display_name VARCHAR(120) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  status ENUM('active', 'disabled') NOT NULL DEFAULT 'active',
  failed_attempts TINYINT UNSIGNED NOT NULL DEFAULT 0,
  locked_until TIMESTAMP(3) NULL,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uq_accounts_username (username),
  KEY ix_accounts_site_id (site_id),
  CONSTRAINT fk_accounts_site FOREIGN KEY (site_id) REFERENCES sites (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS roles (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  role_key VARCHAR(64) NOT NULL,
  name VARCHAR(120) NOT NULL,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uq_roles_key (role_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS permissions (
  permission_key VARCHAR(96) NOT NULL,
  description VARCHAR(255) NOT NULL,
  PRIMARY KEY (permission_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS account_roles (
  account_id BIGINT UNSIGNED NOT NULL,
  role_id BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (account_id, role_id),
  CONSTRAINT fk_account_roles_account FOREIGN KEY (account_id) REFERENCES accounts (id) ON DELETE CASCADE,
  CONSTRAINT fk_account_roles_role FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS role_permissions (
  role_id BIGINT UNSIGNED NOT NULL,
  permission_key VARCHAR(96) NOT NULL,
  PRIMARY KEY (role_id, permission_key),
  CONSTRAINT fk_role_permissions_role FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE CASCADE,
  CONSTRAINT fk_role_permissions_permission FOREIGN KEY (permission_key) REFERENCES permissions (permission_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS account_permissions (
  account_id BIGINT UNSIGNED NOT NULL,
  permission_key VARCHAR(96) NOT NULL,
  PRIMARY KEY (account_id, permission_key),
  CONSTRAINT fk_account_permissions_account FOREIGN KEY (account_id) REFERENCES accounts (id) ON DELETE CASCADE,
  CONSTRAINT fk_account_permissions_permission FOREIGN KEY (permission_key) REFERENCES permissions (permission_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS vehicles (
  id CHAR(36) NOT NULL,
  registration_number VARCHAR(32) NOT NULL,
  vin VARCHAR(32) NULL,
  make VARCHAR(80) NOT NULL,
  model VARCHAR(100) NOT NULL,
  model_year SMALLINT UNSIGNED NULL,
  site_id BIGINT UNSIGNED NOT NULL,
  status ENUM('available', 'rented', 'maintenance', 'retired') NOT NULL DEFAULT 'available',
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uq_vehicles_registration_number (registration_number),
  UNIQUE KEY uq_vehicles_vin (vin),
  KEY ix_vehicles_site_id (site_id),
  CONSTRAINT fk_vehicles_site FOREIGN KEY (site_id) REFERENCES sites (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS schema_migrations (
  version VARCHAR(128) NOT NULL,
  applied_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (version)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
