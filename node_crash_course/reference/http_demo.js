// DEMO creating our own Web server
const http = require('http');

// Create a server object
http
  .createServer((request, response) => {
    // Write response (when we get a request we want to write a response)
    response.write('Hello World'); // outputs to the browser
    response.end();
  })
  .listen(5000, () => console.log('Server running...')); //localhost:5000
