'use strict';

/**
 * @ngdoc function
 * @name planistoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the planistoApp
 */
 angular.module('planistoApp')
 .controller('MainCtrl', function ($scope, searchService, $q, $location, $rootScope, $timeout,$http) {
  this.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];
  $scope.selectedItem;

  $scope.address = "";
  $scope.lat = "";
  $scope.lng = "";
  $scope.firstname="";

  $scope.catAutocomplete = function(term) {
    return searchService.getCategories(term).then(function(result){
      return result.data;
    }, function(error) {
    });
  }

  $scope.getLocations = function(term) {
    var Geocoder = new google.maps.Geocoder();
    var AutoCompleteService = new google.maps.places.AutocompleteService();
    var deferred = $q.defer();
    var request = {
      input: term,
      componentRestrictions: {country: 'in'},
      types: ['(regions)']
    };
    AutoCompleteService.getPlacePredictions(request, function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        deferred.resolve(results);
      } else {
        var noResults = "";
        deferred.resolve(noResults);
      }
    })
    return deferred.promise;
  }

  $scope.getLatLngFromAddress = function(){
    var searchTxt = $scope.address.description;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': searchTxt}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        $scope.lat = Math.round(results[0].geometry.location.lat() * 100) / 100;
        $scope.lng = Math.round(results[0].geometry.location.lng() * 100) / 100;
        alert("Search Category is "+$scope.selectedItem.id+", Latitude : " + $scope.lat + " and Longitude : " + $scope.lng);
      }
    });
  }
  $scope.cancelRegisterEvent=function(){

  }


  
  $scope.RegisterEvent =function(){
    $scope.firstname=$scope.user.firstName;
    $timeout(redirect,180);
  }
  function redirect($scope) {
    
    $location.path("/user");
  }
})
.controller('FooterCtrl', function ($scope) {

})
.controller('RegisterEventCtrl', function ($scope) {

})
.controller('UserAfterLoginCtrl', function ($scope) {
$scope.azad=$scope.user.firstName;
})
;