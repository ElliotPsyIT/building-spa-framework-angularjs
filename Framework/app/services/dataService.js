"use strict";

angular.module('app').factory('dataService', 
    ['$timeout',
        function ($timeout) {

            var locations = [
                {
                    id: 1000,
                    name: 'Requette River',
                    temperature: 55,
                    guides: 20,
                    rafts: 18,
                    vests: 200,
                    image: 'river1.png'
                },
                {
                    id: 1001,
                    name: 'Black River',
                    temperature: 53,
                    guides: 36,
                    rafts: 22,
                    vests: 200,
                    image: 'river1.png'
                },
                {
                    id: 1002,
                    name: 'Hudson River',
                    temperature: 55,
                    guides: 20,
                    rafts: 18,
                    vests: 200,
                    image: 'river1.png'
                },
                {
                    id: 1003,
                    name: 'Hudson Gorge',
                    temperature: 39,
                    guides: 8,
                    rafts: 10,
                    vests: 40,
                    image: 'river1.png'
                },
                {
                    id: 1004,
                    name: 'Saranac River',
                    temperature: 32,
                    guides: 8,
                    rafts: 8,
                    vests: 100,
                    image: 'river1.png'
                },
                {
                    id: 1005,
                    name: 'Black Creek',
                    temperature: 34,
                    guides: 22,
                    rafts: 12,
                    vests: 230,
                    image: 'river1.png'
                },
                {
                    id: 1006,
                    name: 'Batten Kill',
                    temperature: 54,
                    guides: 20,
                    rafts: 24,
                    vests: 420,
                    image: 'river1.png'
                },
                {
                    id: 1007,
                    name: 'Ausable River',
                    temperature: 38,
                    guides: 12,
                    rafts: 8,
                    vests: 225,
                    image: 'river1.png'
                },
            ]
            var getLocations = function () {
                return $timeout(function () {
                    return locations;
                }, 500)
            };
    
            var getLocation = function (id) {
                return $timeout(function () {
                //var timeout = $timeout(function () {
                    //$timeout.cancel(timeout);
                    //return undefined;
                    for (var i = 0; i < locations.length; i++) {
                        if (locations[i].id == id) {
                            return locations[i];
                        }
                        return undefined;
                    }
                }, 500);

                //return timeout;
            };

            var getEmployees = function () {
                return $timeout(function () {
                    return employees;
                }, 500)
            };

            var getEmployee = function () {
                return $timeout(function () {
                    for (var i = 0; i < employees.length; i++) {
                        if (employees[i].id == id) {
                            return employees[i];
                        }
                        return undefined;
                    }
                }, 300);
            };

            return {
                getLocations: getLocations,
                getLocation: getLocation,
                getEmployees: getEmployees,
                getEmployee: getEmployee
            }

    }]);