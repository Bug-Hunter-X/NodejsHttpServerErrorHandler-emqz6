const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

//This is a more robust version of the server that handles errors properly.

//The error handler catches any errors that occur when the server is listening.

server.on('error', err => {
  console.error('Server error:', err);
  if (err.code === 'EADDRINUSE') {
    console.error('Address in use, please choose another port.');
  }
});

server.listen(8080);

console.log('Server is listening on port 8080');