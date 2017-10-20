/**
 * Created by Enter on 2017-10-17.
 */
var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/car',{
        templateUrl:'App/view/car.html',
        controller:'carController',
    }).otherwise({
        redirectTo:'/car'
    });
});