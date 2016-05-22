(function() {
  'use strict';

  angular
    .module('gDating')
    .controller('Members', Members);

  function Members(Members) {
    var vm = this;

    vm.members = [];
    vm.genders = Members.genders;
    vm.interestedIns = Members.interestedIns;
    vm.thisYear = (new Date).getFullYear();
    Members.getAllMembers().then(function(data) {
      for (var i = 5; i < 10; i++) {
        var member = data.data.data[i];
        var birthday = member.dob.substring(0,4);
        var gender = vm.genders[member.gender];
        var interestedIn = vm.interestedIns[member.interestedIn];

        member.age = vm.thisYear - birthday;
        member.gender = gender;
        member.interestedIn = interestedIn;
        vm.members.push(member);
      }
    })
  }
}());
