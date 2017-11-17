/*
 * fis3-lint-htmlhint
 * fisker Cheung<lionkay@gmail.com>
 */

var render = require('pug').render
var log = global.fis.log

module.exports = function(content, file, conf) {
  return content ? render(content, conf) : ''
}

module.exports.defaultOptions = {
  pretty: '  ',
  doctype: 'html'
}
