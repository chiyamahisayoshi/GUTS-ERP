import bcrypt from 'bcryptjs';

const DUMMY_HASH = '$2b$12$abcdefghijklmnopqrstuuWqjL3sY8vx5ujL7YY9v0U8kBH8n0mQy';

export function createAuthService({ accounts, jwt, config }) {
  function createSession(account, permissions) {
    const token = jwt.sign({
      sub: String(account.id),
      username: account.username,
      siteId: String(account.site_id),
      siteCode: account.site_code,
      siteType: account.site_type,
      permissions
    }, {
      issuer: config.jwt.issuer,
      audience: config.jwt.audience,
      expiresIn: config.jwt.expiresIn
    });
    return {
      accessToken: token,
      tokenType: 'Bearer',
      expiresIn: config.jwt.expiresIn,
      account: {
        id: String(account.id),
        username: account.username,
        displayName: account.display_name,
        isAdmin: Number(account.is_owner_admin) === 1,
        site: {
          id: String(account.site_id),
          code: account.site_code,
          name: account.site_name,
          type: account.site_type
        },
        permissions
      }
    };
  }

  return {
    async login(username, password) {
      const account = await accounts.findByUsername(username);
      const validPassword = await bcrypt.compare(password, account?.password_hash || DUMMY_HASH);

      if (!account || account.status !== 'active' || account.site_status !== 'active') {
        return null;
      }
      if (account.locked_until && new Date(account.locked_until).getTime() > Date.now()) {
        return null;
      }
      if (!validPassword) {
        await accounts.recordFailedLogin(account.id);
        return null;
      }
      await accounts.clearFailedLogins(account.id);
      const permissions = await accounts.listPermissions(account.id);
      return createSession(account, permissions);
    },

    async switchToSite(siteId) {
      const account = await accounts.findActiveBySiteId(siteId);
      if (!account || account.status !== 'active' || account.site_status !== 'active' ||
          account.site_type === 'headquarters' || Number(account.is_owner_admin) === 1) {
        return null;
      }
      return createSession(account, await accounts.listPermissions(account.id));
    }
  };
}
