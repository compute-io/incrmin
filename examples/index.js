'use strict';

var incrmin = require( './../lib' );

// Initialize a method to calculate the minimum value incrementally:
var min = incrmin();

// Simulate some data...
var value, m;

console.log( '\nValue\tMin\n' );

for ( var i = 0; i < 100; i++ ) {

	value = Math.random() * 100;
	m = min( value );

	console.log( '%d\t%d', value.toFixed( 4 ), m.toFixed( 4 ) );
}

// Final maximum value:
console.log( '\nFinal min is %d...\n', min() );
