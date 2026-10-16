export const PERMISSIONS = Object.freeze([
  { key: 'sites:read', description: 'View organization sites' },
  { key: 'sites:write', description: 'Create and manage organization sites' },
  { key: 'accounts:write', description: 'Create accounts and assign roles or permissions' },
  { key: 'vehicles:read', description: 'View vehicle master data' },
  { key: 'vehicles:write', description: 'Create vehicle master data and synchronize the parking board' },
  { key: 'parking:read', description: 'View the parking board for the assigned site' },
  { key: 'parking:write', description: 'Update vehicles, positions, jobs, and assessments on the parking board' },
  { key: 'parking:admin', description: 'Manage parking locations, statuses, vehicle classes, and logistics' },
  { key: 'reservations:read', description: 'View rental reservations and reception queue' },
  { key: 'reservations:write', description: 'Create reservations and process vehicle handover or return' },
  { key: 'customers:read', description: 'View customer profiles within the assigned site' },
  { key: 'customers:write', description: 'Create and update customer profiles within the assigned site' }
]);
