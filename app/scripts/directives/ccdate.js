'use strict';

/**
 * @ngdoc directive
 * @name singleFieldCcApp.directive:ccDate
 * @description
 * # ccDate
 */
angular.module('singleFieldCcApp')
  .directive('ccDate', function ($timeout) {
    return {
      template: '<input type="text" ng-model="date" format="monthYear" maxlength="5" placeholder="MM/YY">',
      restrict: 'E',
      replace: true,
      scope: {
      	'complete': '&onComplete',
      	'update': '='
      },
      link: function postLink(scope, element) {
      	scope.$watch('update', function() {
      		if (scope.update === 'date') {
      			console.log('date time');
      			$timeout(function() {
	      			element[0].focus();
      			}, 50);
      		}
      		console.log(scope.update);
      	});	
      	scope.$watch('date', function() {
      		if (!scope.date) {return;}
      		console.log(scope.date.length);
      		if (scope.date.length === 4) {
      			scope.complete();
      		}
      	});
      }
    };
  });
