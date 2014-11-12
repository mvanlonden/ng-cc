'use strict';

/**
 * @ngdoc overview
 * @name ng-cc
 * @description
 * # ng-cc
 *
 * Main module of the application.
 */
angular
  .module('ng-cc', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/example.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
