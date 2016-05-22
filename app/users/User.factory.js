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
        $window.localStorage.setItem('user', user.data);
      },
      getCurrentUser: function() {
        return $window.localStorage.getItem('user');
      },
      editAccount: function(user) {
        return $http.put(api + '/members/' + user.id, user);
      },
      deleteAccount: function(user) {
        return $http.delete(api + '/members/' + user.id)
      }
    }
  }
}());
