'use strict';

/**
 * @ngdoc directive
 * @name singleFieldCcApp.directive:format
 * @description
 * # format
 */
angular.module('singleFieldCcApp')
  .directive('format', function ($filter) {
    return {
      	require: '?ngModel',
      	link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) {return;}


            ctrl.$formatters.unshift(function () {
                return $filter(attrs.format)(ctrl.$modelValue);
            });


            ctrl.$parsers.unshift(function (viewValue) {
                var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter(attrs.format)(plainNumber));
                return plainNumber;
            });
        }
    };
  });
