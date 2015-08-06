
"use strict";

angular.module('app').directive('wwaTemperature',
    ['dataService',
    function (dataService) {
        return {
            templateUrl: 'app/widgets/wwaTemperature/wwaTemperatureTemplate.html',
            link: function (scope, el, attr) {
                scope.isLoaded = false;
                scope.hasError = false;
                scope.selectedLocation = null;

                scope.loadLocation = function () {
                    scope.hasError = false;
                    dataService.getLocation(scope.item.widgetSettings.id)
                        .then(function (data) {
                            scope.isLoaded = true;
                            scope.selectedLocation = data;
                            scope.hasError = false;
                        }, function (data) {
                            scope.hasError = true;
                        });
                };

                scope.loadLocation();
            }
        };
 }]);