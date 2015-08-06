"use strict";

angular.module('psDashboard').directive('psWidgetBody',
    ["$compile", "$modal",
        function ($compile, $modal) {
            return {
                templateUrl: 'ext-modules/psDashboard/psWidgetBodyTemplate.html',
                link: function (scope, element, attr) {  //element is our widget
                    var newElement = angular.element(scope.item.template);  //trace item up the shared scope through psDashboardDirective to wwaDashboardDirective
                    element.append(newElement); //add directive to our widget
                    $compile(newElement)(scope); // compile directive to shared scope for interpolation
                    
                    scope.close = function () {
                        scope.widgets.splice(scope.widgets.indexOf(scope.item),1);
                    };

                    scope.settings = function () {
                        var options = {
                            templateUrl: scope.item.widgetSettings.templateUrl,
                            controller: scope.item.widgetSettings.controller,
                            scope: scope

                        };
                        $modal.open(options);
                    };

                    scope.iconClicked = function () {
                        // empty body
                        // this function is used by ng-click in the template
                        // so that icon clicks aren't intercepted by widgets
                    };

                }
            };
}]);