"use strict";

angular.module('psDashboard').directive('psDashboard', function () {
    return {
        templateUrl: 'ext-modules/psDashboard/psDashboardTemplate.html',
        link: function (scope, element, attrs) {
            console.log('psDashboard directive has this element: ', element);
            scope.addNewWidget = function (widget) {
                var newWidget = angular.copy(widget.settings);  // copy, don't just point newWidget to widget.settings reference
                scope.widgets.push(newWidget);
            };
        }
    }
})