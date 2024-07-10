const { createServer } = require('node:http');
const hostname = '127.0.0.1'; // localhost
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200; // OK 201 
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>MD18402 - AND103 - RestAPI</h1>');
    res.write('<p style="color:red;">Lab 2 - NodeJS - PH46164a</p>');
    res.write(`<h1>Hello World 2</h1>
    <h2>Hello World 3</h2>
    <p>Have A Good Day 2</p>`)
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});