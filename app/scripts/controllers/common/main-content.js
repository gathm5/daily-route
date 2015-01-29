'use strict';

/**
 * @ngdoc function
 * @name dailyRouteApp.controller:CommonMainContentCtrl
 * @description
 * # CommonMainContentCtrl
 * Controller of the dailyRouteApp
 */
angular.module('dailyRouteApp')
    .controller('MainContentCtrl', [
        '$scope',
        function ($scope) {
            $scope.$on('$$back', function (event) {
                if (event.defaultPrevented) {
                    return;
                }
                navigator.app.exitApp();
            });
        }
    ]);