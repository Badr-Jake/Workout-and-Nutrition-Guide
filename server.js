const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the content type based on the file extension
  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
  };

  // Get the file path from the request URL
  const filePath = `.${req.url === '/' ? '/index.html' : req.url}`;

  // Get the file extension
  const extname = path.extname(filePath);

  // Set the content type for the response
  res.setHeader('Content-type', contentType[extname] || 'text/plain');

  // Read the file and send it in the response
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If the file is not found, send a 404 response
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('Not Found');
      } else {
        // If there's any other error, send a 500 response
        res.writeHead(500, { 'Content-type': 'text/plain' });
        res.end('Internal Server Error');
      }
    } else {
      // Send the file content in the response
      res.writeHead(200);
      res.end(data);
    }
  });
});

const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
