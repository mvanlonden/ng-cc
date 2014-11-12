'use strict';

/**
 * @ngdoc filter
 * @name singleFieldCcApp.filter:monthYear
 * @function
 * @description
 * # monthYear
 * Filter in the singleFieldCcApp.
 */
angular.module('singleFieldCcApp')
  .filter('monthYear', function () {
  	String.prototype.splice = function( idx, rem, s ) {
		return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
	};
    return function (input) {
    	if (!input) {
    		return;
    	}
    	if (input.length < 2) {
    		return input;
    	}
	    return input.splice(2, 0, '/');
    };
  });
