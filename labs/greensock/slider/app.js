(function() {

  'use strict';

  angular.module('app', [
    'ngAnimate'
  ])

    .controller('MainController', function ($scope) {
      $scope.slides = [
        { imageUrl: 'images/slide-01.jpg' },
        { imageUrl: 'images/slide-02.jpg' },
        { imageUrl: 'images/slide-03.jpg' },
        { imageUrl: 'images/slide-04.jpg' },
        { imageUrl: 'images/slide-05.jpg' },
        { imageUrl: 'images/slide-06.jpg' }
      ];
    })

    .directive('screenWidth', function () {

      return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
          console.log(elem);
        }
      }
    })
  ;


})();
