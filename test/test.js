/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	incrmin = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-incrmin', function tests() {

	it( 'should export a function', function test() {
		expect( incrmin ).to.be.a( 'function' );
	});

	it( 'should return a function', function test() {
		expect( incrmin() ).to.be.a( 'function' );
	});

	it( 'should initialize to null', function test() {
		var min = incrmin();
		assert.isNull( min() );
	});

	it( 'should compute a minimum value incrementally', function test() {
		var data,
			N,
			min,
			expected,
			actual;

		data = [ 2, 3, 2, 4, 3, 4 ];
		N = data.length;

		expected = new Array( N );
		actual = new Array( N );

		min = incrmin();

		for ( var i = 0; i < N; i++ ) {
			expected[ i ] = calc( data.slice( 0, i+1 ) );
			actual[ i ] = min( data[ i ] );
		}

		assert.deepEqual( actual, expected );

		function calc( arr ) {
			var N = arr.length,
				min = arr[ 0 ];
			for ( var i = 1; i < N; i++ ) {
				if ( arr[ i ] < min ) {
					min = arr[ i ];
				}
			}
			return min;
		}
	});

	it( 'should return the current min if provided no arguments', function test() {
		var data = [ 2, 3, 1 ],
			min = incrmin();
		for ( var i = 0; i < data.length; i++ ) {
			min( data[ i ] );
		}
		assert.strictEqual( min(), 1 );
	});

});
