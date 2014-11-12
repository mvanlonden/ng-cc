'use strict';

/**
 * @ngdoc directive
 * @name singleFieldCcApp.directive:ccZip
 * @description
 * # ccZip
 */
angular.module('singleFieldCcApp')
  .directive('ccZip', function () {
    return {
      template: '<input type="text" ng-model="zip" maxlength="5" placeholder="ZIP">',
      restrict: 'E',
      replace: true,
      scope: {
      	'complete': '&onComplete',
      	'update': '='
      },
      link: function postLink(scope, element) {
      	scope.$watch('update', function() {
      		if (scope.update === 'zip') {
      			element[0].focus();
      		}
      		console.log(scope.update);
      	});	
      	scope.$watch('zip', function() {
      		if (!scope.zip) {return;}
      		console.log(scope.zip.length);
      		if (scope.zip.length === 5) {
      			scope.complete();
      		}
      	});
      }
    };
  });