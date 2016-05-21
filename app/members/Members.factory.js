(function() {
  'use strict';

  angular
    .module('gDating')
    .factory('Members', Members);

  Members.$inject = ['$http']

  function Members($http) {
    var api = 'http://galvanize-student-apis.herokuapp.com/gdating';
    
    return {
      getAllMembers: function() {
        return $http.get(api + '/members');
      },
      getSingleMember: function(id) {
        return $http.get(api + '/members/' + id);
      }
    }
  }
}());