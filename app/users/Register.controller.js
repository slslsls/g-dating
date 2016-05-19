(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Register', Register);

  Register.$inject = ['User', '$location'];

  function Register(User, $location) {
    var vm = this;

    vm.message = 'Message from the Register controller';
    vm.register = function(user) {
      User.register(user).then(function(data) {
        User.setCurrentUser(data);
        $location.path('/members');
      }).catch(function(data) {
        vm.errors = data.data;
      });
    }
  }
}());
