/**
 * Created by mourad on 09/01/2017.
 */


function ContactsFN($resource) {
    var url="http://localhost/AppartooTestMchaalia/AppartooTestMchaalia/web/app_dev.php/api/contacts/:id";

    var Contacts=$resource (url);
    return Contacts;


}
ContactsFN.$inject=["$resource"];
angular.module("myApp").factory("Contacts",ContactsFN);