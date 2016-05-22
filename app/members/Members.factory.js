(function() {
  'use strict';

  angular
    .module('gDating')
    .factory('Members', Members);

  Members.$inject = ['$http']

  function Members($http) {
    var api = 'http://galvanize-student-apis.herokuapp.com/gdating';

    return {
      genders: [
        'Male',
        'Female',
        'Transgender',
        'Non-binary'
      ],
      interestedIns: [
        'Men',
        'Women',
        'Transgender',
        'Non-binary'
      ],
      getAllMembers: function() {
        return $http.get(api + '/members');
      },
      getSingleMember: function(id) {
        return $http.get(api + '/members/' + id);
      }
    }
  }
}());
