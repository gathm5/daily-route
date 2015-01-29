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
        'gsDirectives',
        'ngAutocomplete'
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
                            templateUrl: '/views/common/main-content.html',
                            controller: 'MainContentCtrl'
                        },
                        'MenuPanel@': {
                            templateUrl: '/views/common/menu-panel.html',
                            controller: 'MenuPanelCtrl'
                        },
                        'Header@main': {
                            templateUrl: '/views/common/header.html',
                            controller: 'HeaderCtrl'
                        }
                    }
                })
                .state('main.dashboard', {
                    url: 'dashboard',
                    views: {
                        'Content@main': {
                            templateUrl: '/views/dashboard/dashboard.html',
                            controller: 'DashboardCtrl'
                        },
                        'SlideMenu@': {
                            templateUrl: '/views/common/add-route.html',
                            controller: 'AddRouteCtrl'
                        }
                    }
                });
            $urlRouterProvider.otherwise('/dashboard');
        }
    ])
    .run(function ($state, $stateParams, drawerParams, slideOutMenuParams, $deviceListeners, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.drawerParams = drawerParams;
        $rootScope.slideOutMenuParams = slideOutMenuParams;
        $deviceListeners.init();
        $rootScope.$on('$stateChangeStart', function () {
            drawerParams.close();
            slideOutMenuParams.close();
        });
        $rootScope.$on('$$back', function (event) {
            if (drawerParams.isDrawerOpen || slideOutMenuParams.isSlideOpen) {
                event.preventDefault();
                event.defaultPrevented = true;
                drawerParams.close();
                slideOutMenuParams.close();
                $rootScope.$apply();
            }
        });
        $rootScope.$on('$$menu', function (event) {
            event.preventDefault();
            event.defaultPrevented = true;
            drawerParams.toggle();
            $rootScope.$apply();
        });
    });
