var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

var buf = fs.readFileSync("./index.html");
app.get('/', function(request, response) {
  response.send(buf.toString());
});

var process_img = fs.readFileSync("./sample-process-trans.png");
app.get('/sample-process-trans.png', function(request, response) {
  response.send(process_img);
});

var aws_img = fs.readFileSync("./aws-process-execution.png");
app.get('/aws-process-execution.png', function(request,response) {
  response.send(aws_img);
});

var editor_img = fs.readFileSync("./Editor.png");
app.get('/Editor.png', function(request,response) {
  response.send(editor_img);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
