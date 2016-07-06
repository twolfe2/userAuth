'use strict';


var app = angular.module('myApp', ['ui.router', 'satellizer']);



app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html'
    })
    .state('login', {
      url:'/login', 
      templateUrl:'/html/login.html',
      controller: 'loginCtrl'
    })

  $urlRouterProvider.otherwise('/');
});


app.config(function($authProvider){
  $authProvider.facebook({
    clientId: '277768235911300',
    url: '/api/users/facebook'
  });
});