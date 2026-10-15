module.exports = {
  apps: [{
    name: 'guts-erp',
    cwd: '/www/wwwroot/guts-erp',
    script: 'npm',
    args: 'start',
    interpreter: 'none',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    max_memory_restart: '350M',
    env: {
      NODE_ENV: 'production'
    }
  }]
};
