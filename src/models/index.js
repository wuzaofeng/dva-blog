const context = require.context('./', true, /\.js$/);

module.exports = context
  .keys()
  .filter(item => item !== './index.js')
  .map(key => context(key))
