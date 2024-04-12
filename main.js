const https = require('https');
const fs = require('fs');

const port = 443;

// HTTPS options
const options = {
  key: fs.readFileSync('path/to/private.key'), // Path to your private key file
  cert: fs.readFileSync('path/to/certificate.crt') // Path to your SSL certificate file
};

// Create HTTPS server
const server = https.createServer(options, (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello, HTTPS World!</h1>');
});

// Start HTTPS server
server.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
const https = require('https');
const fs = require('fs');

const port = 443;

// HTTPS options
const options = {
  key: fs.readFileSync('path/to/private.key'), // Path to your private key file
  cert: fs.readFileSync('path/to/certificate.crt') // Path to your SSL certificate file
};

// Create HTTPS server
const server = https.createServer(options, (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello, HTTPS World!</h1>');
});

// Start HTTPS server
server.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
