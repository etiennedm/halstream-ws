var http = require('http');
var express = require('express');
var websocket = require('websocket-stream');
const { spawn } = require('child_process');

const app = express();
const server = http.createServer(app);

var wss = websocket.createServer({
  perMessageDeflate: false,
  server: server,
  binary: false
}, handle);

function handle(stream) {
    subprocess = spawn("/home/etienne/dev/linuxcnc/linuxcnc-dev/bin/halsampler", { stdio: ['ignore', 'pipe', 'ignore'] });
    subprocess.stdout.pipe(stream);
}

server.listen(process.env.PORT || 8765, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
