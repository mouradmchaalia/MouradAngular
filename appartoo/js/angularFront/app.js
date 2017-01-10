angular.module('appratoo',[
    'ngRoute',
    'ngResource',
    'login'
]).config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/contacts',{
        template: '<contact-component></contact-component>'
    }).otherwise({redirectTo:"/contacts"});
}]);