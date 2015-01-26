'use strict';

/**
 * @ngdoc function
 * @name dailyRouteApp.controller:CommonMainContentCtrl
 * @description
 * # CommonMainContentCtrl
 * Controller of the dailyRouteApp
 */
angular.module('dailyRouteApp')
    .controller('MainContentCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });