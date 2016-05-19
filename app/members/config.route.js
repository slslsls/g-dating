(function() {
  'use strict';

  angular
    .module('gDating')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/members', {
        templateUrl: 'app/members/members.html',
        controller: 'Members as members'
      });
  }
}());
