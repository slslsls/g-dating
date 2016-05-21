(function() {
  'use strict'

  angular
    .module('gDating', ['ngRoute'])
    .run(Listener)
    .config(config);

  Listener.$inject = ['$rootScope', '$location', '$window', 'User'];

  function Listener($rootScope, $location, $window, User) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      if (next.restricted && !$window.localStorage.getItem('token')) {
        if (current && current.register) {
          $location.path('/register');
        } else {
          $location.path('/login')
        }
      }
      if (next.preventWhenLoggedIn && $window.localStorage.getItem('token')) {
        $location.path('/members');
      }
    });
  }



  config.$inject = ['$locationProvider', '$httpProvider'];

  function config($locationProvider, $httpProvider) {
    // $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('AuthInterceptor');
  }
})();
