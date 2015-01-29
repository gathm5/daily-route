'use strict';

/**
 * @ngdoc function
 * @name dailyRouteApp.controller:AddRouteCtrl
 * @description
 * # CommonAddRouteCtrl
 * Controller of the dailyRouteApp
 */
angular.module('dailyRouteApp')
    .controller('AddRouteCtrl', [
        '$scope',
        'EventLibrary',
        'slideOutMenuParams',
        '$Tell',
        function ($scope, EventLibrary, slideOutMenuParams, $Tell) {
            $scope.routes = {
                routeA: null,
                routeB: null
            };

            $scope.add = function () {
                $Tell.children('dashboard', EventLibrary.route.added, $scope.routes);
                slideOutMenuParams.close();
            };

        }
    ]);
