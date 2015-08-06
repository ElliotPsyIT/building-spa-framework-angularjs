"use strict";

angular.module('app').directive('wwaDashboard', ['$localStorage', function ($localStorage) {
    return {
        scope: {

        },
        template: '<ps-dashboard></ps-dashboard>',
        link: function (scope) {

            scope.title = 'Dashboard';

            scope.gridsterOpts = {
                columns: 12,
                margins: [20, 20],
                outerMargin: false,
                pushing: true,
                floating: false,
                swapping: false
            };

            scope.widgetDefinitions = [
                {
                    title: 'Temperature',
                    settings: {
                        sizeX: 3,
                        sizeY: 3,
                        minSizeX: 2,
                        minSizeY: 2,
                        template: '<wwa-temperature></wwa-temperature>',
                        widgetSettings: {
                            id: 1000,
                            templateUrl: 'app/dialogs/wwaSelectLocationTemplate.html',
                            controller: 'wwaSelectLocationController'
                        }
                    },

                }
            ]

            scope.widgets = $localStorage.widgets || [  // each widget on dashboard saved in localStorage

            ];

            scope.$watch('widgets', function () {
                $localStorage.widgets = scope.widgets;  // when scope.widgets is changed - widgets added or deleted - keep localstorage in synch
            }, true);
        }
    }
}]);