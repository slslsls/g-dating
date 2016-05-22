(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Index', Index);

  Index.$inject = ['User', '$scope'];

  function Index(User, $scope) {
    var vm = this;

    vm.message = 'Message from the Index controller';
    $scope.$watch(User.currentUser, function(user) {
      vm.currentUser = User.getCurrentUser();
    });
    vm.logout = function() {
      User.logout();
    }
  }
}());
