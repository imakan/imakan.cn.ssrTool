module.exports = {
  apps: [
    {
      name: 'tool',
      script: './dist/index.js',
      instances: '1',
      vizion: true,
      env: {
        PORT: '18002',
        NODE_ENV: 'production',
        DEBUG: false
      }
    }
  ]
};
