'use strict';

// INCREMENTAL MIN //

/**
* FUNCTION: incrmin()
*	Returns a method to compute the minimum value incrementally.
*
* @returns {Function} method to compute the min incrementally
*/
function incrmin() {
	var min = null;
	/**
	* FUNCTION: incrmin( [value] )
	*	If a `value` is provided, updates and returns the updated min. If no `value` is provided, returns the current min.
	*
	* @param {Number} [value] - value used to update the min
	* @returns {Number} min value
	*/
	return function incrmin( x ) {
		if ( !arguments.length ) {
			return min;
		}
		if ( x < min || min === null ) {
			min = x;
		}
		return min;
	};
} // end FUNCTION incrmin()


// EXPORTS //

module.exports = incrmin;
