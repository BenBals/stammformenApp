// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// Wait till the device is done loading
app = angular.module('stammformen', ['ionic', 'ionic.contrib.ui.tinderCards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  })
  .state('play', {
    url: '/play',
    templateUrl: 'templates/play.html'
  })
  .state('swipe', {
    url: '/swipe',
    templateUrl: 'templates/swipe.html'
  })
  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html'
  })
  .state('stats', {
    url: '/stats',
    templateUrl: 'templates/stats.html'
  })

  $urlRouterProvider.otherwise('/')

}])