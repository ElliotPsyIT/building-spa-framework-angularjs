
angular.module('app').config(function ($provide) {
    $provide.decorator("$exceptionHander", ["$delegate", function ($delegate){
        return function (expection, cause) {
            $delegate(exception, cause);
            //alert(exception.message);
        }
    }]
)});