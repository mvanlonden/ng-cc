'use strict';

/**
 * @ngdoc directive
 * @name singleFieldCcApp.directive:ccCvc
 * @description
 * # ccCvc
 */
angular.module('singleFieldCcApp')
  .directive('ccCvc', function () {
    return {
      template: '<input type="text" ng-model="cvc" maxlength="3" placeholder="CVC">',
      restrict: 'E',
      replace: true,
      scope: {
      	'complete': '&onComplete',
      	'update': '='
      },
      link: function postLink(scope, element) {
      	scope.$watch('update', function() {
      		if (scope.update === 'cvc') {
      			element[0].focus();
      		}
      		console.log(scope.update);
      	});	
        scope.$watch('cvc', function() {
      		if (!scope.cvc) {return;}
      		console.log(scope.cvc.length);
      		if (scope.cvc.length === 3) {
      			scope.complete();
      			element[0].blur();
      		}
      	});
      }
    };
  });
