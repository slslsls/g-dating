(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Members', Members);

  function Members() {
    var vm = this;

    vm.message = 'Message from the Members controller';
  }
}());
