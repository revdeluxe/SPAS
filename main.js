const https = require('https');
const fs = require('fs');
const path = require('path');

const port = 443;

// HTTPS options
const options = {
  key: fs.readFileSync('src/keys/key.key'), // Path to your private key file
  cert: fs.readFileSync('src/keys/key.crt') // Path to your SSL certificate file
};

// Read the contents of the default HTML file
const defaultHtmlPath = './login.html'; // Path to your default HTML file
const defaultHtmlContent = fs.readFileSync(defaultHtmlPath, 'utf8');

// Create HTTPS server
const server = https.createServer(options, (req, res) => {
  // Serve the default HTML page for all requests
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(defaultHtmlContent);
});

// Start server
server.listen(port, () => {
  console.log(`Server running on https://localhost:${port}/`);
});