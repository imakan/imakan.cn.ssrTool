module.exports = {
  apps: [
    {
      name: 'tool',
      script: './dist/index.js',
      instances: '1',
      vizion: false,
      env: {
        PORT: '18002',
        NODE_ENV: 'prod',
        DEBUG: false
      }
    }
  ]
};
