(function() {
    'use strict';
	
	angular
	    .module('angularjs.sg')
	    .controller('AppCtrl', AppCtrl);

	function AppCtrl($scope){

		var vm = this;

		vm.greetingMsg = 'Angular Tasks';
		vm.newTask = {};

		vm.taskList = {
			title: 'My Task List',
			tasks: [
				{name: 'Task 1'},
				{name: 'Task 2'},
				{name: 'Task 3'}
			]
		};

		// Pushes a new task to the list
		vm.pushTask = function(){
			vm.taskList.tasks.push(vm.newTask);
			vm.newTask = {};
		};

		// Removes a task from the list
		vm.removeTask = function(task){
			var index = vm.taskList.tasks.indexOf(task);
			vm.taskList.tasks.splice(index, 1);
		};

	}
	    
})();