define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name yoappApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the yoappApp
   */
  angular.module('yoappApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
