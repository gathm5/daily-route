'use strict';

angular.module('dailyRouteApp')
    .controller('DashboardCtrl', [
        '$scope',
        'EventLibrary',
        function ($scope, EventLibrary) {
            $scope.$on(EventLibrary.route.added, function (e, routes) {
                $scope.routes = routes;
            });
        }
    ]);
