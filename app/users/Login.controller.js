(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Login', Login);

  Login.$inject = ['User', '$location'];

  function Login(User, $location) {
    var vm = this;

    vm.message = 'Message from the Login controller';
    vm.login = function(user) {
      User.login(user).then(function(data) {
        User.setCurrentUser(data);
        $location.path('/members');
      }).catch(function(data) {
        vm.errors = data.errors;
      });
    }
  }
}());
