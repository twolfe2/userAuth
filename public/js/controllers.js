'use strict';



var app = angular.module('myApp');


app.controller('mainCtrl', function() {
  console.log('hello!');
});

app.controller('loginCtrl', function($scope, $auth) {
  console.log('loginCtrl!');

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(res => {
        console.log('res:', res);
      })
      .catch(err => {
        console.log(err);
      })
  };
});