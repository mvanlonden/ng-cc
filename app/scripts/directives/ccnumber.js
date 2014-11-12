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
      template: '<input type="text" ng-model="creditCard" format="creditcard" maxlength="19">',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        element.text('this is the ccNumber directive');
      }
    };
  });
