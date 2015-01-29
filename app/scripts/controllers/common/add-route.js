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
        function ($scope) {
            $scope.routes = {
                routeA: null,
                routeB: null
            };
        }
    ]);
