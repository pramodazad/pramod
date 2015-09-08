'use strict';

/**
 * @ngdoc service
 * @name planistoApp.search/searchService
 * @description
 * # search/searchService
 * Service in the planistoApp.
 */
angular.module('planistoApp')
.factory('searchService', ['$http', function($http) {
  var factory = {};

  factory.getCategories = function(term) {
    return $http.get('http://localhost:4100/search/categories?term='+ term);
  };

  return factory;
  }]);

 


