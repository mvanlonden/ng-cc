'use strict';

/**
 * @ngdoc directive
 * @name ng-cc.directive:ccNumber
 * @description
 * # ccNumber
 */
angular.module('ng-cc')
  .directive('ccNumber', function () {
    return {
      template: '<input type="text" ng-model="creditCard" format="creditcard" maxlength="19" placeholder="Credit card number">',
      restrict: 'E',
      replace: true,
      scope: {
      	'complete': '&onComplete',
      	'update': '=',
      	'number': '='
      },
      link: function postLink(scope, element) {
        var first = true;
      	scope.$watch('update', function() {
          console.log('first');
      		if (scope.update === 'number') {
            console.log('not first');
            if (!first) {
        			element[0].focus();
            }
      			element.addClass('current');
            first = false;
          }
      	});	

      	// element.on('focus', function() {
	      // 	scope.creditCard = '0000000000000000';
	      // 	scope.$apply();
	      // 	console.log(scope);
      	// });
      	scope.$watch('creditCard', function() {
      		if (!scope.creditCard) {return;}
      		if (scope.creditCard.length === 16) {
      			scope.complete();
      			scope.number = scope.creditCard;
      		}
      	});
      }
    };
  });
