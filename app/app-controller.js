(function() {
    'use strict';
	
	angular
	    .module('angularjs.sg')
	    .controller('AppCtrl', AppCtrl);

	AppCtrl.$inject	= ['$scope', 'Tasklist'];

	function AppCtrl($scope, Tasklist){

		var vm = this;

		vm.greetingMsg = 'Angular Tasks';
		vm.newTask = {};

		vm.taskList = Tasklist.get({id:0});

		// Pushes a new task to the list
		vm.pushTask = function(){
			vm.taskList.tasks.push(vm.newTask);

			Tasklist.update(vm.newTask);
			
			vm.newTask = {};
		};

		// Removes a task from the list
		vm.removeTask = function(task){
			var index = vm.taskList.tasks.indexOf(task);
			vm.taskList.tasks.splice(index, 1);
		};

	}
	    
})();