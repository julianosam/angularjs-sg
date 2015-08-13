(function() {
    'use strict';
	
	angular
	    .module('angularjs.sg')
	    .controller('AppCtrl', AppCtrl);

	function AppCtrl($scope){

		var vm = this;

		vm.greetingMsg = 'Hello World Angular from controller!';

	}
	    
})();