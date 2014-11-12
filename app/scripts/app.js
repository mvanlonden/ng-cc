'use strict';

/**
 * @ngdoc overview
 * @name singleFieldCcApp
 * @description
 * # singleFieldCcApp
 *
 * Main module of the application.
 */
angular
  .module('singleFieldCcApp', [
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
