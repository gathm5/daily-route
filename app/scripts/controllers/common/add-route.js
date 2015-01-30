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
                    RouteDataService.storeRoute(angular.copy($scope.routes));
                    $Tell.children('dashboard', EventLibrary.route.added, angular.copy($scope.routes));
                    slideOutMenuParams.close();
                }
            };

        }
    ]);
