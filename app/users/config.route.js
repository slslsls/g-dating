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
        controller: 'Register as register'
      })
      .when('/login', {
        templateUrl: 'app/users/login.html',
        controller: 'Login as login'
      });
  }
}());
