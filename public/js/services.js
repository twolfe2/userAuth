'use strict';

var app = angular.module('myApp');


app.service('User', function($http, $q) {
  this.profile = () => {
    return $http.get('/api/users/profile')
      .then(res => {
        return $q.resolve(res.data);
      });
  };

  this.addNumber = (phone) => {
    // console.log('phone:', phone);
    return $http.post('/api/users/addPhone', {phone})
      .catch(err => {
        if(err) {
          console.log(err);
        };
      });
  };


  this.getAll = () => {
    return $http.get('/api/users')
      .then(res => {
        return $q.resolve(res.data);
      });
  }
  this.toggleAdmin = (id) => {
    return $http.put(`/api/users/${id}/toggleAdmin`)
  };


  this.sendToken = () => {
    return $http.post('/api/tokens/send')
    .catch(err => {
        if(err) {
          console.log(err);
        };
      });
  };


  this.verifyToken = (code) => {
    return $http.post('/api/tokens/verify', {code})
    .catch(err => {
        if(err) {
          console.log(err);
        };
      });
  }

});



