var http = require('http');
var express = require('express');
var websocket = require('websocket-stream');
const { spawn } = require('child_process');

LINUX_CNC_INSTALL_DIR = '/home/etienne/dev/linuxcnc/linuxcnc-dev/bin';

var hal = require('./hal');
hal.getPins().then(function(result) {
    console.log(result);
});

const app = express();
const server = http.createServer(app);

var wss = websocket.createServer({
  perMessageDeflate: false,
  server: server,
}, handle);

wss.on('connection', (ws, req) => {
    ws.on('message', (data) => {
        if (data === 'list pins') {
            console.log("List pins!");
            hal.getPins().then(function(result) {
                ws.send(JSON.stringify(result));
            });
        }
    });
});

function handle(stream) {
    subprocess = spawn(`${LINUX_CNC_INSTALL_DIR}/halsampler`, { stdio: ['ignore', 'pipe', 'ignore'] });
    subprocess.stdout.pipe(stream);
}

server.listen(process.env.PORT || 8765, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
