# strip-dom-whitespace

[![Greenkeeper badge](https://badges.greenkeeper.io/developit/strip-dom-whitespace.svg)](https://greenkeeper.io/)

Traverses the DOM to strip whitespace-only Text nodes.

This is a standalone solution to [developit/preact#445](https://github.com/developit/preact/issues/445).


### Usage

```js
import strip from 'strip-dom-whitespace';

strip(document.body);
```

```js
var strip = require('strip-dom-whitespace');

strip(document.querySelector('.some-element'));
```


### License

MIT

