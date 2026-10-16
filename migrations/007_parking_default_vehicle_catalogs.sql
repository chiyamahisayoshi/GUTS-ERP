INSERT INTO parking_vehicle_classes (site_id, name, color, display_order)
SELECT sites.id, defaults.name, defaults.color, defaults.display_order
  FROM sites
  CROSS JOIN (
    SELECT 'A-1' AS name, '#4f86f7' AS color, 0 AS display_order
    UNION ALL SELECT 'A-2', '#9b6ad8', 1
    UNION ALL SELECT 'A-2P', '#f0a043', 2
    UNION ALL SELECT 'B', '#38a9d0', 3
    UNION ALL SELECT 'B軽トラ', '#e56b7a', 4
    UNION ALL SELECT 'C-1', '#c7b23c', 5
    UNION ALL SELECT 'C-2', '#6f8794', 6
    UNION ALL SELECT 'D', '#7fb24f', 7
    UNION ALL SELECT 'H-1', '#d98a57', 8
    UNION ALL SELECT 'H-2', '#6d78c8', 9
    UNION ALL SELECT 'その他', '#9aa5b1', 10
  ) AS defaults
 WHERE NOT EXISTS (
   SELECT 1 FROM parking_vehicle_classes existing
    WHERE existing.site_id = sites.id AND existing.name = defaults.name
 );

INSERT INTO parking_vehicle_option_types (site_id, name, built_in_key)
SELECT sites.id, defaults.name, defaults.name
  FROM sites
  CROSS JOIN (
    SELECT 'ETC' AS name
    UNION ALL SELECT '車載器'
    UNION ALL SELECT '禁煙'
    UNION ALL SELECT '喫煙'
    UNION ALL SELECT 'ナビ'
    UNION ALL SELECT 'スタッドレス'
  ) AS defaults
 WHERE NOT EXISTS (
   SELECT 1 FROM parking_vehicle_option_suppressions suppressed
    WHERE suppressed.site_id = sites.id AND suppressed.built_in_key = defaults.name
 )
 AND NOT EXISTS (
   SELECT 1 FROM parking_vehicle_option_types existing
    WHERE existing.site_id = sites.id
      AND (existing.name = defaults.name OR existing.built_in_key = defaults.name)
 );

INSERT INTO parking_vehicle_statuses (site_id, `key`, name, icon)
SELECT sites.id, defaults.status_key, defaults.name, defaults.icon
  FROM sites
  CROSS JOIN (
    SELECT 'unwashed' AS status_key, '洗車待ち' AS name, '🫧' AS icon
    UNION ALL SELECT 'no_fuel', '給油待ち', '⛽'
    UNION ALL SELECT 'needs_repair', '要修理', '🔧'
  ) AS defaults
 WHERE NOT EXISTS (
   SELECT 1 FROM parking_vehicle_statuses existing
    WHERE existing.site_id = sites.id
      AND (existing.`key` = defaults.status_key OR existing.name = defaults.name)
 );

INSERT INTO parking_assessment_fields
  (site_id, built_in_key, group_key, name, field_type, suffix, display_order)
SELECT sites.id, defaults.built_in_key, defaults.group_key, defaults.name,
       defaults.field_type, defaults.suffix, defaults.display_order
  FROM sites
  CROSS JOIN (
    SELECT 'exterior' AS built_in_key, 'body' AS group_key,
           '外装（ボディ・塗装・鈑金）' AS name, 'rating' AS field_type,
           '' AS suffix, 0 AS display_order
    UNION ALL SELECT 'interior', 'body', '内装（シート・天井・フロア）', 'rating', '', 1
    UNION ALL SELECT 'wheels', 'body', 'ホイール', 'rating', '', 2
    UNION ALL SELECT 'registration_document', 'electrical', '車検証', 'checkbox', '確認済み', 0
    UNION ALL SELECT 'radio', 'electrical', 'ラジオ', 'checkbox', '', 1
    UNION ALL SELECT 'navigation', 'electrical', 'ナビ（５年以内）', 'checkbox', '', 2
    UNION ALL SELECT 'air_conditioning', 'electrical', 'エアコン', 'checkbox', '', 3
    UNION ALL SELECT 'side_mirror', 'electrical', 'サイドミラー調整', 'checkbox', '', 4
    UNION ALL SELECT 'mileage', 'basic', '走行距離', 'number', 'km', 0
    UNION ALL SELECT 'registration_year', 'basic', '初年度登録（年）', 'number', '年', 1
    UNION ALL SELECT 'registration_month', 'basic', '初年度登録（月）', 'number', '月', 2
  ) AS defaults
 WHERE NOT EXISTS (
   SELECT 1 FROM parking_assessment_fields existing
    WHERE existing.site_id = sites.id AND existing.built_in_key = defaults.built_in_key
 );

INSERT INTO parking_damage_types (site_id, built_in_key, name, icon, color)
SELECT sites.id, defaults.built_in_key, defaults.name, defaults.icon, defaults.color
  FROM sites
  CROSS JOIN (
    SELECT 'scratch' AS built_in_key, '傷' AS name, '〰️' AS icon, '#e34b4b' AS color
    UNION ALL SELECT 'dent', '凹み', '◉', '#805ad5'
  ) AS defaults
 WHERE NOT EXISTS (
   SELECT 1 FROM parking_damage_types existing
    WHERE existing.site_id = sites.id AND existing.built_in_key = defaults.built_in_key
 );
