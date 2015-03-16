define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name yoappApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the yoappApp
   */
  angular.module('yoappApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
