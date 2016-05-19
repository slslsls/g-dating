(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Login', Login);

  Login.$inject = ['UserFactory', '$location'];

  function Login(UserFactory, $location) {
    var vm = this;

    vm.message = 'Message from the Login controller';
    vm.login = function(user) {
      UserFactory.login(user).then(function(data) {
        UserFactory.setCurrentUser(data);
        $location.path('/users');
      }).catch(function(data) {
        vm.errors = data.errors;
      });
    }
  }
}());
