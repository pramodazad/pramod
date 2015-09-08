'use strict';

/**
 * @ngdoc overview
 * @name planistoApp
 * @description
 * # planistoApp
 *
 * Main module of the application.
 */
angular
  .module('planistoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'angularModalService',
    'google.places'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contacts.html'
      })
      .when('/azad', {
        templateUrl: 'views/azad.html'
      })
      .when('/login', {
        templateUrl: 'views/login1.html',
        controller: 'LoginCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/register-event', {
        templateUrl: 'views/Register-event.html'
      })
      .when('/user', {
        templateUrl: 'views/utils/Users/UserAfterSuccessfulLoginPage.html'
      })
      .when('/search', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl',
        controllerAs: 'results'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  }).
  run(function($rootScope, $location) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ($rootScope.loggedInUser == 1) {
        // no logged user, redirect to /login
        if ( next.templateUrl === "views/contacts.html") {
        } else {
          $location.path("/");
        }
      }
    });
  });
  
