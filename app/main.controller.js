(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['MainFactory', ];

    /* @ngInject */
    function MainController(MainFactory) {
        var vm = this;
        vm.title = 'MainController';
        vm.addTodo = addTodo;
        vm.deleteTodo = deleteTodo;

        activate();

        ////////////////
        // this function calls the default function
        function activate() {
            MainFactory.getTodos()
                .then(function(response) {
                    vm.todos = response;
                    vm.todoPriority.value = "cLow";
                })
        }
        // this function gets the entered list
        function addTodo(todoName, todoPriority) {
            MainFactory.addTodo(vm.todos, todoName, todoPriority);
        }
        // this function deletes the selected item on the list
        function deleteTodo(data) {
            var index = vm.todos.indexOf(data);
            MainFactory.deleteTodo(vm.todos, index);

        }
    }
})();
