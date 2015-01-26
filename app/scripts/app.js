'use strict';

/**
 * @ngdoc overview
 * @name dailyRouteApp
 * @description
 * # dailyRouteApp
 *
 * Main module of the application.
 */
angular
    .module('dailyRouteApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'gsDirectives'
    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('main', {
                    url: '/',
                    views: {
                        'MainContent@': {
                            templateUrl: 'views/common/main-content.html',
                            controller: 'MainContentCtrl'
                        },
                        'MenuPanel@': {
                            templateUrl: 'views/common/menu-panel.html',
                            controller: 'MenuPanelCtrl'
                        },
                        'Header@main': {
                            templateUrl: 'views/common/header.html',
                            controller: 'HeaderCtrl'
                        }
                    }
                });
            $urlRouterProvider.otherwise('/');
        }
    ])
    .run(function ($state, $stateParams, drawerParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.drawerParams = drawerParams;
    });
