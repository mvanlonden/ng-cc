'use strict';

/**
 * @ngdoc directive
 * @name singleFieldCcApp.directive:mvCCInput
 * @description
 * # mvCCInput
 */
angular.module('singleFieldCcApp')
  .directive('ccInput', function () {
    return {
      templateUrl: 'views/ccinput.html',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
      }
    };
  });
