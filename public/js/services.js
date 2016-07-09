'use strict';

var app = angular.module('myApp');


app.service('User', function($http, $q) {
  this.profile = () => {
    return $http.get('/api/users/profile')
      .then(res => {
        return $q.resolve(res.data);
      })
  }


  this.getAll = () => {
    return $http.get('/api/users')
      .then(res => {
        return $q.resolve(res.data);
      });
  }
  this.toggleAdmin = (id) => {
    return $http.put(`/api/users/${id}/toggleAdmin`)

  }
});
