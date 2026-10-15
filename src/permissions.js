export const PERMISSIONS = Object.freeze([
  { key: 'sites:read', description: 'View organization sites' },
  { key: 'sites:write', description: 'Create and manage organization sites' },
  { key: 'accounts:write', description: 'Create accounts and assign roles or permissions' },
  { key: 'vehicles:read', description: 'View vehicle master data' },
  { key: 'vehicles:write', description: 'Create vehicle master data' },
  { key: 'reservations:read', description: 'View rental reservations and reception queue' },
  { key: 'reservations:write', description: 'Create reservations and process vehicle handover or return' }
]);
