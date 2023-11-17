module.exports = {
  apps: [
    {
      name: 'clouds',
      script: 'dist/main.js',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
