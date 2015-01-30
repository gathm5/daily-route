'use strict';

angular.module('dailyRouteApp')
    .service('RouteDataService', [
        '$localForage',
        '$q',
        function RouteDataService($localForage, $q) {
            // AngularJS will instantiate a singleton by calling "new" on this function
            this.storeRoute = function (route) {
                var deferred = $q.defer();
                $localForage.length()
                    .then(function (length) {
                        length += 1;
                        route.date = new Date();
                        deferred.notify(route);
                        $localForage
                            .setItem(length, route)
                            .then(function (data) {
                                deferred.resolve(data);
                            });
                    },
                    function (error) {
                        deferred.reject(error);
                    });
                return deferred.promise;
            };
            this.getRoute = function (idx) {
                console.time('Local Storage');
                var deferred = $q.defer();
                if (idx) {
                    $localForage.getItem(idx)
                        .then(function (data) {
                            deferred.resolve(data);
                        },
                        function (error) {
                            deferred.reject(error);
                        });
                }
                else {
                    var value = true;
                    if (!value) {
                        $localForage
                            .iterate(function (value, key) {
                                console.log(value, key);
                                return key;
                            })
                            .then(function (data) {
                                deferred.resolve(data);
                            },
                            function (error) {
                                deferred.reject(error);
                            });
                    }
                    else {
                        $localForage
                            .keys()
                            .then(function (data) {
                                $localForage
                                    .getItem(data)
                                    .then(function (data) {
                                        deferred.resolve(data);
                                    });
                            });
                    }
                }
                return deferred.promise;
            };
            this.clear = function () {
                $localForage.clear();
            };
        }
    ]);