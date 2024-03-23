const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) =>{
	console.log(req.url, req.method);

	// res.setHeader('Content-Type', 'text/html');
	
	// //fs is reading the html file
	// fs.readFile('./views/dj_hchen37.html', (err, data) =>{
	// 	if(err){
	// 		console.log(err);
	// 	}
	// 	else{
	// 		res.write(data);
	// 	}
	// 	res.end();
	// });


});

let port = 8080;
server.listen(port);
console.log("Server running at port= " + port);