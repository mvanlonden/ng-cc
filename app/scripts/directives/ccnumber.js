'use strict';

/**
 * @ngdoc directive
 * @name singleFieldCcApp.directive:ccNumber
 * @description
 * # ccNumber
 */
angular.module('singleFieldCcApp')
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
      	scope.$watch('update', function() {
      		if (scope.update === 'number') {
      			element[0].focus();
      			element.addClass('current');
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
