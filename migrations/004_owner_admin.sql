ALTER TABLE accounts
  ADD COLUMN is_owner_admin TINYINT(1) NOT NULL DEFAULT 0 AFTER display_name;

UPDATE accounts
   SET is_owner_admin = 1
 WHERE id = (
   SELECT owner_account_id
     FROM (
       SELECT MIN(ar.account_id) AS owner_account_id
         FROM account_roles ar
         JOIN roles r ON r.id = ar.role_id
        WHERE r.role_key = 'headquarters_admin'
     ) AS owner_admin
 );
