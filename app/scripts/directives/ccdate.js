'use strict';

/**
 * @ngdoc directive
 * @name ng-cc.directive:ccDate
 * @description
 * # ccDate
 */
angular.module('ng-cc')
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
      			$timeout(function() {
	      			element[0].focus();
		  			element.addClass('current');
      			}, 10);
      		}
      	});	
      	scope.$watch('date', function() {
      		if (!scope.date) {return;}
      		if (scope.date.length === 4) {
      			scope.complete();
      			element.removeClass('current');
      		}
      	});
      }
    };
  });
