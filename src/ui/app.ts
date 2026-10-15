type Site = { id: string; code: string; name: string; type: string; status: string };
type Account = {
  id: string; site_id: string; username: string; display_name: string; status: string;
  site_code: string; site_name: string; role_ids: unknown; permissions: unknown;
};
type Vehicle = {
  id: string; registration_number: string; vin: string | null; make: string; model: string;
  model_year: number | null; site_id: string; status: string;
};
type Role = { id: string; role_key: string; name: string; permissions: unknown };
type Permission = { permission_key: string; description: string };
type Reservation = {
  id: string; reservation_code: string; site_id: string; site_code: string; site_name: string;
  guest_name: string; guest_phone: string; start_at: string; end_at: string;
  vehicle_id: string | null; registration_number: string | null; make: string | null;
  model: string | null; status: string;
};
type Profile = {
  id: string; username: string; displayName: string; site: Site; permissions: string[];
};
type Stats = {
  sites: { total: number; direct: number; franchise: number };
  accounts: { total: number; active: number };
  vehicles: { total: number; available: number; rented: number; maintenance: number };
};
type Page = 'dashboard' | 'reservations' | 'sites' | 'accounts' | 'roles' | 'vehicles';

const $ = <T extends HTMLElement>(selector: string, parent: ParentNode = document) =>
  parent.querySelector<T>(selector);
