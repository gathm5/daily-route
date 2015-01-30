'use strict';

angular.module('dailyRouteApp')
    .controller('DashboardCtrl', [
        '$scope',
        'EventLibrary',
        'RouteDataService',
        function ($scope, EventLibrary, RouteDataService) {
            function getRoutes() {
                RouteDataService.getRoute().then(function (routes) {
                    $scope.routes = routes;
                    console.timeEnd('Local Storage');
                });
            }

            $scope.$on(EventLibrary.route.added, function () {
                //$scope.routes = routes;
                getRoutes();
            });

            getRoutes();
        }
    ]);
