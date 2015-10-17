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
              // 'ngSanitize',
              // 'ngTouch',
              'ngMaterial',
              'ui.bootstrap',
              // 'angularModalService',
              'google.places',
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
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
              })
              .when('/about', {
                templateUrl: 'views/about.html'
              })
              .when('/about-us', {
                templateUrl: 'views/about-us.html'
              })
              .when('/faq', {
                templateUrl: 'views/faq.html'
              })
              .when('/register-event', {
                templateUrl: 'views/Register-event.html'
              })
              .when('/user', {
                templateUrl: 'views/utils/Users/UserAfterSuccessfulLoginPage.html'
              })
              .when('/SProfile', {
                templateUrl: 'views/utils/Seller/SellerProfile.html'
              })
              .when('/wedding', {
                templateUrl: 'views/wedding.html'
              })
              .when('/wedding/dashboard', {
                templateUrl: 'views/wedding-dashbord.html'
              })
              .when('/wedding/dashboard/guest', {
                templateUrl: 'views/guest.html'
              })
              .when('/wedding/pinboard', {
                templateUrl: 'views/pin_board.html'
              })
              .when('/blank', {
                templateUrl: 'views/blank.html'
              })
              .when('/search', {
                templateUrl: 'views/results.html',
                controller: 'ResultsCtrl',
                controllerAs: 'results'
              })
              .when('/email', {
                templateUrl: 'views/mailbox.html'                
              })
              .when('/email-view', {
                templateUrl: 'views/mail_detail.html'                
              })
              .otherwise({
                redirectTo: '/'
              });
            })
            .config(function ($mdIconProvider) {
              $mdIconProvider
              .icon('share-arrow', 'img/icons/share-arrow.svg', 24)
              .icon('upload', 'img/icons/upload.svg', 24)
              .icon('copy', 'img/icons/copy.svg', 24)
              .icon('print', 'img/icons/print.svg', 24)
              .icon('hangout', 'img/icons/hangout.svg', 24)
              .icon('mail', 'img/icons/mail.svg', 24)
              .icon('menu', 'images/material-design/svg/menu55.svg',24)
              .icon('message', 'img/icons/message.svg', 24)
              .icon('google', 'images/material-design/svg/google120.svg', 24)
              .icon('facebook', 'images/material-design/svg/facebook56.svg', 24)
              .icon('twitter', 'images/material-design/svg/twitter47.svg', 24)
              .icon('Setting', 'images/material-design/svg/settings49.svg', 24)
              .icon('Add', 'images/material-design/svg/add179.svg', 24)
              .icon('been', 'images/material-design/svg/been.svg', 24)
              .icon('help', 'images/material-design/svg/help19.svg', 24)
              .icon('home', 'images/material-design/svg/home149.svg', 48)
              .icon('check', 'images/material-design/svg/check51.svg', 24)
            })
            .config(function($mdThemingProvider) {
              $mdThemingProvider.definePalette('amazingPaletteName', {
                '50': 'E8F5E9',
                '100': 'C8E6C9',
                '200': 'A5D6A7',
                '300': '81C784',
                '400': '66BB6A',
                '500': '7E57C2',
                '600': '43A047',
                '700': '388E3C',
                '800': '2E7D32',
                '900': '1B5E20',
                'A100': 'B9F6CA',
                'A200': '69F0AE',
                'A400': '00E676',
                'A700': '00C853',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
    '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
              $mdThemingProvider.theme('default')
              .primaryPalette('amazingPaletteName')
            })
            //to put FB login
            

            //run to put cookies
            .run(function ($http, $rootScope, $location, Auth, $cookies, $log) 
            {

              var GUID = String($http.get('http://localhost:4100/init/public'));

              $cookies.put('GUID', GUID.toString());
              if ($cookies.get('GUID') == GUID) {
                $cookies.put('val',111);
                $cookies.put('old',333);

              }
              else
              {
                $cookies.put('val',443);
              };
              
              $rootScope.$on('$routeChangeStart', function(evt, next, curr) 
              {

                if (!Auth.isAuthorized(next.access_level)) 
                  { if (Auth.isLoggedIn()) 
                    {
            // The user is logged in, but does not // have permissions to view the view $location.path('/');
          } else 
          { $location.path('/login');
        }
      } 
    });
            })
            .run(function ($rootScope){
              $rootScope.minPanel = function (){
                angular.element(document).ready(function () {
                  // Add body-small class if window less than 768p

                  // Collapse ibox function
                  angular.element('.collapse-link').click(function () {
                    var ibox = angular.element(this).closest('div.ibox');
                    var button = angular.element(this).find('i');
                    var content = ibox.find('div.ibox-content');
                    content.slideToggle(200);
                    button.toggleClass('ti-angle-down').toggleClass('ti-angle-down');
                    ibox.toggleClass('').toggleClass('border-bottom');
                    setTimeout(function () {
                      ibox.resize();
                      ibox.find('[id^=map-]').resize();
                    }, 50);
                    e.stopPropagation();
                  });
                  
                  angular.element(window).on('scroll load', function() {

                   if (angular.element(window).scrollTop() > 0) {
                     angular.element('#mainnav').addClass('affix');
                   }
                   else {
                     angular.element('#mainnav').removeClass('affix');

                   }
                 });
                  // Close ibox function
                  
                });
          }
          $rootScope.closePanel = function (){
            angular.element('.close-link').click(function () {
              var content = angular.element(this).closest('note');
              content.remove();
            });
          }
        })
            
            // .run(function ($rootScope){
            //   $rootScope.closePanel = function (){
            //     $('.collapse-link').click(function () {
            //       var ibox = $(this).closest('div.ibox');
            //       var button = $(this).find('i');
            //       var content = ibox.find('div.ibox-content');
            //       content.slideToggle(200);
            //       button.toggleClass('ti-angle-down').toggleClass('ti-angle-up');
            //       ibox.toggleClass('').toggleClass('border-bottom');
            //       setTimeout(function () {
            //         ibox.resize();
            //         ibox.find('[id^=map-]').resize();
            //       }, 50);
            //     });
            //   }
            // })
            ;

