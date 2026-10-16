export const SESSION_TOKEN_KEY = 'guts_erp_token';
export const ORIGINAL_ADMIN_TOKEN_KEY = 'guts_erp_original_admin_token';
export const ORIGINAL_ADMIN_PAGE_KEY = 'guts_erp_original_admin_page';

export function beginSiteSession(storage, adminToken, adminPage, siteToken) {
  storage.setItem(ORIGINAL_ADMIN_TOKEN_KEY, adminToken);
  storage.setItem(ORIGINAL_ADMIN_PAGE_KEY, adminPage);
  storage.setItem(SESSION_TOKEN_KEY, siteToken);
}

export function restoreAdminSession(storage) {
  const token = storage.getItem(ORIGINAL_ADMIN_TOKEN_KEY);
  if (!token) return null;
  const page = storage.getItem(ORIGINAL_ADMIN_PAGE_KEY);
  storage.setItem(SESSION_TOKEN_KEY, token);
  storage.removeItem(ORIGINAL_ADMIN_TOKEN_KEY);
  storage.removeItem(ORIGINAL_ADMIN_PAGE_KEY);
  return { token, page };
}

export function clearSession(storage) {
  storage.removeItem(SESSION_TOKEN_KEY);
  storage.removeItem(ORIGINAL_ADMIN_TOKEN_KEY);
  storage.removeItem(ORIGINAL_ADMIN_PAGE_KEY);
}

export function isImpersonating(storage) {
  return Boolean(storage.getItem(ORIGINAL_ADMIN_TOKEN_KEY));
}
