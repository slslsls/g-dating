(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Members', Members);

  function Members(Members) {
    var vm = this;

    vm.members = [];
    vm.thisYear = (new Date).getFullYear();
    Members.getAllMembers().then(function(data) {
      for (var i = 5; i < 25; i++) {
        var member = data.data.data[i];
        var birthday = member.dob.substring(0,4);

        member.age = vm.thisYear - birthday;
        vm.members.push(member);
      }
    })
  }
}());
