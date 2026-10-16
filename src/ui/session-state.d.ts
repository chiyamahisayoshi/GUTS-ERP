export interface SessionStorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export const SESSION_TOKEN_KEY: string;
export const ORIGINAL_ADMIN_TOKEN_KEY: string;
export const ORIGINAL_ADMIN_PAGE_KEY: string;

export function beginSiteSession(
  storage: SessionStorageLike, adminToken: string, adminPage: string, siteToken: string
): void;
export function restoreAdminSession(
  storage: SessionStorageLike
): { token: string; page: string | null } | null;
export function clearSession(storage: SessionStorageLike): void;
export function isImpersonating(storage: SessionStorageLike): boolean;
