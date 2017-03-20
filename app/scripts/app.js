'use strict';

/**
 * @ngdoc overview
 * @name transportApp
 * @description
 * # transportApp
 *
 * Main module of the application.
 */
angular
  .module('transportApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        /*templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'*/
         templateUrl: 'views/90.html',
        controller: '90Ctrl',
        controllerAs: '90Ctrl'
      })
      /*
      .when('/20s', {
        templateUrl: 'views/20s.html',
        controller: '20Ctrl',
        controllerAs: '20Ctrl'
      })
      .when('/old',{
        templateUrl: 'views/old.html',
        controller: 'OldCtrl',
        controllerAs: 'old'
      })
      .when('/90s',{
        templateUrl: 'views/90.html',
        controller: '90Ctrl',
        controllerAs: '90Ctrl'
      })
      */
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  });
