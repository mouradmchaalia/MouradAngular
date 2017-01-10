(function(angular){
    'use strict';

    function serviceFn(AddResource){
        this.getAll = function(){
            return AddResource.query().$promise;
        }
        this.addcontact=function (data) {
            console.log(data);

            return AddResource.save(data).$promise;
        }
    }


    angular.module("myApp").service("AddService",serviceFn);
})(angular);