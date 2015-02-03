'use strict';

angular.module('dailyRouteApp')
    .directive('swipe3d', function () {
        return {
            template: '<div></div>',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                // Example settings
                /*
                 tdFlow: {
                 rotate: 50,
                 stretch: 0,
                 depth: 100,
                 modifier: 1,
                 shadows: true
                 }
                 */
                var settings = {
                    slidesPerView: 3,
                    loop: true,
                    tdFlow: {}
                };
                var swiper = new Swiper(element[0], settings);

            }
        };
    });