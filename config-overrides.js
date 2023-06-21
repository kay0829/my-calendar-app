const { override, addWebpackAlias } = require('customize-cra');
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@component': path.resolve(__dirname, 'src/component'),
    '@container': path.resolve(__dirname, 'src/container'),
  })
)