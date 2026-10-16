ALTER TABLE vehicles
  ADD COLUMN inspection_expiry_date DATE NULL AFTER model_year,
  ADD COLUMN statutory_inspection_date DATE NULL AFTER inspection_expiry_date;
