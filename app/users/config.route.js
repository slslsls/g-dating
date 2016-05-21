(function() {
  'use strict';

  angular
    .module('gDating')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/register', {
        templateUrl: 'app/users/register.html',
        controller: 'Register as register',
        preventWhenLoggedIn: true,
        signup: true
      })
      .when('/login', {
        templateUrl: 'app/users/login.html',
        controller: 'Login as login',
        preventWhenLoggedIn: true
      })
      .when('/logout', {
        restricted: true,
        resolve: {
          app: function(User, $location) {
            User.logout();
            $location.path('/login');
          }
        }
      });
  }
}());
