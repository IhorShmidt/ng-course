'use strict';

angular.module('myApp')
    .factory('TodoService', function() {
      var glovalId = 3;
        var items = [
           {
            id: 1,
            title: 'Item #1',
            description: 'Item #1 description'
        }, {
            id: 2,
            title: 'Item #2',
            description: 'Item #2 description'
        }];

        function addItem(item) {
            if (item.title.length < 3 || typeof item === 'undefined') {
                console.log("Title should have more than 3 characters");
                clear(item);
                return;
            }
            var copy = angular.copy(item);
            copy.id = glovalId++;
            items.unshift(copy);
            clear(item);
        }

        function clear(item) {
            item.title = '';
            item.description = '';
        }

        function delItem(item) {
            items.splice(item, 1);
        }

        return ({
            addItem: addItem,
            delItem: delItem,
            items: items
        });
    })
