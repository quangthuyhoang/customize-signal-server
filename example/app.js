const http = require('http');
const SimplePeerServer = require('../src/simple-peer-server');

const server = http.createServer();
const spServer = new SimplePeerServer(server, true);

server.listen(8081);
