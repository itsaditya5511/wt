var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
$routeProvider
.when('/main', {
templateUrl: 'main.html', controller: 'MainController' })
.when('/first', {
templateUrl: 'first.html', controller: 'FirstController' })
.when('/second', {
templateUrl: 'second.html', controller: 'SecondController' })
.when('/third', {
templateUrl: 'third.html', controller: 'ThirdController' })
.otherwise({
redirectTo: '/main'
});
});
app.controller('MainController', function($scope) {
$scope.message = 'Welcome to the Main Page!';
});
app.controller('FirstController', function($scope) {
$scope.message = 'This is the First Page!';
});
app.controller('SecondController', function($scope) {
$scope.message = 'You are on the Second Page!';
});
app.controller('ThirdController', function($scope) {
$scope.message = 'You have reached the Third Page!';
});
