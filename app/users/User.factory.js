(function() {
  'use strict';

  angular
    .module('gDating')
    .factory('User', User);

  User.$inject = ['$http', '$window', '$location'];

  function User($http, $window, $location) {
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
        $location.path('/');
      },
      register: function(user) {
        // put logic here to use zip code for longitude and latitude: http://www.w3schools.com/html/html5_geolocation.asp
        return $http.post(api + '/auth/register', user);
      },
      setCurrentUser: function(data) {
        user = data.data.data;
        console.log('just setCurrentUser', user);
        $window.localStorage.setItem('token', user.token);
        $window.localStorage.setItem('user', JSON.stringify(user.data));
      },
      getCurrentUser: function() {
        return JSON.parse($window.localStorage.getItem('user'));
      },
      getAllMembers: function() {
        return $http.get(api + '/members');
      },
      getSingleMember: function(id) {
        return $http.get(api + '/members/' + id);
      },
      editProfile: function(user) {
        return $http.put(api + '/members/' + user.id, user);
      }
    }
  }
}());
