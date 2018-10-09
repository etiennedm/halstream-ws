var http = require('http');
var express = require('express');
var websocket = require('websocket-stream');
const fs = require('fs');

const app = express();
const server = http.createServer(app);

var wss = websocket.createServer({
  perMessageDeflate: false,
  server: server,
  binary: false
}, handle);

function handle(stream) {
    console.log("handle stream");
    fs.createReadStream('./halstream.txt').pipe(stream);
}

server.listen(process.env.PORT || 8765, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
