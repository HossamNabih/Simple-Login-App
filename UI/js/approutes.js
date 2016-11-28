var mainApp = angular.module('mainApp',['ngRoute']);
mainApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'../views/home.html'
    }).when('/Sign-In',{
        templateUrl:'../views/sign-in.html'
    }).when('/Sign-Up',{
        templateUrl:'../views/sign-up.html'
    }).otherwise({
        redirectTo:'/'
    });

});