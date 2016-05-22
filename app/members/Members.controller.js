(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Members', Members);

  function Members(Members) {
    var vm = this;

    vm.members = [];
    Members.getAllMembers().then(function(data) {
      for (var i = 5; i < 25; i++) {
        vm.members.push(data.data.data[i]);
      }
    })
  }
}());
