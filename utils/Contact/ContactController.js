function contactControllerFN($scope,AddService,Contacts) {
    $scope.contacts = Contacts.query();
    $scope.contact = new Contacts;
    $scope.data=[];


    $scope.add=function ($data) {

        $data= 'email='+$scope.contact.email+'&adresse='+$scope.contact.adresse+'&telephone='+$scope.contact.telephone+'&siteWeb='+$scope.contact.siteWeb+'&idUser=1'
        AddService.addcontact($data).then(function () {

            console.log($data);




        });

    }
}



angular.module("myApp").controller("ContactController",contactControllerFN);