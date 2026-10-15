module.exports = {
  apps: [{
    name: 'guts-parking',
    cwd: '/www/wwwroot/guts-erp/apps/parking',
    script: 'npm',
    args: 'start',
    interpreter: 'none',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    max_memory_restart: '350M',
    env: {
      NODE_ENV: 'production',
      HOST: '127.0.0.1',
      PORT: '8001'
    }
  }]
};
