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
const appVersion = document.querySelector<HTMLMetaElement>('meta[name="app-version"]')?.content ?? '不明';
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
  dashboard: '運営ダッシュボード', reservations: '予約・受付', sites: '店舗管理',
  accounts: 'スタッフ・アカウント', roles: '権限管理', vehicles: '車両管理'
};
const statusLabel: Record<string, string> = {
  active: '有効', disabled: '無効', inactive: '無効', available: '貸出可能', rented: '貸出中',
  maintenance: '整備中', retired: '登録抹消', headquarters: '本部', direct: '直営店',
  franchise: '加盟店', reserved: '予約済み', checked_in: '貸出中', completed: '返却済み',
  cancelled: 'キャンセル'
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
  return Number.isNaN(date.getTime()) ? esc(value) : new Intl.DateTimeFormat('ja-JP', {
    month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false
  }).format(date);
};
const humanError = (code: string) => ({
  invalid_credentials: 'アカウントまたはパスワードが正しくありません。',
  forbidden: 'この操作を行う権限がありません。',
  resource_conflict: '情報が重複しています。コード、アカウント名、またはナンバープレートをご確認ください。',
  reservation_conflict: '車両または予約の状態が変更されています。画面を更新して再度お試しください。',
  invalid_reference: '選択した店舗、役割、または車両が見つかりません。',
  invalid_request: '入力内容をご確認ください。',
  internal_error: 'システムエラーが発生しました。しばらくしてから再度お試しください。',
  unauthorized: 'ログインの有効期限が切れました。再度ログインしてください。',
  account_unavailable: 'アカウントまたは所属店舗が無効になっています。',
  account_not_found: 'アカウントが見つかりません。',
  vehicle_not_found: '車両が見つかりません。',
  reservation_not_found: '予約が見つかりません。',
  invalid_site: '店舗情報をご確認ください。',
  invalid_role: '役割情報をご確認ください。',
  invalid_account: 'アカウント情報をご確認ください。',
  unknown_permission: '選択された権限が見つかりません。',
  site_required: '店舗を選択してください。',
  invalid_reservation: '予約内容をご確認ください。',
  not_found: '対象の情報が見つかりません。'
}[code] ?? '操作を完了できませんでした。時間をおいて再度お試しください。');

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
  if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
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
    { page: 'dashboard', title: '運営ダッシュボード', icon: 'dashboard' },
    { page: 'reservations', title: '予約・受付', icon: 'calendar', permission: 'reservations:read' },
    { page: 'sites', title: '店舗管理', icon: 'site', permission: 'sites:read' },
    { page: 'accounts', title: 'スタッフ・アカウント', icon: 'people', permission: 'accounts:write' },
    { page: 'roles', title: '権限管理', icon: 'roles', permission: 'accounts:write' },
    { page: 'vehicles', title: '車両管理', icon: 'vehicle', permission: 'vehicles:read' }
  ];
  return items.filter((item) => (!item.permission || can(item.permission)) &&
    (!['accounts', 'roles'].includes(item.page) || profile?.site.type === 'headquarters'));
}
function renderLogin() {
  root.innerHTML = `<main class="login-screen login-simple">
    <form class="login-form" data-form="login">
      <input name="username" autocomplete="username" required placeholder="アカウント" aria-label="アカウント">
      <input name="password" type="password" autocomplete="current-password" required placeholder="パスワード" aria-label="パスワード">
      <button class="btn btn-primary" type="submit">ログイン</button>
    </form>
    <small class="app-version">バージョン ${text(appVersion)}</small>
  </main>`;
  root.onsubmit = async (event) => {
    const form = (event.target as HTMLElement).closest<HTMLFormElement>('[data-form="login"]');
    if (!form) return;
    event.preventDefault();
    const button = $<HTMLButtonElement>('button[type="submit"]', form)!;
    button.disabled = true;
    button.textContent = 'ログイン中…';
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
      button.textContent = 'ログイン';
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
      <a class="brand" href="#" data-page="dashboard"><span class="brand-mark">G</span><span><strong>GUTS ERP</strong><small>レンタカー運営管理</small></span></a>
      <div class="nav-label">メニュー</div><nav class="nav">${menu.map((item) =>
        `<button class="nav-button${currentPage === item.page ? ' active' : ''}" data-page="${item.page}">${icon(item.icon)}<span>${item.title}</span></button>`
      ).join('')}</nav>
      <div class="sidebar-bottom">
        <div class="site-chip"><small>所属店舗</small><strong>${text(profile.site.name)} · ${text(profile.site.code)}</strong></div>
        <div class="user-row"><span class="avatar">${text(firstName)}</span><span class="user-text"><strong>${text(profile.displayName)}</strong><small>${text(profile.username)}</small></span><button class="logout" title="ログアウト" data-action="logout">${icon('logout')}</button></div>
      </div>
    </aside>
    <main class="main">
      <header class="topbar"><button class="mobile-menu" data-action="menu" aria-label="メニューを開く">☰</button><div class="crumb">GUTS ERP&nbsp; / &nbsp;<b>${titles[currentPage]}</b></div><div class="top-actions"><span class="live"><i></i> 正常稼働中</span><button class="btn btn-sm btn-quiet" data-action="refresh">${icon('refresh')} 更新</button><small class="app-version">v${text(appVersion)}</small></div></header>
      <section class="content" id="page-content"><div class="empty">読み込み中…</div></section>
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
      if (content) content.innerHTML = `<div class="empty"><strong>読み込めませんでした</strong>${text(humanError((error as Error).message))}<br><br><button class="btn" data-action="refresh">${icon('refresh')} 再試行</button></div>`;
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
  return `<article class="stat-card"><div class="stat-top">${title}<span class="stat-icon ${tone}">${icon(iconName)}</span></div><div class="stat-number">${number.toLocaleString('ja-JP')}</div><div class="stat-foot">${foot}</div></article>`;
}
async function renderDashboard() {
  const [stats, sitesData, reservationsData] = await Promise.all([
    api<Stats>('/api/v1/dashboard/stats'),
    can('sites:read') ? api<{ items: Site[] }>('/api/v1/sites') : Promise.resolve({ items: [] as Site[] }),
    can('reservations:read') ? api<{ items: Reservation[] }>('/api/v1/reservations?limit=6') : Promise.resolve({ items: [] as Reservation[] })
  ]);
  cachedSites = sitesData.items;
  const upcoming = reservationsData.items.slice(0, 5);
  setContent(`${pageHead('運営ダッシュボード', `${text(profile!.site.name)} · 店舗の運営状況`)}
    <div class="grid stat-grid">
      ${statCard('店舗数', stats.sites.total, `直営 ${stats.sites.direct} 店 · 加盟 ${stats.sites.franchise} 店`, 'sites')}
      ${statCard('スタッフアカウント', stats.accounts.total, `有効 ${stats.accounts.active} 件`, 'team', 'green')}
      ${statCard('車両台数', stats.vehicles.total, `貸出可能 ${stats.vehicles.available} 台`, 'fleet')}
      ${statCard('貸出中', stats.vehicles.rented, `整備中 ${stats.vehicles.maintenance} 台`, 'calendar', 'orange')}
    </div>
    <div class="grid dashboard-grid">
      ${can('reservations:read') ? `<section class="panel"><div class="panel-head"><h2>最近の予約・受付</h2><button class="btn btn-sm btn-quiet" data-page="reservations">すべて表示 ${icon('arrow')}</button></div>
        ${upcoming.length ? `<div class="site-list">${upcoming.map((reservation) => `<div class="site-line"><div><div class="site-name">${text(reservation.guest_name)} <span class="secondary">${text(reservation.guest_phone)}</span></div><div class="site-meta">${moneylessDate(reservation.start_at)} &nbsp;·&nbsp; ${text(reservation.make ?? '')} ${text(reservation.model ?? '')}</div></div><span class="site-code">${text(reservation.reservation_code)}</span>${badge(reservation.status)}</div>`).join('')}</div>` : `<div class="empty">予約はありません</div>`}
      </section>` : `<section class="panel"><div class="panel-head"><h2>車両状況</h2><small>リアルタイム集計</small></div>${fleetBreakdown(stats)}</section>`}
      <section class="panel"><div class="panel-head"><h2>${profile!.site.type === 'headquarters' ? '店舗一覧' : '所属店舗'}</h2><small>${cachedSites.length} 店舗</small></div>
        ${cachedSites.length ? `<div class="site-list">${cachedSites.slice(0, 6).map((site) => `<div class="site-line"><div><div class="site-name">${text(site.name)}</div><div class="site-meta">${text(site.code)}</div></div>${badge(site.type)}${badge(site.status)}</div>`).join('')}</div>` : `<div class="empty">店舗情報はありません</div>`}
        ${cachedSites.length > 6 ? `<button class="btn btn-sm" data-page="sites">すべての店舗を表示 ${icon('arrow')}</button>` : ''}
      </section>
      ${can('reservations:read') ? `<section class="panel"><div class="panel-head"><h2>車両状況</h2><small>リアルタイム集計</small></div>${fleetBreakdown(stats)}</section>` : ''}
    </div>`);
}
function fleetBreakdown(stats: Stats) {
  const maximum = Math.max(stats.vehicles.total, 1);
  const rows = [
    ['貸出可能', stats.vehicles.available, 'green'], ['貸出中', stats.vehicles.rented, ''],
    ['整備中', stats.vehicles.maintenance, 'orange']
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
  return `<div class="pagination"><span>${total ? offset + 1 : 0}～${offset + total}件を表示</span><div><button class="btn btn-sm" data-action="prev" ${offset <= 0 ? 'disabled' : ''}>前へ</button><button class="btn btn-sm" data-action="next" ${total < pageSize ? 'disabled' : ''}>次へ</button></div></div>`;
}
async function renderSites() {
  const result = await api<{ items: Site[] }>('/api/v1/sites');
  cachedSites = result.items;
  const items = result.items.filter((item) => `${item.name} ${item.code} ${label(item.type)}`.toLowerCase().includes(query.toLowerCase()));
  const rows = items.map((item) => `<tr><td class="primary-cell" data-label="店舗">${text(item.name)}<span class="secondary">${text(item.code)}</span></td><td data-label="種別">${badge(item.type)}</td><td data-label="状態">${badge(item.status)}</td><td data-label="操作">${can('sites:write') ? '<span class="secondary">—</span>' : ''}</td></tr>`).join('');
  setContent(`${pageHead('店舗管理', '本部・直営店・加盟店を管理', can('sites:write') && profile!.site.type === 'headquarters' ? `<button class="btn btn-primary" data-modal="site">${icon('plus')} 店舗を追加</button>` : '')}
    ${renderToolbar('店舗名または店舗コードで検索')}
    ${pageTable(['店舗名 / コード', '店舗種別', '状態', '操作'], rows, '店舗が見つかりません')}`);
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
    <td class="primary-cell" data-label="スタッフ">${text(item.display_name)}<span class="secondary">${text(item.username)}</span></td>
    <td data-label="所属店舗">${text(item.site_name)}<span class="secondary">${text(item.site_code)}</span></td>
    <td data-label="役割">${jsonArray(item.role_ids).map((id) => {
      const role = cachedRoles.find((candidate) => candidate.id === id);
      return role ? `<span class="site-code">${text(role.name)}</span>` : '';
    }).join(' ') || '<span class="secondary">未設定</span>'}</td>
    <td data-label="状態">${badge(item.status)}</td>
    <td data-label="操作"><button class="btn btn-sm" data-action="edit-account" data-id="${text(item.id)}">編集</button></td>
  </tr>`).join('');
  setContent(`${pageHead('スタッフ・アカウント', 'スタッフごとにアカウントを作成し、権限を割り当てます', `<button class="btn btn-primary" data-modal="account">${icon('plus')} スタッフを追加</button>`)}
    <div class="section-note">アカウントはスタッフごとに作成してください。権限は役割に応じて割り当てられ、各スタッフは所属店舗のデータのみを閲覧できます。</div>
    ${renderToolbar('氏名、アカウント名、店舗名で検索')}
    ${pageTable(['スタッフ / アカウント', '所属店舗', '役割', '状態', '操作'], rows, 'スタッフアカウントはありません')}
    ${pagination(result.items.length)}`);
}
async function renderRoles() {
  const [roles, permissions] = await Promise.all([
    api<{ items: Role[] }>('/api/v1/roles'),
    api<{ items: Permission[] }>('/api/v1/permissions')
  ]);
  cachedRoles = roles.items;
  cachedPermissions = permissions.items;
  const permissionNames: Record<string, string> = {
    'sites:read': '店舗情報の閲覧', 'sites:write': '店舗情報の管理',
    'accounts:write': 'スタッフアカウントの管理',
    'vehicles:read': '車両情報の閲覧', 'vehicles:write': '車両情報の管理',
    'reservations:read': '予約・受付情報の閲覧',
    'reservations:write': '予約の作成、貸出・返却手続き'
  };
  const rows = roles.items.map((role) => `<tr><td class="primary-cell" data-label="役割">${text(role.name)}<span class="secondary">${text(role.role_key)}</span></td><td data-label="権限">${jsonArray(role.permissions).map((permission) => `<span class="site-code">${permissionNames[permission] ?? 'その他の権限'}</span>`).join(' ')}</td><td data-label="操作"><span class="secondary">—</span></td></tr>`).join('');
  setContent(`${pageHead('権限管理', '役割ごとに権限を設定し、スタッフに割り当てます', `<button class="btn btn-primary" data-modal="role">${icon('plus')} 役割を追加</button>`)}
    ${pageTable(['役割名 / 識別子', '権限', '操作'], rows, '役割はありません')}
    <div class="section-note" style="margin-top:14px">権限識別子は固定です。受付や店舗管理などの業務に必要な権限だけを割り当ててください。</div>`);
}
function siteOptions(selected = '') {
  return cachedSites.map((site) => `<option value="${text(site.id)}" ${String(site.id) === selected ? 'selected' : ''}>${text(site.name)} · ${text(site.code)}</option>`).join('');
}
function permissionChecks(selected: string[] = []) {
  const permissionNames: Record<string, string> = {
    'sites:read': '店舗情報の閲覧', 'sites:write': '店舗情報の管理',
    'accounts:write': 'スタッフアカウントの管理',
    'vehicles:read': '車両情報の閲覧', 'vehicles:write': '車両情報の管理',
    'reservations:read': '予約・受付情報の閲覧',
    'reservations:write': '予約の作成、貸出・返却手続き'
  };
  const descriptions: Record<string, string> = {
    'sites:read': '店舗情報の閲覧', 'sites:write': '店舗情報の作成・管理',
    'accounts:write': 'アカウントの作成と役割・権限の割り当て',
    'vehicles:read': '車両情報の閲覧', 'vehicles:write': '車両情報の作成・管理',
    'reservations:read': '予約情報と受付状況の閲覧',
    'reservations:write': '予約の作成、貸出・返却手続き'
  };
  return `<div class="check-grid">${cachedPermissions.map((permission) => `<label class="check-item"><input type="checkbox" name="permissions" value="${text(permission.permission_key)}" ${selected.includes(permission.permission_key) ? 'checked' : ''}><span>${permissionNames[permission.permission_key] ?? 'その他の権限'}<small>${descriptions[permission.permission_key] ?? '権限の説明はありません'}</small></span></label>`).join('')}</div>`;
}
function roleChecks(selected: string[] = []) {
  return `<div class="check-grid">${cachedRoles.map((role) => `<label class="check-item"><input type="checkbox" name="roleIds" value="${text(role.id)}" ${selected.includes(String(role.id)) ? 'checked' : ''}><span>${text(role.name)}<small>${text(role.role_key)}</small></span></label>`).join('') || '<small>役割がありません。先に役割を作成してください。</small>'}</div>`;
}
async function renderVehicles() {
  await loadSitesIfMissing();
  const params = new URLSearchParams({ limit: '50', offset: String(offset) });
  if (statusFilter) params.set('status', statusFilter);
  if (query) params.set('search', query);
  const result = await api<{ items: Vehicle[] }>(`/api/v1/vehicles?${params}`);
  currentVehicles = result.items;
  const rows = result.items.map((item) => `<tr>
    <td class="primary-cell" data-label="車両">${text(item.registration_number)}<span class="secondary">${text(item.make)} ${text(item.model)} ${item.model_year ? `・${item.model_year}` : ''}</span></td>
    <td data-label="店舗">${text(cachedSites.find((site) => site.id === item.site_id)?.name ?? item.site_id)}</td>
    <td data-label="状態">${badge(item.status)}</td>
    <td data-label="車両ID"><span class="secondary">${text(item.id.slice(0, 8))}…</span></td>
    <td data-label="操作">${can('vehicles:write') ? `<button class="btn btn-sm" data-action="edit-vehicle" data-id="${text(item.id)}">編集</button>` : ''}</td>
  </tr>`).join('');
  const filter = `<select class="filter-select" data-status><option value="">すべての状態</option>${['available','rented','maintenance','retired'].map((status) => `<option value="${status}" ${statusFilter === status ? 'selected' : ''}>${label(status)}</option>`).join('')}</select>`;
  setContent(`${pageHead('車両管理', '車両情報と稼働状況を管理', can('vehicles:write') ? `<button class="btn btn-primary" data-modal="vehicle">${icon('plus')} 車両を追加</button>` : '')}
    ${renderToolbar('ナンバープレート、メーカー、車種で検索', filter)}
    ${pageTable(['車両 / ナンバープレート', '所属店舗', '状態', '固定ID', '操作'], rows, '車両が見つかりません')}
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
      ? `<button class="btn btn-sm btn-primary" data-action="reservation-checkin" data-id="${text(item.id)}">貸出手続き</button> <button class="btn btn-sm btn-quiet" data-action="reservation-cancel" data-id="${text(item.id)}">キャンセル</button>`
      : item.status === 'checked_in' && can('reservations:write')
        ? `<button class="btn btn-sm btn-primary" data-action="reservation-return" data-id="${text(item.id)}">返却手続き</button>`
        : '<span class="secondary">—</span>';
    return `<tr>
      <td class="primary-cell" data-label="予約番号">${text(item.reservation_code)}<span class="secondary">${text(item.site_name)}</span></td>
      <td data-label="お客様">${text(item.guest_name)}<span class="secondary">${text(item.guest_phone)}</span></td>
      <td data-label="利用期間">${moneylessDate(item.start_at)}<span class="secondary">～ ${moneylessDate(item.end_at)}</span></td>
      <td data-label="車両">${text(item.registration_number ?? '未割り当て')}<span class="secondary">${text(item.make ?? '')} ${text(item.model ?? '')}</span></td>
      <td data-label="状態">${badge(item.status)}</td>
      <td data-label="受付操作">${action}</td>
    </tr>`;
  }).join('');
  const filter = `<select class="filter-select" data-status><option value="">すべての予約</option>${['reserved','checked_in','completed','cancelled'].map((status) => `<option value="${status}" ${statusFilter === status ? 'selected' : ''}>${label(status)}</option>`).join('')}</select>`;
  setContent(`${pageHead('予約・受付', '予約を登録し、貸出・返却手続きを行います', can('reservations:write') ? `<button class="btn btn-primary" data-modal="reservation">${icon('plus')} 予約を作成</button>` : '')}
    ${renderToolbar('予約番号、お客様、ナンバープレートで検索', filter)}
    ${pageTable(['予約番号 / 店舗', 'お客様情報', '利用期間', '車両', '状態', '操作'], rows, '予約はありません。来店時に受付を登録してください')}
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
  overlay.innerHTML = `<section class="modal" role="dialog" aria-modal="true"><header class="modal-head"><div><h2>${title}</h2><p>${subtitle}</p></div><button class="modal-close" data-action="close-modal" aria-label="閉じる">×</button></header><form data-form="${form}"><div class="modal-body">${body}</div><footer class="modal-foot"><button type="button" class="btn" data-action="close-modal">キャンセル</button><button type="submit" class="btn btn-primary">${submit}</button></footer></form></section>`;
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
      modalTemplate('店舗を追加', '直営店または加盟店を登録します', `<div class="form-grid">
        ${field('code', '店舗コード', 'text', '', '例：TKY-001', true)}
        ${selectField('type', '店舗種別', '<option value="direct">直営店</option><option value="franchise">加盟店</option>')}
        ${field('name', '店舗名', 'text', '', '店舗名を入力してください', true, 'full')}
      </div>`, 'site');
    } else if (which === 'account') {
      modalTemplate('スタッフアカウントを追加', '新しいスタッフのログインアカウントを作成します', `<div class="form-grid">
        ${field('username', 'アカウント名', 'text', '', '半角英数字・記号 3～64 文字', true)}
        ${field('displayName', '氏名', 'text', '', '氏名を入力してください', true)}
        ${field('password', '初期パスワード', 'password', '', '12 文字以上', true)}
        ${selectField('siteId', '所属店舗', `<option value="">店舗を選択してください</option>${siteOptions()}`)}
        <div class="field full"><span class="field-label">役割</span>${roleChecks()}</div>
        <div class="field full"><span class="field-label">追加権限（必要な場合のみ）</span>${permissionChecks()}</div>
      </div>`, 'account');
    } else if (which === 'edit-account') {
      const account = currentAccounts.find((item) => item.id === id);
      if (!account) throw new Error('not_found');
      modalTemplate('スタッフアカウントを編集', `${text(account.username)} · 所属店舗、権限、状態を更新`, `<input type="hidden" name="id" value="${text(account.id)}"><div class="form-grid">
        ${field('displayName', '氏名', 'text', account.display_name, '', true)}
        ${selectField('siteId', '所属店舗', siteOptions(account.site_id))}
        ${selectField('status', 'アカウントの状態', `<option value="active" ${account.status === 'active' ? 'selected' : ''}>有効</option><option value="disabled" ${account.status === 'disabled' ? 'selected' : ''}>無効</option>`)}
        ${field('password', 'パスワードを再設定（任意）', 'password', '', '空欄の場合は変更しません')}
        <div class="field full"><span class="field-label">役割</span>${roleChecks(jsonArray(account.role_ids))}</div>
        <div class="field full"><span class="field-label">追加権限</span>${permissionChecks(jsonArray(account.permissions))}</div>
      </div>`, 'edit-account');
    } else if (which === 'role') {
      modalTemplate('役割を追加', '役割コードを設定し、必要な権限を選択してください', `<div class="form-grid">
        ${field('roleKey', '役割コード', 'text', '', '例：front_desk', true)}
        ${field('name', '役割名', 'text', '', '例：フロント受付', true)}
        <div class="field full"><span class="field-label">権限</span>${permissionChecks()}</div>
      </div>`, 'role');
    } else if (which === 'vehicle') {
      await loadSitesIfMissing();
      modalTemplate('車両を追加', '車両情報を登録します', `<div class="form-grid">
        ${field('registrationNumber', 'ナンバープレート', 'text', '', 'プレート番号を入力してください', true)}
        ${field('vin', '車台番号（任意）', 'text', '', '車台番号')}
        ${field('make', 'メーカー', 'text', '', '例：Toyota', true)}
        ${field('model', '車種', 'text', '', '例：Prius', true)}
        ${field('modelYear', '年式（任意）', 'number', '', '2024')}
        ${selectField('siteId', '所属店舗', `<option value="">店舗を選択してください</option>${siteOptions()}`)}
      </div>`, 'vehicle');
    } else if (which === 'edit-vehicle') {
      const vehicle = currentVehicles.find((item) => item.id === id);
      if (!vehicle) throw new Error('not_found');
      await loadSitesIfMissing();
      modalTemplate('車両情報を編集', `${text(vehicle.registration_number)} · 固定車両IDは変更されません`, `<input type="hidden" name="id" value="${text(vehicle.id)}"><div class="form-grid">
        ${field('registrationNumber', 'ナンバープレート', 'text', vehicle.registration_number, '', true)}
        ${field('vin', '車台番号', 'text', vehicle.vin ?? '')}
        ${field('make', 'メーカー', 'text', vehicle.make, '', true)}
        ${field('model', '車種', 'text', vehicle.model, '', true)}
        ${field('modelYear', '年式', 'number', String(vehicle.model_year ?? ''))}
        ${selectField('siteId', '所属店舗', siteOptions(vehicle.site_id))}
        ${selectField('status', '車両の状態', ['available','rented','maintenance','retired'].map((status) => `<option value="${status}" ${vehicle.status === status ? 'selected' : ''}>${label(status)}</option>`).join(''))}
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
        ? `<div class="field"><label for="f-siteId">受付店舗</label><select id="f-siteId" name="siteId" data-reservation-site required><option value="">店舗を選択してください</option>${siteOptions()}</select></div>`
        : '';
      modalTemplate('予約を作成', 'お客様と利用期間を登録します', `<div class="form-grid">
        ${field('guestName', 'お客様の氏名', 'text', '', '氏名を入力してください', true)}
        ${field('guestPhone', '電話番号', 'tel', '', '電話番号を入力してください', true)}
        ${field('startAt', '貸出予定日時', 'datetime-local', localDate(defaultStart), '', true)}
        ${field('endAt', '返却予定日時', 'datetime-local', localDate(defaultEnd), '', true)}
        ${siteField}
        ${selectField('vehicleId', '車両の予約', `<option value="">貸出可能な車両を選択してください</option>${vehicleOptions}`)}
      </div>`, 'reservation', '予約を保存');
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
        throw new Error('貸出日時と返却日時を正しく入力してください。');
      }
      const payload: Record<string, unknown> = {
        guestName: value('guestName'), guestPhone: value('guestPhone'),
        startAt: startAt.toISOString(), endAt: endAt.toISOString(), vehicleId: value('vehicleId')
      };
      if (profile!.site.type === 'headquarters') payload.siteId = value('siteId');
      await api('/api/v1/reservations', { method: 'POST', body: JSON.stringify(payload) });
    }
    closeModal();
    toast('保存しました。');
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
    const prompt = status === 'checked_in' ? `${item.guest_name} 様への貸出手続きを行いますか？車両 ${item.registration_number ?? ''} は貸出中になります。`
      : status === 'completed' ? `${item.guest_name} 様の返却を確認しますか？車両は貸出可能になります。`
        : `${item.guest_name} 様の予約をキャンセルしますか？`;
    if (!window.confirm(prompt)) return;
    try {
      await api(`/api/v1/reservations/${encodeURIComponent(item.id)}`, { method: 'PATCH', body: JSON.stringify({ status }) });
      toast(status === 'checked_in' ? '貸出手続きが完了しました。' : status === 'completed' ? '返却手続きが完了しました。' : '予約をキャンセルしました。');
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
    vehicleSelect.innerHTML = '<option value="">車両を読み込み中…</option>';
    vehicleSelect.setAttribute('disabled', 'true');
    void api<{ items: Vehicle[] }>(`/api/v1/vehicles?${new URLSearchParams({
      status: 'available', limit: '100', siteId: target.value
    })}`).then((response) => {
      vehicleSelect.innerHTML = `<option value="">貸出可能な車両を選択してください</option>${response.items.map((vehicle) => `<option value="${text(vehicle.id)}">${text(vehicle.registration_number)} · ${text(vehicle.make)} ${text(vehicle.model)}</option>`).join('')}`;
    }).catch((error) => {
      vehicleSelect.innerHTML = '<option value="">車両を読み込めませんでした。店舗を選択し直してください。</option>';
      toast(humanError((error as Error).message), true);
    }).finally(() => vehicleSelect.removeAttribute('disabled'));
  }
}

if (token) {
  loadProfile().catch(() => {
    token = ''; profile = null; sessionStorage.removeItem('guts_erp_token'); renderLogin();
  });
} else renderLogin();
