'use strict';

/**
 * @ngdoc filter
 * @name ng-cc.filter:creditcard
 * @function
 * @description
 * # creditcard
 * Filter in the ng-cc.
 */
angular.module('ng-cc')
  .filter('creditcard', function () {
	String.prototype.splice = function( idx, rem, s ) {
		return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
	};
    return function (input) {
    	if (!input) {
    		return;
    	}
    	var length = input.length;
    	if (length < 4) {
    		return input;
    	}
    	if (length > 4) {
    		input = input.splice(4, 0, ' ');
    	}
    	if (length > 8) {
    		input = input.splice(9, 0, ' ');
    	}
    	if (length > 12) {
    		input = input.splice(14, 0, ' ');	
    	}

        return input;
    };
  });
