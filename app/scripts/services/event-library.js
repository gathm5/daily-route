'use strict';

angular.module('dailyRouteApp')
    .factory('EventLibrary', function () {
        // Public API here
        return {
            route: {
                added: 'route.added'
            }
        };
    });
