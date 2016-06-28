//creates a factory to get and add todos 
(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('MainFactory', MainFactory);

    MainFactory.$inject = ['$http'];

    /* @ngInject */
    function MainFactory($http) {
        var service = {
            getTodos: getTodos,
            addTodo: addTodo,
            deleteTodo: deleteTodo
        };
        return service;

        ////////////////

        // grabs the default data from my json file
        function getTodos() {
            return $http({
                method: 'GET',
                url: 'app/todoList.json'
            }).then(function(response) {
                return response.data;
            });
        }
        // adds to the table
        function addTodo(todos, todoName, todoPriority) {

            var todo = {
                name: todoName,
                priority: todoPriority
            };
            return todos.push(todo);

        }
        // deletes from the table
        function deleteTodo(todos, index) {

            return todos.splice(index, 1);

        }
    }
})();
