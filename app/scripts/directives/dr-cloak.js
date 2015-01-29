'use strict';

/**
 * @ngdoc directive
 * @name dailyRouteApp.directive:drCloak
 * @description
 * # drCloak
 */
angular.module('dailyRouteApp')
    .directive('drCloak', function ($timeout) {
        return {
            restrict: 'A',
            link: function postLink(scope, element) {
                $timeout(function () {
                    element.addClass('ready');
                }, 100);
            }
        };
    });