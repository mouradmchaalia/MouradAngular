angular.module('login')
.component('loginComponent',{
    templateUrl: 'js/angularFront/login/login.template.html',
    controller : ['$http',function ($http) {
        var self = this;
        self.username = null;
        self.userId = null;
        if(localStorage.isConnected === "false"){
            self.isConnected = false;
        }else{
            self.isConnected = true ;
        }

        self.showLoginForm = false;
        self.contacts = null;
        self.body = {
            username : "",
            password : ""
        };
        self.disconnect = function () {
            self.isConnected = false;
            localStorage.isConnected = false;
        }
        self.submit = function(){
            var query = {
                method : 'POST',
                url : 'http://localhost/AppartooTestMchaalia/web/app_dev.php/loginApi',
                data: {
                    username: self.body.username,
                    password: self.body.password,
                },
                headers:{
                   'content-type': 'application/x-www-form-urlencoded'
                }
            }

            $http(query).then(function(response){
                console.log(response.data);
                self.username = response.data.username;
                self.userId = response.data.id;
                self.isConnected = true;
                self.showLoginForm = false;
                localStorage.isConnected = true;
            },function(error){
                console.log('ERROR!' ,error)
            })
            //console.log('query', self.body);
        };
        self.connectForm = function(){
            self.showLoginForm = true;
        };
        self.setOrderQuery = function(f){
            self.orderProp = f;
        };
        self.contacts = $http.get('http://localhost/AppartooTestMchaalia/web/app_dev.php/contacts')
            .then(function(response){
                self.contacts = response.data;
            },function(error){
                console.log('ERROr !!!! ', error)
            });
    }]
})