INSERT INTO parking_vehicle_classes (site_id, name, color, display_order)
SELECT sites.id, defaults.name, defaults.color, defaults.display_order
  FROM sites
  CROSS JOIN (
    SELECT 'A-1' AS name, '#4f86f7' AS color, 0 AS display_order
    UNION ALL SELECT 'A-2', '#49a078', 1
    UNION ALL SELECT 'A-2P', '#d59b32', 2
    UNION ALL SELECT 'B', '#a16bd0', 3
    UNION ALL SELECT 'B軽トラ', '#e16a5b', 4
    UNION ALL SELECT 'C-1', '#3896a8', 5
    UNION ALL SELECT 'C-2', '#7588cc', 6
    UNION ALL SELECT 'D', '#cc7a38', 7
    UNION ALL SELECT 'H-1', '#57a36c', 8
    UNION ALL SELECT 'H-2', '#bf5d84', 9
    UNION ALL SELECT 'その他', '#9aa5b1', 10
  ) AS defaults
 WHERE sites.type <> 'headquarters'
   AND NOT EXISTS (
     SELECT 1 FROM parking_vehicle_classes
      WHERE parking_vehicle_classes.site_id = sites.id
        AND parking_vehicle_classes.name <> '未分類'
   );
