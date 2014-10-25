incrmin
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Provides a method to compute a minimum value incrementally.


## Installation

``` bash
$ npm install compute-incrmin
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var incrmin = require( 'compute-incrmin' );
```

#### incrmin()

Returns an initialized method to compute a minimum value incrementally.

``` javascript
var min = incrmin();
```

#### min( [value] )

If provided a `value`, the method updates and returns the updated min. If not provided a `value`, the method returns the current min.

``` javascript
min( 2 );

console.log( min( 1 ) );
// returns 1

min( 3 );

console.log( min() );
// returns 1
```

Note: if values have not yet been provided to `min()`, `min()` returns `null`.


## Examples

``` javascript
var incrmin = require( 'compute-incrmin' );

// Initialize a method to calculate the min incrementally:
var min = incrmin();

// Simulate some data...
for ( var i = 0; i < 1000; i++ ) {
	min( Math.random() * 100 );
}

console.log( min() );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

## Notes

The use case for this module differs from the conventional [vector](https://github.com/compute-io/min) implementation and the [stream](https://github.com/flow-io/?query=min) implementation. Namely, this module decouples the act of updating the min from the act of consuming the min.


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-incrmin.svg
[npm-url]: https://npmjs.org/package/compute-incrmin

[travis-image]: http://img.shields.io/travis/compute-io/incrmin/master.svg
[travis-url]: https://travis-ci.org/compute-io/incrmin

[coveralls-image]: https://img.shields.io/coveralls/compute-io/incrmin/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/incrmin?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/incrmin.svg
[dependencies-url]: https://david-dm.org/compute-io/incrmin

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/incrmin.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/incrmin

[github-issues-image]: http://img.shields.io/github/issues/compute-io/incrmin.svg
[github-issues-url]: https://github.com/compute-io/incrmin/issues