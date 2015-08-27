var express = require('express');
var app = express();

/**
 * Static app resources
 */
app.use(express.static('./'));


/**
 * Mocked info
 */

app.get('/api/tasks', function (req, res) {

	var taskList = [];

	res.send(taskList);
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});