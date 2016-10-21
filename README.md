# fis3-parser-pug 

a fis plugin to parse pug(aka jade).

[![npm](https://img.shields.io/npm/v/fis3-parser-pug.svg?style=flat-square)](https://www.npmjs.com/package/fis3-parser-pug) 
[![npm](https://img.shields.io/npm/dt/fis3-parser-pug.svg?style=flat-square)](https://www.npmjs.com/package/fis3-parser-pug) 
[![npm](https://img.shields.io/npm/dm/fis3-parser-pug.svg?style=flat-square)](https://www.npmjs.com/package/fis3-parser-pug)


## usage

    $ npm i -g fis3-parser-pug

```
// fis-conf.js

var pugConf = {
  doctype: 'html', // default html
  pretty: '  ', // default '  '
  .. more
}; 

fis.match('*.html', {
  parser: fis.plugin('pug', pugConf);
});
```

[more options](https://pugjs.org/api/reference.html)

## links
fis3: [http://fis.baidu.com/](http://fis.baidu.com/)
pug: [https://pugjs.org/](https://pugjs.org/)
