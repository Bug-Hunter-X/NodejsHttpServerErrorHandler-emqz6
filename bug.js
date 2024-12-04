const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//This is a very basic example of creating a server in Node.js. However, there is a very common bug, if you are using this code in a production environment, it's crucial to handle errors properly. Otherwise, you will only see a message like "Error: listen EADDRINUSE :::8080" and it is difficult to debug.

//The bug is that the server doesn't handle errors properly. If there is an error, it will crash without any indication of what went wrong.

//To fix this, you can add an error handler to the server.listen method.