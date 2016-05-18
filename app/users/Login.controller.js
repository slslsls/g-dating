(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Login', Login);

  function Login() {
    var vm = this;

    vm.message = 'Message from the Login controller';
  }
}());
