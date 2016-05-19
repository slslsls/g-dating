(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Search', Search);

  function Search() {
    var vm = this;

    vm.message = 'Message from the Search controller';
  }
}());
