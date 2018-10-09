var websocket = require('websocket-stream');
var d3 = require('d3');
const { Subject } = require('rxjs');
const { mergeMap, partition } = require('rxjs/operators');

var halStream = new Subject();

const [serverMessage, halStreamRawData] = halStream.pipe(partition(data => data[0] == 91 || data[0] == 123));
const halStreamData = halStreamRawData.pipe(mergeMap(data => data.toString().split('\n')));

serverMessage.subscribe(data => {
    msg = JSON.parse(data);
});

halStreamData.subscribe(data => {
});

/* Connect to server */
var ws = websocket('ws://localhost:8765')
ws.on('data', (data) => {
    halStream.next(data);
});

function listPins() {
    console.log("List pins clicked!");
    ws.socket.send('list pins');
}

document.getElementById('listPinsButton').addEventListener('click', listPins);