(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Home', Home);

  function Home() {
    var vm = this;

    vm.message = 'Message from the Home controller';
  }
})();
