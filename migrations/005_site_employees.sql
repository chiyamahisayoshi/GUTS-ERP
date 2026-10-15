CREATE TABLE IF NOT EXISTS site_employees (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  site_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(120) NOT NULL,
  status ENUM('active', 'disabled') NOT NULL DEFAULT 'active',
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uq_site_employees_name (site_id, name),
  KEY ix_site_employees_site_status (site_id, status),
  CONSTRAINT fk_site_employees_site FOREIGN KEY (site_id) REFERENCES sites (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE reservations
  ADD COLUMN checked_out_by_employee_id BIGINT UNSIGNED NULL AFTER created_by,
  ADD COLUMN returned_by_employee_id BIGINT UNSIGNED NULL AFTER checked_out_by_employee_id,
  ADD COLUMN checked_out_by_name VARCHAR(120) NULL AFTER returned_by_employee_id,
  ADD COLUMN returned_by_name VARCHAR(120) NULL AFTER checked_out_by_name,
  ADD CONSTRAINT fk_reservations_checkout_employee
    FOREIGN KEY (checked_out_by_employee_id) REFERENCES site_employees (id),
  ADD CONSTRAINT fk_reservations_return_employee
    FOREIGN KEY (returned_by_employee_id) REFERENCES site_employees (id);
