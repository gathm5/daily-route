'use strict';

/**
 * @ngdoc function
 * @name dailyRouteApp.controller:AddRouteCtrl
 * @description
 * # AddRouteCtrl
 * Controller of the dailyRouteApp
 */
angular.module('dailyRouteApp')
    .controller('AddRouteCtrl', [
        '$scope',
        'EventLibrary',
        'slideOutMenuParams',
        'RouteDataService',
        '$Tell',
        function ($scope, EventLibrary, slideOutMenuParams, RouteDataService, $Tell) {
            $scope.routes = {
                routeA: null,
                routeB: null
            };

            $scope.add = function () {
                if ($scope.routes.routeA && $scope.routes.routeB) {
                    RouteDataService
                        .storeRoute(angular.copy($scope.routes))
                        .then(function () {
                            $Tell.children('dashboard', EventLibrary.route.added);
                        });
                    slideOutMenuParams.close();
                }
            };

        }
    ]);
