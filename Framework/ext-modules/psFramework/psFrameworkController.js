"use strict";

angular.module("psFramework").controller("psFrameworkController",
    ['$scope', "$window", "$timeout", "$rootScope", "$location",
        function ($scope, $window, $timeout, $rootScope, $location) {

            $scope.isMenuVisible = true;
            $scope.isMenuButtonVisible = true;
            $scope.isMenuVertical = true;

            $scope.$on('ps-menu-item-selected-event', function (evt, data) {
                $scope.routeString = data.route;
                $location.path(data.route);
                checkWidth(); // be sure the flags set properly for screen size
                broadcastMenuState();
            });

            $scope.$on('ps-menu-orientation-changed-event', function (et, data) {
                $scope.isMenuVertical = data.isMenuVertical;
                $timeout(function () {
                    $($window).trigger('resize');
                },0);
            });

            $($window).on('resize.psFramework', function () { //wrap $window in jQuery and window resize gets a namespace
                $scope.$apply(function () {
                    checkWidth();
                    broadcastMenuState();
                });
            });
            $scope.$on("$destroy", function () {
                $($window).off("resize.psFramework");
            });

            var checkWidth = function () {
                var width = Math.max($($window).width(), $window.innerWidth); // full viewport
                $scope.isMenuVisible = (width > 768);
                $scope.isMenuButtonVisible = !$scope.isMenuVisible;
            }

            $scope.menuButtonClicked = function () {
                $scope.isMenuVisible = !$scope.isMenuVisible;
                broadcastMenuState();
                //$scope.$apply();
            }

            var broadcastMenuState = function () {
                $rootScope.$broadcast('ps-menu-show',
                    {
                        show: $scope.isMenuVisible,
                        isVertical: $scope.isMenuVertical,
                        allowHorizontalToggle: !$scope.isMenuButtonVisible
                    });
            };

            // checks browser width on start to determine if menu should be visible and menu button should be visible
            $timeout(function () {
                checkWidth();
            }, 0);
        }
    ])