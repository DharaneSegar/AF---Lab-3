// console.log("Hi");

// const fs = require('fs');
// fs.readFile('file.txt', 'utf8', function (err, data) {
// if (err) throw err;
// console.log(data);
// });

// const fs1 = require('fs');
// fs1.writeFile('file.txt', 'Hello Hi!', function (err) {
// if (err) throw err;
// console.log('File saved!');
// });

// const http = require('http');
// http.createServer(function (req, res) {
// res.writeHead(200, {'Content-Type': 'text/html'});
// res.write('Hello World!');
// console.log("Connected");
// res.end();
// }).listen(8080);

// const https = require('https');
// https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
// let data = '';
// resp.on('data', (chunk) => {
// data += chunk;
// });
// resp.on('end', () => {
// console.log(JSON.parse(data));
// });
// }).on('error', (err) => {
// console.log("Error: " + err.message);
// });

const myModule = require('./my-module.js');
console.log(myModule.myFunction());

