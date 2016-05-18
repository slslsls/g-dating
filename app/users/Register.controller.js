(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Register', Register);

  function Register() {
    var vm = this;

    vm.message = 'Message from the Register controller'
  }
}());
