(function() {
  'use strict';

  angular
    .module('gDating')
    .factory('UserFactory', UserFactory);

  UserFactory.$inject = ['$http', '$window'];

  function UserFactory($http, $window) {
    var user = {};
    var api = 'http://galvanize-student-apis.herokuapp.com/gdating';

    return {
      currentUser: function() {
        return user;
      },
      login: function(user) {
        return $http.post(api + '/auth/login', user);
      },
      logout: function() {
        user = null;
        console.log('just logged out', user);
        $window.localStorage.clear();
      },
      register: function(user) {
        return $http.post(api + '/auth/register');
      },
      setCurrentUser: function(data) {
        user = data.data.user;
        console.log('just setCurrentUser', user);
        $window.localStorage.setItem('token', data.data.token);
        $window.localStorage.setItem('user', JSON.stringify(data.data.user));
      },
      getCurrentUser: function() {
        return JSON.parse($window.localStorage.getItem('user'));
      },
      getAllUsers: function() {
        return $http.get(api + '/members');
      },
      getSingleUser: function(id) {
        return $http.get(api + '/members/' + id);
      },
      editUser: function(user) {
        return $http.put(api + '/members/' + user.id, user);
      },
      removeUser: function(user) {
        return $http.delete(api + '/members/' + user.id)
      }
    }
  }
}());
