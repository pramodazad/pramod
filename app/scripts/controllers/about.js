'use strict';

/**
 * @ngdoc function
 * @name planistoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the planistoApp
 */
 angular.module('planistoApp')


 .controller('AboutCtrl', function () {
  this.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];
})

 .controller('UserPageCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  $scope.signedIn = function(oauth) {
    $scope.user = oauth;
  }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
     function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
        $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
      },200);
      return debounceFn;
    }
  }).controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
      .then(function () {
        $log.debug("close RIGHT is done");
      });
    };
  })
  
  .controller('RegisterEventCtrl', function ($scope) {


  })

  .controller('UserAfterLoginCtrl', function ($scope, UserInfo) {
    $scope.firstName= UserInfo.getFirstName();


  })

  .controller('pinCtrl', function ($scope) {
    $scope.value = [
    {title: "you have nothing", message: "add a new pin"}
    ];
    $scope.addPin = function (title,message){
      $scope.value.push({title: title, message: message});
    }  
  })



  .controller('ProductCtrl', function ($scope) {
    $scope.value = [
    {imgsource: "img1", targetpage: "wedding"},
    {imgsource: "img2", targetpage: "wedding"},
    {imgsource: "img3", targetpage: "wedding"},
    {imgsource: "img4", targetpage: "wedding"},
    {imgsource: "img5", targetpage: "wedding"},
    {imgsource: "img6", targetpage: "wedding"}
    ];
  })





  .controller('mailBoxCtrl', function ($scope){
    $scope.value = [
    {unread: "unread", sender: "Pamod azad", subject: "hi", time: "8.22 PM"},
    {unread: "unread", sender: "Jack Nowak", subject: "Aldus PageMaker including versions of Lorem Ipsum.", time: "8.22 PM"},
    {unread: "read", sender: "Facebook", subject: "Many desktop publishing packages and web page editors.", time: "8.22 PM"}];

  })




.controller('FooterCtrl', function ($scope, $interval) {
  var c=0;
  var currentStep = 0;
  var maxStep = 12;
  $interval(function(){

    $scope.message="This DIV is refreshed "+c+" time.";
    if (c==5) {
      var remove = 'step-' + currentStep;
      angular.element('.footer-center').removeClass(remove);
      currentStep = (currentStep + 1) % maxStep;
      var add = 'step-' + currentStep;
      angular.element('.footer-center').addClass(add);
      c=0;
    };
    c++;
  },1000);
})



//this is final close semi colon
;
