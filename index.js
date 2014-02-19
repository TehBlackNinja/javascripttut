#!/usr/bin/env node

//Javascript tutorial for Mason.
var http = require('http');

http.createServer(function (request, response) {
	response.end("Hey Mason!");
}).listen(1024);