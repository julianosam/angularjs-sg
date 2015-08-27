(function() {
    'use strict';
	
	angular
	    .module('angularjs.sg')
	    .factory('Tasklist', Tasklist);

	Tasklist.$inject = ['$resource'];

	function Tasklist($resource){

		return $resource('/api/tasklists/:id', { id: '@id' }, {update: { method: 'put', isArray: false }});
		
	}

})();