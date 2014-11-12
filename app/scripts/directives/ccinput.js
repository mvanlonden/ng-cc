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
      template: '<div class="ccContainer"> <cc-number number="number" on-complete="moveTo(&quot;date&quot;)" ng-show="currentField === &quot;number&quot;" update="currentField"></cc-number> <input type="text" ng-click="currentField = &quot;number&quot;" ng-model="lastFour" ng-hide="currentField === &quot;number&quot;"> <cc-date on-complete="moveTo(&quot;zip&quot;)" update="currentField" ng-hide="currentField === &quot;number&quot;"></cc-date> <cc-zip on-complete="moveTo(&quot;cvc&quot;)" update="currentField" ng-hide="currentField === &quot;number&quot;"></cc-zip> <cc-cvc on-complete="validateCC()" update="currentField" ng-hide="currentField === &quot;number&quot;"></cc-cvc> </div>',
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
      	};
      	scope.$watch('number', function () {
      		if (!scope.number) {return;}
      		scope.lastFour = scope.number.substr(12);
      	});
      }
    };
  });
