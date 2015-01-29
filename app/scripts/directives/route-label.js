'use strict';

angular.module('dailyRouteApp')
    .directive('routeLabel', function () {
        return {
            templateUrl: '/views/directives/route-label.html',
            restrict: 'E',
            scope: {
                route: '='
            },
            link: function postLink(scope, element, attrs) {

            }
        };
    });