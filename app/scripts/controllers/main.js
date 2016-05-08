'use strict';

/**
 * @ngdoc function
 * @name projectborhenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectborhenApp
 */
angular.module('projectborhenApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.operations = [];
    $scope.calc = {};
    $scope.store = function () {
      var obj = $scope.calc;
      $scope.operations.push(obj);
      $scope.calc = {};
      console.log($scope.operations);
    };

    $scope.test = function () {
      console.log("hey");
    }

  }]);
