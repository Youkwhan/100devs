// ---------IMPORT/EXPORTing modules-------
// WHY NOT:
// import Person from './person'; // ES6
// BCZ node has not implemented this as of yet (otherwise need to use babel to compile it to ES6)

const Person = require('./person'); // common.js

const person1 = new Person('John Doe', 30);
console.log(person1);

// --------Event driven-----------------
const Logger = require('./logger');
const logger = new Logger();
logger.on('message', (data) => console.log('Called Listener:', data));

logger.log('Hello World');
logger.log('Hello');

// --------Create a actual Webserver ---------
// - Abstract syntax with a framework like Express.js, but knowing the different core type is good.
// - nodemon dependecy, (dev in scripts in package.json) used to give us real-time update on the browser when we make changes to our web "server" instead of restarting the server every save. ("start" in scripts in package.json, so we build production in node and not nodemon during development phase)

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Do note, NOT efficient hardcoding for every page we would need to serve it's html, css, or images or etc...
  // if (req.url === '/') {
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'index.html'),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { 'Content-Type': 'text/html' });
  //       res.end(content); //serving html
  //     }
  //   );
  // }

  // if (req.url === '/api/users') {
  //   // serving JSON, a REST API
  //   // Usually we would fetch data from a database and serve that, but hardcoding it here
  //   const users = [
  //     { name: 'Bob Smith', age: 40 },
  //     { name: 'John Doe', age: 30 },
  //   ];
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users)); // serving JSON
  // }

  // SO LETS MAKE THE FILE PATH DYNAMIC!!!

  // Build file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // Get Extension of file
  let extname = path.extname(filePath);

  // Initial Content Type
  let contentType = 'text/html';

  // Check extension and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType == 'text/html' && extname == '') filePath += '.html';

  // log the filePath
  console.log(filePath);

  // Loading a file
  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        // Page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        //  Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

// port, our host server inside environment variable
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