const root = $('#app')!;
const esc = (value: unknown) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]!));
const jsonArray = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value !== 'string') return [];
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch { return []; }
};
const svgPaths: Record<string, string> = {
  dashboard: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  site: '<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M8 9v.01M8 12v.01M8 15v.01M8 18v.01M15 12v.01M15 15v.01M15 18v.01"/>',
  people: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  roles: '<path d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7l-8-4Z"/><path d="m9 12 2 2 4-4"/>',
  vehicle: '<path d="m5 11 1.5-5h11L19 11M3 11h18v8H3zM5 19v2m14-2v2"/><circle cx="7.5" cy="15" r="1"/><circle cx="16.5" cy="15" r="1"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  logout: '<path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',
  sites: '<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>',
  team: '<circle cx="9" cy="8" r="4"/><path d="M2 21v-2a7 7 0 0 1 14 0v2M16 4a4 4 0 0 1 0 8m2 3a6 6 0 0 1 4 6"/>',
  fleet: '<path d="m5 11 1.5-5h11L19 11M3 11h18v8H3z"/><circle cx="7.5" cy="15" r="1"/><circle cx="16.5" cy="15" r="1"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  refresh: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2"/>'
};
const icon = (name: string) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${svgPaths[name] ?? svgPaths.dashboard}</svg>`;

const titles: Record<Page, string> = {
  dashboard: '运营总览', reservations: '预约与接待', sites: '门店管理',
  accounts: '员工与账号', roles: '角色权限', vehicles: '车辆管理'
};
const statusLabel: Record<string, string> = {
  active: '正常', disabled: '已停用', available: '可用', rented: '租用中',
  maintenance: '维护中', retired: '已退役', headquarters: '总部', direct: '直营店',
  franchise: '加盟店', reserved: '待接待', checked_in: '租用中', completed: '已归还',
  cancelled: '已取消'
};
const statusTone: Record<string, string> = {
  active: 'green', available: 'green', completed: 'gray', rented: 'blue',
  checked_in: 'blue', maintenance: 'orange', reserved: 'orange', disabled: 'red',
  cancelled: 'gray', retired: 'gray'
};
const label = (value: string) => statusLabel[value] ?? value;
const badge = (value: string) => `<span class="badge badge-${statusTone[value] ?? (value === 'headquarters' ? 'blue' : 'gray')}">${esc(label(value))}</span>`;
const text = (value: string) => esc(value);
const moneylessDate = (value: string) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? esc(value) : new Intl.DateTimeFormat('zh-CN', {
    month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false
  }).format(date);
};
const humanError = (code: string) => ({
  invalid_credentials: '账号或密码错误', forbidden: '当前账号没有此操作权限',
  resource_conflict: '信息重复，请检查编号、账号或车牌', reservation_conflict: '车辆或预约状态已变化，请刷新后重试',
  invalid_reference: '所选门店、角色或车辆不存在', invalid_request: '请检查填写内容',
  internal_error: '系统暂时出错，请稍后重试', unauthorized: '登录已过期，请重新登录'
}[code] ?? `操作未完成（${code}）`);

let token = sessionStorage.getItem('guts_erp_token') || '';
let profile: Profile | null = null;
let currentPage: Page = 'dashboard';
let modal = '';
let query = '';
let offset = 0;
let statusFilter = '';
let cachedSites: Site[] = [];
let cachedRoles: Role[] = [];
let cachedPermissions: Permission[] = [];
let currentReservations: Reservation[] = [];
let currentAccounts: Account[] = [];
let currentVehicles: Vehicle[] = [];
let isMobileNav = false;
let searchTimer = 0;

async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set('Accept', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);
  if (options.body) headers.set('Content-Type', 'application/json');
  const response = await fetch(path, { ...options, headers });
  if (response.status === 401 && token) {
    token = '';
    profile = null;
    sessionStorage.removeItem('guts_erp_token');
    renderLogin();
    throw new Error('unauthorized');
  }
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || data.error || `HTTP ${response.status}`);
  return data as T;
}
function toast(message: string, isError = false) {
  let area = $('.toast-area');
  if (!area) {
    area = document.createElement('div');
    area.className = 'toast-area';
    document.body.append(area);
  }
  const item = document.createElement('div');
  item.className = `toast${isError ? ' error' : ''}`;
  item.textContent = message;
  area.append(item);
  window.setTimeout(() => item.remove(), 3600);
}
function can(permission: string) { return Boolean(profile?.permissions.includes(permission)); }
function navItems(): { page: Page; title: string; icon: string; permission?: string }[] {
  const items: { page: Page; title: string; icon: string; permission?: string }[] = [
    { page: 'dashboard', title: '运营总览', icon: 'dashboard' },
    { page: 'reservations', title: '预约与接待', icon: 'calendar', permission: 'reservations:read' },
    { page: 'sites', title: '门店管理', icon: 'site', permission: 'sites:read' },
    { page: 'accounts', title: '员工与账号', icon: 'people', permission: 'accounts:write' },
    { page: 'roles', title: '角色权限', icon: 'roles', permission: 'accounts:write' },
    { page: 'vehicles', title: '车辆管理', icon: 'vehicle', permission: 'vehicles:read' }
  ];
  return items.filter((item) => (!item.permission || can(item.permission)) &&
    (!['accounts', 'roles'].includes(item.page) || profile?.site.type === 'headquarters'));
}
function renderLogin() {
  root.innerHTML = `<main class="login-screen login-simple">
    <form class="login-form" data-form="login">
      <input name="username" autocomplete="username" required placeholder="账号" aria-label="账号">
      <input name="password" type="password" autocomplete="current-password" required placeholder="密码" aria-label="密码">
      <button class="btn btn-primary" type="submit">登录</button>
    </form>
  </main>`;
  root.onsubmit = async (event) => {
    const form = (event.target as HTMLElement).closest<HTMLFormElement>('[data-form="login"]');
    if (!form) return;
    event.preventDefault();
    const button = $<HTMLButtonElement>('button[type="submit"]', form)!;
    button.disabled = true;
    button.textContent = '正在登录…';
    const data = new FormData(form);
    try {
      const result = await api<{ accessToken: string }>('/api/v1/auth/login', {
        method: 'POST', body: JSON.stringify({
          username: data.get('username'), password: data.get('password')
        })
      });
      token = result.accessToken;
      sessionStorage.setItem('guts_erp_token', token);
      await loadProfile();
    } catch (error) {
      toast(humanError((error as Error).message), true);
      button.disabled = false;
      button.textContent = '登录';
    }
  };
}
async function loadProfile() {
  profile = await api<Profile>('/api/v1/auth/me');
  renderShell();
  await loadPage();
}
function renderShell() {
  if (!profile) return renderLogin();
  const menu = navItems();
  const firstName = profile.displayName.trim().slice(0, 1) || 'G';
  root.innerHTML = `<div class="shell">
    <aside class="sidebar${isMobileNav ? ' open' : ''}">
      <a class="brand" href="#" data-page="dashboard"><span class="brand-mark">G</span><span><strong>GUTS ERP</strong><small>RENTAL OPERATIONS</small></span></a>
      <div class="nav-label">工作台</div><nav class="nav">${menu.map((item) =>
        `<button class="nav-button${currentPage === item.page ? ' active' : ''}" data-page="${item.page}">${icon(item.icon)}<span>${item.title}</span></button>`
      ).join('')}</nav>
      <div class="sidebar-bottom">
        <div class="site-chip"><small>当前工作门店</small><strong>${text(profile.site.name)} · ${text(profile.site.code)}</strong></div>
        <div class="user-row"><span class="avatar">${text(firstName)}</span><span class="user-text"><strong>${text(profile.displayName)}</strong><small>${text(profile.username)}</small></span><button class="logout" title="退出登录" data-action="logout">${icon('logout')}</button></div>
      </div>
    </aside>
    <main class="main">
      <header class="topbar"><button class="mobile-menu" data-action="menu" aria-label="打开菜单">☰</button><div class="crumb">GUTS ERP&nbsp; / &nbsp;<b>${titles[currentPage]}</b></div><div class="top-actions"><span class="live"><i></i> 服务正常</span><button class="btn btn-sm btn-quiet" data-action="refresh">${icon('refresh')} 刷新</button></div></header>
      <section class="content" id="page-content"><div class="empty">正在加载…</div></section>
    </main>
  </div>`;
  root.onclick = handleClick;
  root.onsubmit = handleSubmit;
  root.oninput = handleInput;
  root.onchange = handleChange;
}
async function loadPage() {
  try {
    switch (currentPage) {
      case 'dashboard': await renderDashboard(); break;
      case 'reservations': await renderReservations(); break;
      case 'sites': await renderSites(); break;
      case 'accounts': await renderAccounts(); break;
      case 'roles': await renderRoles(); break;
      case 'vehicles': await renderVehicles(); break;
    }
  } catch (error) {
    if ((error as Error).message !== 'unauthorized') {
      const content = $('#page-content');
      if (content) content.innerHTML = `<div class="empty"><strong>暂时无法加载</strong>${text(humanError((error as Error).message))}<br><br><button class="btn" data-action="refresh">${icon('refresh')} 重试</button></div>`;
    }
  }
}
function setContent(html: string) {
  const content = $('#page-content');
  if (content) content.innerHTML = html;
}
function pageHead(title: string, subtitle: string, action = '') {
  return `<div class="page-head"><div><h1>${title}</h1><p>${subtitle}</p></div><div class="head-actions">${action}</div></div>`;
}
function statCard(title: string, number: number, foot: string, iconName: string, tone = '') {
  return `<article class="stat-card"><div class="stat-top">${title}<span class="stat-icon ${tone}">${icon(iconName)}</span></div><div class="stat-number">${number.toLocaleString('zh-CN')}</div><div class="stat-foot">${foot}</div></article>`;
}
async function renderDashboard() {
  const [stats, sitesData, reservationsData] = await Promise.all([
    api<Stats>('/api/v1/dashboard/stats'),
    can('sites:read') ? api<{ items: Site[] }>('/api/v1/sites') : Promise.resolve({ items: [] as Site[] }),
    can('reservations:read') ? api<{ items: Reservation[] }>('/api/v1/reservations?limit=6') : Promise.resolve({ items: [] as Reservation[] })
  ]);
  cachedSites = sitesData.items;
  const upcoming = reservationsData.items.slice(0, 5);
  setContent(`${pageHead('运营总览', `${text(profile!.site.name)} · 查看当前业务概况`)}
    <div class="grid stat-grid">
      ${statCard('服务门店', stats.sites.total, `直营 ${stats.sites.direct} 家 · 加盟 ${stats.sites.franchise} 家`, 'sites')}
      ${statCard('员工账号', stats.accounts.total, `当前启用 ${stats.accounts.active} 个`, 'team', 'green')}
      ${statCard('车辆总数', stats.vehicles.total, `可用 ${stats.vehicles.available} 辆`, 'fleet')}
      ${statCard('正在租用', stats.vehicles.rented, `维护中 ${stats.vehicles.maintenance} 辆`, 'calendar', 'orange')}
    </div>
    <div class="grid dashboard-grid">
      ${can('reservations:read') ? `<section class="panel"><div class="panel-head"><h2>近期接待</h2><button class="btn btn-sm btn-quiet" data-page="reservations">查看全部 ${icon('arrow')}</button></div>
        ${upcoming.length ? `<div class="site-list">${upcoming.map((reservation) => `<div class="site-line"><div><div class="site-name">${text(reservation.guest_name)} <span class="secondary">${text(reservation.guest_phone)}</span></div><div class="site-meta">${moneylessDate(reservation.start_at)} &nbsp;·&nbsp; ${text(reservation.make ?? '')} ${text(reservation.model ?? '')}</div></div><span class="site-code">${text(reservation.reservation_code)}</span>${badge(reservation.status)}</div>`).join('')}</div>` : `<div class="empty">还没有预约记录</div>`}
      </section>` : `<section class="panel"><div class="panel-head"><h2>车辆状态</h2><small>实时汇总</small></div>${fleetBreakdown(stats)}</section>`}
      <section class="panel"><div class="panel-head"><h2>${profile!.site.type === 'headquarters' ? '门店分布' : '我的门店'}</h2><small>${cachedSites.length} 家门店</small></div>
        ${cachedSites.length ? `<div class="site-list">${cachedSites.slice(0, 6).map((site) => `<div class="site-line"><div><div class="site-name">${text(site.name)}</div><div class="site-meta">${text(site.code)}</div></div>${badge(site.type)}${badge(site.status)}</div>`).join('')}</div>` : `<div class="empty">暂无门店信息</div>`}
        ${cachedSites.length > 6 ? `<button class="btn btn-sm" data-page="sites">查看全部门店 ${icon('arrow')}</button>` : ''}
      </section>
      ${can('reservations:read') ? `<section class="panel"><div class="panel-head"><h2>车辆状态</h2><small>实时汇总</small></div>${fleetBreakdown(stats)}</section>` : ''}
    </div>`);
}
function fleetBreakdown(stats: Stats) {
  const maximum = Math.max(stats.vehicles.total, 1);
  const rows = [
    ['可用车辆', stats.vehicles.available, 'green'], ['正在租用', stats.vehicles.rented, ''],
    ['维护中', stats.vehicles.maintenance, 'orange']
  ] as const;
  return `<div class="fleet-breakdown">${rows.map(([name, count, tone]) => `<div class="fleet-row"><span>${name}</span><div class="fleet-track"><div class="fleet-fill ${tone}" style="width:${Math.min(100, count / maximum * 100)}%"></div></div><b>${count}</b></div>`).join('')}</div>`;
}
function renderToolbar(placeholder: string, filterHtml = '') {
  return `<div class="toolbar"><label class="search">${icon('search')}<input data-search placeholder="${placeholder}" value="${text(query)}"></label>${filterHtml}</div>`;
}
function pageTable(headers: string[], rows: string, emptyText: string) {
  return `<div class="table-wrap">${rows
    ? `<table class="table"><thead><tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>`
    : `<div class="empty">${emptyText}</div>`}</div>`;
}
function pagination(total: number, pageSize = 50) {
  return `<div class="pagination"><span>显示 ${total ? offset + 1 : 0}–${offset + total} 条记录</span><div><button class="btn btn-sm" data-action="prev" ${offset <= 0 ? 'disabled' : ''}>上一页</button><button class="btn btn-sm" data-action="next" ${total < pageSize ? 'disabled' : ''}>下一页</button></div></div>`;
}
async function renderSites() {
  const result = await api<{ items: Site[] }>('/api/v1/sites');
  cachedSites = result.items;
  const items = result.items.filter((item) => `${item.name} ${item.code} ${label(item.type)}`.toLowerCase().includes(query.toLowerCase()));
  const rows = items.map((item) => `<tr><td class="primary-cell" data-label="门店">${text(item.name)}<span class="secondary">${text(item.code)}</span></td><td data-label="类型">${badge(item.type)}</td><td data-label="状态">${badge(item.status)}</td><td data-label="操作">${can('sites:write') ? '<span class="secondary">—</span>' : ''}</td></tr>`).join('');
  setContent(`${pageHead('门店管理', '管理总部、直营与加盟门店', can('sites:write') && profile!.site.type === 'headquarters' ? `<button class="btn btn-primary" data-modal="site">${icon('plus')} 新建门店</button>` : '')}
    ${renderToolbar('搜索门店名称或编号')}
    ${pageTable(['门店名称 / 编号', '门店类型', '状态', '操作'], rows, '没有找到门店')}`);
}
async function loadAdminLookups() {
  if (cachedSites.length && cachedRoles.length && cachedPermissions.length) return;
  const [sites, roles, permissions] = await Promise.all([
    api<{ items: Site[] }>('/api/v1/sites'),
    api<{ items: Role[] }>('/api/v1/roles'),
    api<{ items: Permission[] }>('/api/v1/permissions')
  ]);
  cachedSites = sites.items;
  cachedRoles = roles.items;
  cachedPermissions = permissions.items;
}
async function renderAccounts() {
  await loadAdminLookups();
  const params = new URLSearchParams({ limit: '50', offset: String(offset) });
  if (query) params.set('search', query);
  const result = await api<{ items: Account[] }>(`/api/v1/accounts?${params}`);
  currentAccounts = result.items;
  const rows = result.items.map((item) => `<tr>
    <td class="primary-cell" data-label="员工">${text(item.display_name)}<span class="secondary">${text(item.username)}</span></td>
    <td data-label="所属门店">${text(item.site_name)}<span class="secondary">${text(item.site_code)}</span></td>
    <td data-label="角色">${jsonArray(item.role_ids).map((id) => {
      const role = cachedRoles.find((candidate) => candidate.id === id);
      return role ? `<span class="site-code">${text(role.name)}</span>` : '';
    }).join(' ') || '<span class="secondary">未分配</span>'}</td>
    <td data-label="状态">${badge(item.status)}</td>
    <td data-label="操作"><button class="btn btn-sm" data-action="edit-account" data-id="${text(item.id)}">编辑</button></td>
  </tr>`).join('');
  setContent(`${pageHead('员工与账号', '为每位接待员工创建独立账号并分配权限', `<button class="btn btn-primary" data-modal="account">${icon('plus')} 添加员工</button>`)}
    <div class="section-note">建议每位员工使用自己的账号；权限按岗位分配，员工只能访问所属门店的数据。</div>
    ${renderToolbar('搜索姓名、账号或门店')}
    ${pageTable(['员工 / 登录账号', '所属门店', '角色', '状态', '操作'], rows, '还没有员工账号')}
    ${pagination(result.items.length)}`);
}
async function renderRoles() {
  const [roles, permissions] = await Promise.all([
    api<{ items: Role[] }>('/api/v1/roles'),
    api<{ items: Permission[] }>('/api/v1/permissions')
  ]);
  cachedRoles = roles.items;
  cachedPermissions = permissions.items;
  const rows = roles.items.map((role) => `<tr><td class="primary-cell" data-label="角色">${text(role.name)}<span class="secondary">${text(role.role_key)}</span></td><td data-label="权限">${jsonArray(role.permissions).map((permission) => `<span class="site-code">${text(permission)}</span>`).join(' ')}</td><td data-label="操作"><span class="secondary">—</span></td></tr>`).join('');
  setContent(`${pageHead('角色权限', '按岗位预设权限，再分配给员工账号', `<button class="btn btn-primary" data-modal="role">${icon('plus')} 新建角色</button>`)}
    ${pageTable(['角色名称 / 标识', '权限范围', '操作'], rows, '还没有角色')}
    <div class="section-note" style="margin-top:14px">系统权限标识固定；请按接待、门店管理等岗位需要创建角色，尽量遵循最小权限原则。</div>`);
}
function siteOptions(selected = '') {
  return cachedSites.map((site) => `<option value="${text(site.id)}" ${String(site.id) === selected ? 'selected' : ''}>${text(site.name)} · ${text(site.code)}</option>`).join('');
}
function permissionChecks(selected: string[] = []) {
  return `<div class="check-grid">${cachedPermissions.map((permission) => `<label class="check-item"><input type="checkbox" name="permissions" value="${text(permission.permission_key)}" ${selected.includes(permission.permission_key) ? 'checked' : ''}><span>${text(permission.permission_key)}<small>${text(permission.description)}</small></span></label>`).join('')}</div>`;
}
function roleChecks(selected: string[] = []) {
  return `<div class="check-grid">${cachedRoles.map((role) => `<label class="check-item"><input type="checkbox" name="roleIds" value="${text(role.id)}" ${selected.includes(String(role.id)) ? 'checked' : ''}><span>${text(role.name)}<small>${text(role.role_key)}</small></span></label>`).join('') || '<small>暂无角色，请先创建角色</small>'}</div>`;
}
async function renderVehicles() {
  await loadSitesIfMissing();
  const params = new URLSearchParams({ limit: '50', offset: String(offset) });
  if (statusFilter) params.set('status', statusFilter);
  if (query) params.set('search', query);
  const result = await api<{ items: Vehicle[] }>(`/api/v1/vehicles?${params}`);
  currentVehicles = result.items;
  const rows = result.items.map((item) => `<tr>
    <td class="primary-cell" data-label="车辆">${text(item.registration_number)}<span class="secondary">${text(item.make)} ${text(item.model)} ${item.model_year ? `· ${item.model_year}` : ''}</span></td>
    <td data-label="门店">${text(cachedSites.find((site) => site.id === item.site_id)?.name ?? item.site_id)}</td>
    <td data-label="状态">${badge(item.status)}</td>
    <td data-label="车辆ID"><span class="secondary">${text(item.id.slice(0, 8))}…</span></td>
    <td data-label="操作">${can('vehicles:write') ? `<button class="btn btn-sm" data-action="edit-vehicle" data-id="${text(item.id)}">编辑</button>` : ''}</td>
  </tr>`).join('');
  const filter = `<select class="filter-select" data-status><option value="">全部状态</option>${['available','rented','maintenance','retired'].map((status) => `<option value="${status}" ${statusFilter === status ? 'selected' : ''}>${label(status)}</option>`).join('')}</select>`;
  setContent(`${pageHead('车辆管理', '维护车辆主数据并掌握车辆状态', can('vehicles:write') ? `<button class="btn btn-primary" data-modal="vehicle">${icon('plus')} 添加车辆</button>` : '')}
    ${renderToolbar('搜索车牌、品牌或车型', filter)}
    ${pageTable(['车辆 / 车牌', '所属门店', '状态', '固定 ID', '操作'], rows, '没有找到车辆')}
    ${pagination(result.items.length)}`);
}
async function renderReservations() {
  const params = new URLSearchParams({ limit: '50', offset: String(offset) });
  if (statusFilter) params.set('status', statusFilter);
  if (query) params.set('search', query);
  const result = await api<{ items: Reservation[] }>(`/api/v1/reservations?${params}`);
  currentReservations = result.items;
  const rows = result.items.map((item) => {
    const action = item.status === 'reserved' && can('reservations:write')
      ? `<button class="btn btn-sm btn-primary" data-action="reservation-checkin" data-id="${text(item.id)}">办理取车</button> <button class="btn btn-sm btn-quiet" data-action="reservation-cancel" data-id="${text(item.id)}">取消</button>`
      : item.status === 'checked_in' && can('reservations:write')
        ? `<button class="btn btn-sm btn-primary" data-action="reservation-return" data-id="${text(item.id)}">办理还车</button>`
        : '<span class="secondary">—</span>';
    return `<tr>
      <td class="primary-cell" data-label="预约编号">${text(item.reservation_code)}<span class="secondary">${text(item.site_name)}</span></td>
      <td data-label="客人">${text(item.guest_name)}<span class="secondary">${text(item.guest_phone)}</span></td>
      <td data-label="租期">${moneylessDate(item.start_at)}<span class="secondary">至 ${moneylessDate(item.end_at)}</span></td>
      <td data-label="车辆">${text(item.registration_number ?? '未分配')}<span class="secondary">${text(item.make ?? '')} ${text(item.model ?? '')}</span></td>
      <td data-label="状态">${badge(item.status)}</td>
      <td data-label="接待操作">${action}</td>
    </tr>`;
  }).join('');
  const filter = `<select class="filter-select" data-status><option value="">全部预约</option>${['reserved','checked_in','completed','cancelled'].map((status) => `<option value="${status}" ${statusFilter === status ? 'selected' : ''}>${label(status)}</option>`).join('')}</select>`;
  setContent(`${pageHead('预约与接待', '登记客人预约，快速办理取车与还车', can('reservations:write') ? `<button class="btn btn-primary" data-modal="reservation">${icon('plus')} 新建预约</button>` : '')}
    ${renderToolbar('搜索预约号、客人或车牌', filter)}
    ${pageTable(['预约编号 / 门店', '客人信息', '取还车时间', '车辆', '状态', '操作'], rows, '暂无预约，可在客人到店时新建接待单')}
    ${pagination(result.items.length)}`);
}
function field(name: string, title: string, type = 'text', value = '', placeholder = '', required = false, extra = '') {
  return `<div class="field ${extra}"><label for="f-${name}">${title}</label><input id="f-${name}" name="${name}" type="${type}" value="${text(value)}" placeholder="${text(placeholder)}" ${required ? 'required' : ''}></div>`;
}
function selectField(name: string, title: string, options: string, required = true) {
  return `<div class="field"><label for="f-${name}">${title}</label><select id="f-${name}" name="${name}" ${required ? 'required' : ''}>${options}</select></div>`;
}
function modalTemplate(title: string, subtitle: string, body: string, form: string, submit = '保存') {
  modal = form;
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.innerHTML = `<section class="modal" role="dialog" aria-modal="true"><header class="modal-head"><div><h2>${title}</h2><p>${subtitle}</p></div><button class="modal-close" data-action="close-modal" aria-label="关闭">×</button></header><form data-form="${form}"><div class="modal-body">${body}</div><footer class="modal-foot"><button type="button" class="btn" data-action="close-modal">取消</button><button type="submit" class="btn btn-primary">${submit}</button></footer></form></section>`;
  root.append(overlay);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeModal();
  });
}
function closeModal() {
  $('.overlay')?.remove();
  modal = '';
}
async function openModal(which: string, id = '') {
  try {
    if (['account', 'role'].includes(which)) await loadAdminLookups();
    if (which === 'site') {
      modalTemplate('新建门店', '新增直营店或加盟合作门店', `<div class="form-grid">
        ${field('code', '门店编号', 'text', '', '例如 TKY-001', true)}
        ${selectField('type', '门店类型', '<option value="direct">直营店</option><option value="franchise">加盟店</option>')}
        ${field('name', '门店名称', 'text', '', '请输入门店名称', true, 'full')}
      </div>`, 'site');
    } else if (which === 'account') {
      modalTemplate('添加员工账号', '为新员工创建独立的登录账号', `<div class="form-grid">
        ${field('username', '登录账号', 'text', '', '3–64 位字母、数字或符号', true)}
        ${field('displayName', '员工姓名', 'text', '', '请输入真实姓名', true)}
        ${field('password', '初始密码', 'password', '', '至少 12 位', true)}
        ${selectField('siteId', '所属门店', `<option value="">请选择门店</option>${siteOptions()}`)}
        <div class="field full"><span class="field-label">岗位角色</span>${roleChecks()}</div>
        <div class="field full"><span class="field-label">额外权限（按需选择）</span>${permissionChecks()}</div>
      </div>`, 'account');
    } else if (which === 'edit-account') {
      const account = currentAccounts.find((item) => item.id === id);
      if (!account) throw new Error('not_found');
      modalTemplate('编辑员工账号', `${text(account.username)} · 更新所属门店、权限或状态`, `<input type="hidden" name="id" value="${text(account.id)}"><div class="form-grid">
        ${field('displayName', '员工姓名', 'text', account.display_name, '', true)}
        ${selectField('siteId', '所属门店', siteOptions(account.site_id))}
        ${selectField('status', '账号状态', `<option value="active" ${account.status === 'active' ? 'selected' : ''}>正常</option><option value="disabled" ${account.status === 'disabled' ? 'selected' : ''}>停用</option>`)}
        ${field('password', '重置密码（可留空）', 'password', '', '留空表示不修改')}
        <div class="field full"><span class="field-label">岗位角色</span>${roleChecks(jsonArray(account.role_ids))}</div>
        <div class="field full"><span class="field-label">额外权限</span>${permissionChecks(jsonArray(account.permissions))}</div>
      </div>`, 'edit-account');
    } else if (which === 'role') {
      modalTemplate('新建岗位角色', '设置稳定角色编号，并勾选该岗位需要的权限', `<div class="form-grid">
        ${field('roleKey', '角色编号', 'text', '', '例如 front_desk', true)}
        ${field('name', '角色名称', 'text', '', '例如 前台接待', true)}
        <div class="field full"><span class="field-label">权限</span>${permissionChecks()}</div>
      </div>`, 'role');
    } else if (which === 'vehicle') {
      await loadSitesIfMissing();
      modalTemplate('添加车辆', '为车队新增一条车辆主数据', `<div class="form-grid">
        ${field('registrationNumber', '车牌号码', 'text', '', '请输入完整车牌', true)}
        ${field('vin', '车架号码（选填）', 'text', '', 'VIN')}
        ${field('make', '品牌', 'text', '', '例如 Toyota', true)}
        ${field('model', '车型', 'text', '', '例如 Prius', true)}
        ${field('modelYear', '年份（选填）', 'number', '', '2024')}
        ${selectField('siteId', '所属门店', `<option value="">请选择门店</option>${siteOptions()}`)}
      </div>`, 'vehicle');
    } else if (which === 'edit-vehicle') {
      const vehicle = currentVehicles.find((item) => item.id === id);
      if (!vehicle) throw new Error('not_found');
      await loadSitesIfMissing();
      modalTemplate('编辑车辆信息', `${text(vehicle.registration_number)} · 固定车辆 ID 不会改变`, `<input type="hidden" name="id" value="${text(vehicle.id)}"><div class="form-grid">
        ${field('registrationNumber', '车牌号码', 'text', vehicle.registration_number, '', true)}
        ${field('vin', '车架号码', 'text', vehicle.vin ?? '')}
        ${field('make', '品牌', 'text', vehicle.make, '', true)}
        ${field('model', '车型', 'text', vehicle.model, '', true)}
        ${field('modelYear', '年份', 'number', String(vehicle.model_year ?? ''))}
        ${selectField('siteId', '所属门店', siteOptions(vehicle.site_id))}
        ${selectField('status', '车辆状态', ['available','rented','maintenance','retired'].map((status) => `<option value="${status}" ${vehicle.status === status ? 'selected' : ''}>${label(status)}</option>`).join(''))}
      </div>`, 'edit-vehicle');
    } else if (which === 'reservation') {
      await loadSitesIfMissing();
      const defaultStart = new Date(Date.now() + 30 * 60_000);
      const defaultEnd = new Date(defaultStart.getTime() + 24 * 60 * 60_000);
      const localDate = (date: Date) => new Date(date.getTime() - date.getTimezoneOffset() * 60_000).toISOString().slice(0, 16);
      const bookingSite = profile!.site.type === 'headquarters' ? '' : profile!.site.id;
      const scope = bookingSite ? `&siteId=${encodeURIComponent(bookingSite)}` : '';
      const vehicles = await api<{ items: Vehicle[] }>(`/api/v1/vehicles?status=available&limit=100${scope}`);
      const vehicleOptions = vehicles.items.map((vehicle) => `<option value="${text(vehicle.id)}">${text(vehicle.registration_number)} · ${text(vehicle.make)} ${text(vehicle.model)}</option>`).join('');
      const siteField = profile!.site.type === 'headquarters'
        ? `<div class="field"><label for="f-siteId">接待门店</label><select id="f-siteId" name="siteId" data-reservation-site required><option value="">请选择门店</option>${siteOptions()}</select></div>`
        : '';
      modalTemplate('新建接待预约', '登记客人及租期，到店后可直接办理取车', `<div class="form-grid">
        ${field('guestName', '客人姓名', 'text', '', '请输入客人姓名', true)}
        ${field('guestPhone', '联系电话', 'tel', '', '日本或国际电话号码', true)}
        ${field('startAt', '预计取车时间', 'datetime-local', localDate(defaultStart), '', true)}
        ${field('endAt', '预计还车时间', 'datetime-local', localDate(defaultEnd), '', true)}
        ${siteField}
        ${selectField('vehicleId', '预留车辆', `<option value="">请选择可用车辆</option>${vehicleOptions}`)}
      </div>`, 'reservation', '保存预约');
    }
  } catch (error) {
    toast(humanError((error as Error).message), true);
  }
}
async function loadSitesIfMissing() {
  if (!cachedSites.length) cachedSites = (await api<{ items: Site[] }>('/api/v1/sites')).items;
}
function checkedValues(form: HTMLFormElement, name: string) {
  return [...form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]:checked`)].map((item) => item.value);
}
async function handleSubmit(event: Event) {
  const form = (event.target as HTMLElement).closest<HTMLFormElement>('form[data-form]');
  if (!form) return;
  event.preventDefault();
  const kind = form.dataset.form!;
  const data = new FormData(form);
  const value = (key: string) => String(data.get(key) ?? '').trim();
  const submit = $<HTMLButtonElement>('button[type="submit"]', form);
  if (submit) submit.setAttribute('disabled', 'true');
  try {
    if (kind === 'site') {
      await api('/api/v1/sites', { method: 'POST', body: JSON.stringify({ code: value('code'), name: value('name'), type: value('type') }) });
    } else if (kind === 'account') {
      await api('/api/v1/accounts', { method: 'POST', body: JSON.stringify({
        siteId: value('siteId'), username: value('username'), displayName: value('displayName'),
        password: value('password'), roleIds: checkedValues(form, 'roleIds'), permissions: checkedValues(form, 'permissions')
      }) });
    } else if (kind === 'edit-account') {
      const payload: Record<string, unknown> = {
        displayName: value('displayName'), siteId: value('siteId'), status: value('status'),
        roleIds: checkedValues(form, 'roleIds'), permissions: checkedValues(form, 'permissions')
      };
      if (value('password')) payload.password = value('password');
      await api(`/api/v1/accounts/${encodeURIComponent(value('id'))}`, { method: 'PATCH', body: JSON.stringify(payload) });
    } else if (kind === 'role') {
      await api('/api/v1/roles', { method: 'POST', body: JSON.stringify({
        roleKey: value('roleKey'), name: value('name'), permissions: checkedValues(form, 'permissions')
      }) });
    } else if (kind === 'vehicle') {
      await api('/api/v1/vehicles', { method: 'POST', body: JSON.stringify({
        registrationNumber: value('registrationNumber'), vin: value('vin') || undefined,
        make: value('make'), model: value('model'), modelYear: value('modelYear') ? Number(value('modelYear')) : undefined,
        siteId: value('siteId')
      }) });
    } else if (kind === 'edit-vehicle') {
      await api(`/api/v1/vehicles/${encodeURIComponent(value('id'))}`, { method: 'PATCH', body: JSON.stringify({
        registrationNumber: value('registrationNumber'), vin: value('vin') || null,
        make: value('make'), model: value('model'), modelYear: value('modelYear') ? Number(value('modelYear')) : null,
        siteId: value('siteId'), status: value('status')
      }) });
    } else if (kind === 'reservation') {
      const startAt = new Date(value('startAt'));
      const endAt = new Date(value('endAt'));
      if (!Number.isFinite(startAt.getTime()) || !Number.isFinite(endAt.getTime()) || startAt >= endAt) {
        throw new Error('请正确填写取车和还车时间');
      }
      const payload: Record<string, unknown> = {
        guestName: value('guestName'), guestPhone: value('guestPhone'),
        startAt: startAt.toISOString(), endAt: endAt.toISOString(), vehicleId: value('vehicleId')
      };
      if (profile!.site.type === 'headquarters') payload.siteId = value('siteId');
      await api('/api/v1/reservations', { method: 'POST', body: JSON.stringify(payload) });
    }
    closeModal();
    toast('保存成功');
    if (kind === 'site') cachedSites = [];
    if (kind === 'role') cachedRoles = [];
    await loadPage();
  } catch (error) {
    toast(humanError((error as Error).message), true);
    if (submit) submit.removeAttribute('disabled');
  }
}
async function handleClick(event: MouseEvent) {
  const target = (event.target as HTMLElement).closest<HTMLElement>('[data-page],[data-action],[data-modal]');
  if (!target) return;
  if (target.dataset.page) {
    event.preventDefault();
    currentPage = target.dataset.page as Page;
    offset = 0; query = ''; statusFilter = ''; isMobileNav = false;
    renderShell();
    await loadPage();
  } else if (target.dataset.modal) {
    await openModal(target.dataset.modal);
  } else if (target.dataset.action === 'close-modal') {
    closeModal();
  } else if (target.dataset.action === 'logout') {
    token = ''; profile = null; sessionStorage.removeItem('guts_erp_token'); renderLogin();
  } else if (target.dataset.action === 'refresh') {
    await loadPage();
  } else if (target.dataset.action === 'menu') {
    isMobileNav = !isMobileNav;
    $('.sidebar')?.classList.toggle('open', isMobileNav);
  } else if (target.dataset.action === 'next') {
    offset += 50; await loadPage();
  } else if (target.dataset.action === 'prev') {
    offset = Math.max(0, offset - 50); await loadPage();
  } else if (target.dataset.action === 'edit-account' || target.dataset.action === 'edit-vehicle') {
    await openModal(target.dataset.action, target.dataset.id);
  } else if (target.dataset.action?.startsWith('reservation-')) {
    const item = currentReservations.find((reservation) => reservation.id === target.dataset.id);
    if (!item) return;
    const status = target.dataset.action === 'reservation-checkin' ? 'checked_in'
      : target.dataset.action === 'reservation-return' ? 'completed' : 'cancelled';
    const prompt = status === 'checked_in' ? `为 ${item.guest_name} 办理取车？车辆 ${item.registration_number ?? ''} 将标记为租用中。`
      : status === 'completed' ? `确认 ${item.guest_name} 已还车？车辆将恢复为可用。`
        : `确定取消客人 ${item.guest_name} 的预约吗？`;
    if (!window.confirm(prompt)) return;
    try {
      await api(`/api/v1/reservations/${encodeURIComponent(item.id)}`, { method: 'PATCH', body: JSON.stringify({ status }) });
      toast(status === 'checked_in' ? '取车手续已完成' : status === 'completed' ? '还车手续已完成' : '预约已取消');
      await loadPage();
    } catch (error) { toast(humanError((error as Error).message), true); }
  }
}
function handleInput(event: Event) {
  if (!(event.target instanceof HTMLInputElement) || !event.target.matches('[data-search]')) return;
  const caret = event.target.selectionStart;
  query = event.target.value;
  offset = 0;
  const render = currentPage === 'sites' ? renderSites
    : currentPage === 'accounts' ? renderAccounts
      : currentPage === 'vehicles' ? renderVehicles
        : currentPage === 'reservations' ? renderReservations : null;
  if (!render) return;
  window.clearTimeout(searchTimer);
  searchTimer = window.setTimeout(() => {
    void render().then(() => {
      const search = $('[data-search]');
      search?.focus();
      if (search instanceof HTMLInputElement && caret !== null) search.setSelectionRange(caret, caret);
    }).catch((error) => toast(humanError((error as Error).message), true));
  }, 180);
}
function handleChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  if (target.matches('[data-status]')) {
    statusFilter = target.value; offset = 0; void loadPage();
  } else if (target.matches('[data-reservation-site]')) {
    const vehicleSelect = $('[name="vehicleId"]', $('.overlay')!);
    if (!vehicleSelect) return;
    vehicleSelect.innerHTML = '<option value="">正在加载车辆…</option>';
    vehicleSelect.setAttribute('disabled', 'true');
    void api<{ items: Vehicle[] }>(`/api/v1/vehicles?${new URLSearchParams({
      status: 'available', limit: '100', siteId: target.value
    })}`).then((response) => {
      vehicleSelect.innerHTML = `<option value="">请选择可用车辆</option>${response.items.map((vehicle) => `<option value="${text(vehicle.id)}">${text(vehicle.registration_number)} · ${text(vehicle.make)} ${text(vehicle.model)}</option>`).join('')}`;
    }).catch((error) => {
      vehicleSelect.innerHTML = '<option value="">车辆加载失败，请重新选择门店</option>';
      toast(humanError((error as Error).message), true);
    }).finally(() => vehicleSelect.removeAttribute('disabled'));
  }
}

if (token) {
  loadProfile().catch(() => {
    token = ''; profile = null; sessionStorage.removeItem('guts_erp_token'); renderLogin();
  });
} else renderLogin();
