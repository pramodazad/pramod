'use strict';

/**
 * @ngdoc function
 * @name planistoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the planistoApp
 */
angular.module('planistoApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.login = true;
  $scope.register = false;

  $scope.login = function() {
    $scope.login = true;
    $scope.register = false;
  }

  $scope.register = function() {
    $scope.login = false;
    $scope.register = true;
  }
  });
