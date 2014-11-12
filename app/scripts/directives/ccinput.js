'use strict';

/**
 * @ngdoc directive
 * @name ng-cc.directive:mvCCInput
 * @description
 * # mvCCInput
 */
angular.module('ng-cc')
  .directive('ccInput', function () {
    return {
      templateUrl: '../../views/ccinput.html',
      restrict: 'E',
      replace: true,
      scope: {},
      link: function postLink(scope, element) {
      	scope.currentField = 'number';
      	scope.moveTo = function (field) {
      		scope.currentField = field;
      	};
      	scope.validateCC = function() {
      		element.find('input').addClass('valid');
      		element.addClass('valid');
      		// angular.forEach(inputs, function(input){
      		// 	input.addClass('.valid');
      		// });

      	};
      	scope.$watch('number', function () {
      		if (!scope.number) {return;}
      		scope.lastFour = scope.number.substr(12);
      	});
      }
    };
  });
