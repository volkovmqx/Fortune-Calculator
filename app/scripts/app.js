'use strict';

/**
 * @ngdoc overview
 * @name projectborhenApp
 * @description
 * # projectborhenApp
 *
 * Main module of the application.
 */
angular
  .module('projectborhenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/calc', {
        templateUrl: 'views/calc.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
