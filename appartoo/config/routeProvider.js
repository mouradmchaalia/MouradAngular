(function(angular){
    'use strict';
    function configFn($routeProvider) {
        $routeProvider


            .when('/contact', {
                controller: "ContactController",
                templateUrl: "../appartoo/Contact.View.html"

            })


            .otherwise({redirectTo: "/contact"});


    }
    configFn.$inject=['$routeProvider'];

    angular.module("myApp").config(configFn);
})(angular);