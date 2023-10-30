const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

// Computes fibonacci:
let a = 1;
let b = 1;
for (let i = 0; i < 10; i += 1) [a, b] = [b, a + b];

const server = http.createServer((req, resp) => {
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  resp.end('Fibonacci #10: ' + b.toString());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:8080/`);
});