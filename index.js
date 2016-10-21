/*
 * fis3-lint-htmlhint
 * fisker Cheung<lionkay@gmail.com>
 */

var pugRender = require('pug').render;
var log = (global.fis && fis.log) || console;

module.exports = function(content, file, conf){
  if (!content) {
    return;
  }

  return pugRender(content, conf);
};

module.exports.defaultOptions = {
  pretty: '  ',
  doctype: 'html'
};
