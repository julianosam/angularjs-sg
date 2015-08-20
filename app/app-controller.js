(function() {
    'use strict';
	
	angular
	    .module('angularjs.sg')
	    .controller('AppCtrl', AppCtrl);

	function AppCtrl($scope){

		var vm = this;

		vm.greetingMsg = 'Angular Tasks';
		vm.nextTask = {};

		vm.taskList = {
			title: 'Angular.js Study Group tasks',
			tasks: [
				{name: 'Angular.js overview'},
				{name: 'Hello World app'},
				{name: 'Advanced Concepts'}
			]
		};	


		vm.pushTask = function(){						
			vm.taskList.tasks.push(vm.nextTask);
			vm.nextTask = {};
		}

		vm.removeTask = function(task){
			var index = vm.taskList.tasks.indexOf(task);
			vm.taskList.tasks.splice(index, 1);
		};

	}
	    
})();