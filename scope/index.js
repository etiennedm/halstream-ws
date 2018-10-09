var websocket = require('websocket-stream');
var d3 = require('d3');
const { Subject } = require('rxjs');
const { mergeMap } = require('rxjs/operators');

var halStream = new Subject();

var halStreamData = halStream.pipe(mergeMap(data => data.toString().split('\n')));
halStreamData.subscribe(data => {
    console.log(data);
});

/* Connect to server */
var ws = websocket('ws://localhost:8765')
ws.on('data', (data) => {
    halStream.next(data);
});
