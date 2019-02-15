const context = require.context('./', true, /\.js$/);

console.log(context
  .keys()
  .filter(item => item !== './index.js')
  .map(key => context(key)))

module.exports = context
  .keys()
  .filter(item => item !== './index.js')
  .map(key => context(key))
