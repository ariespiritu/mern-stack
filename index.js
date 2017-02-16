/*
  Enty Script
*/

if (process.env.NODE_ENV === 'production') {
  process.env.webpackAssets = JSON.stringify(require('./dist/manifest.json'));
  process.env.webpackChunckAssets = JSON.stringify(require('./dist/chunk-manifest.json'));
  require('./dist/server.bundle.js');
} else {
  require('babel-polyfill');
  require('./server/server')
}
