/**
 * Created by mourad on 09/01/2017.
 */
(function(angular){
    'use strict';

    function ResourceFn($resource) {
        return $resource("http://localhost/AppartooTestMchaalia/AppartooTestMchaalia/web/app_dev.php/api/contact/add/:contact", {
            "contact": "@contact"
        }, {
            save: { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        });
    }

    ResourceFn.$inject = ['$resource'];
    angular.module("myApp").factory("AddResource", ResourceFn);
})(angular);