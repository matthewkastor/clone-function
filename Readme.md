# clone-function
version 0.0.1

Clones non native JavaScript functions, or references native functions.

## Installation

```
npm install clone-function
```

https://npmjs.org/package/clone-function
Source code available at: https://github.com/matthewkastor/clone-function/

## Usage

In node:

```
var cloneFunction = require('clone-function');
console.log(cloneFunction(''));
```

In the browser, include `./browser/clone-function_web.js` in your page. `cloneFunction` will
 be available in your page.

For full documentation see the docs folder. For examples see the example folder.

## Tests

Tests can be run from the root of this package with

```
npm test
```

## Hacking

There are several other scripts listed in package.json for development and
 hacking on this module. They can be run with `npm run-script` followed by the
 scripts property corresponding to the script you want to run. For example,
 given a script called `buildDocs`, it could be run from the package root by:

```
npm run-script buildDocs
```

## Author

Matthew Kastor
atropa

matthewkastor@gmail.com
https://plus.google.com/100898583798552211130

## License

gpl-3.0
http://www.gnu.org/licenses/gpl-3.0-standalone.html