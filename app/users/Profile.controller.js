(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Profile', Profile);

  function Profile(User, $window) {
    var vm = this;

    vm.user = User.currentUser().user;

    console.log(this.user);

  }
}());
