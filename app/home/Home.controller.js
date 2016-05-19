(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Home', Home);

  Home.$inject = ['User'];

  function Home(User) {
    var vm = this;

    vm.message = 'Message from the Home controller';
  }
})();
