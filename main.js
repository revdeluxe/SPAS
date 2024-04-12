const https = require('https');
const fs = require('fs');
const path = require('path');

const port = 443;

// HTTPS options
const options = {
  key: fs.readFileSync('src/keys/key.key'), // Path to your private key file
  cert: fs.readFileSync('src/keys/key.crt') // Path to your SSL certificate file
};

// Directory to serve
const directoryToServe = './';

// Create HTTPS server
const server = https.createServer(options, (req, res) => {
  // Get the requested file path
  const filePath = path.join(__dirname, directoryToServe, req.url);

  // Check if the requested file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // If file doesn't exist, send 404 response
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Not Found');
      return;
    }

    // If file exists, read its contents and serve
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // If error reading file, send 500 response
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('500 Internal Server Error');
        return;
      }

      // Write HTTP header
      res.writeHead(200, {'Content-Type': 'text/html'});

      // Write file contents to response
      res.end(data);
    });
  });
});

// Start HTTPS server
server.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
