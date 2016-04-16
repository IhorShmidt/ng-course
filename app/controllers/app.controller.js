'use strict';

angular.module('myApp')
  .controller('AppCtrl', AppController);

function AppController($scope, TodoService) {
   $scope.items = TodoService.items;
   $scope.addItem = TodoService.addItem;
}
