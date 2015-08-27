var express = require('express');
var bodyParser = require('body-parser')
var app = express();

/**
 * Static app resources
 */
app.use(express.static('./'));


app.use(bodyParser.json());

/**
 * Mocked info
 */


var taskLists = [
	{
		id : 0,
		title: 'My Task List from Node.js',
		tasks: [{
			name: 'Task 1',
			description: 'Descr 1'
		}, {
			name: 'Task 2',
			description: 'Descr 2'
		}, {
			name: 'Task 3',
			description: 'Descr 3'
		}]
	}
];

app.get('/api/tasklists', function(req, res) {
	res.send(taskLists);
});

app.get('/api/tasklists/:id', function(req, res) {
	res.send(taskLists[req.param('id')]);
});


app.put('/api/tasklists/:id', function(req, res) {
	console.log(req.body);
	var id = req.param('id');
	taskLists[id] =  req.body;
	res.send('success');
});


var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});