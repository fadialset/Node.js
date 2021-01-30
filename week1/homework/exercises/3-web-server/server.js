/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http');
const path = require('path');
const fs = require('fs');

//create a server
let server = http.createServer(function (req, res) {
	if(req.url === '/'){
		fs.readFile('index.html',(err,content)=>{
			if(err) throw err;
			res.writeHead(200,{'content-Type': 'text/html'});
			res.end(content)
		})
	}
		if(req.url === '/index.js'){
		fs.readFile('index.js',(err,content)=>{
			if(err) throw err;
			res.writeHead(200,{'content-Type': 'text/javascript'});
			res.end(content)
		})
	}
});

server.listen(3000); // The server starts to listen on port 3000