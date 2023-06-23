const { override, addWebpackAlias } = require('customize-cra');
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@asset': path.resolve(__dirname, 'src/asset'),
    '@component': path.resolve(__dirname, 'src/component'),
    '@container': path.resolve(__dirname, 'src/container'),
    '@styles': path.resolve(__dirname, 'src/styles'),
  })
)