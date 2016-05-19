(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Register', Register);

  Register.$inject = ['UserFactory', '$location'];

  function Register(UserFactory, $location) {
    var vm = this;

    vm.message = 'Message from the Register controller';
    vm.register = function(user) {
      UserFactory.register(user).then(function(data) {
        UserFactory.setCurrentUser(data);
        $location.path(api + '/members');
      }).catch(function(data) {
        vm.errors = data.data;
      });
    }
  }
}());
