'use strict';

angular.module('myApp')
  .directive('listItem', listItemDirective);

function listItemDirective(TodoService) {
  return {
    scope: {
      title: '=',
      description: '=',
      id: '=',
    },
    templateUrl: 'templates/list-item.html',
    link:function ($scope) {
      $scope.delItem = TodoService.delItem;
    }
  }
}
