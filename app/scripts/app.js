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
      .icon('share-arrow', 'img/icons/share-arrow.svg', 24)
      .icon('upload', 'img/icons/upload.svg', 24)
      .icon('copy', 'img/icons/copy.svg', 24)
      .icon('print', 'img/icons/print.svg', 24)
      .icon('hangout', 'img/icons/hangout.svg', 24)
      .icon('mail', 'img/icons/mail.svg', 24)
      .icon('message', 'img/icons/message.svg', 24)
      .icon('copy2', 'img/icons/copy2.svg', 24)
      .icon('facebook', 'img/icons/facebook.svg', 24)
      .icon('twitter', 'img/icons/twitter.svg', 24);
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
  
