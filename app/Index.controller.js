(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Index', Index);

  Index.$inject = ['User', '$watch'];

  function Index(User, $watch) {
    var vm = this;

    vm.message = 'Message from the Index controller';
    vm.$watch(User.currentUser, function(user) {
      vm.currentUser = User.currentUser();
    });
    vm.logout = function() {
      User.logout();
    }
  }
}());
