CREATE TABLE IF NOT EXISTS auth_sessions (
  id CHAR(36) NOT NULL,
  account_id BIGINT UNSIGNED NOT NULL,
  refresh_token_hash CHAR(64) NOT NULL,
  expires_at DATETIME(3) NOT NULL,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  last_used_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uq_auth_sessions_token_hash (refresh_token_hash),
  KEY ix_auth_sessions_account (account_id),
  KEY ix_auth_sessions_expiry (expires_at),
  CONSTRAINT fk_auth_sessions_account FOREIGN KEY (account_id)
    REFERENCES accounts (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
