## Setup & Requirements
Install node.js:
```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Create project directory and initialize npm there, then install ws and express packages:
```bash
mkdir halstream-ws
cd halstream-ws
npm init
npm i websocket-stream express --save
npm -g browserify
```

To run the server:
```bash
cd server
node index.js
```

To bundle and test the UI:
```bash
cd scope
browserify index.js > bundle.js
```
And then open `index.html` in your browser. 

## References
1. [Node.js installation instructions](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
1. [https://medium.com/factory-mind/websocket-node-js-express-step-by-step-using-typescript-725114ad5fe4](https://medium.com/factory-mind/websocket-node-js-express-step-by-step-using-typescript-725114ad5fe4)
1. [Visualizing Data in Realtime with WebSocket and D3 (YouTube talk)](https://www.youtube.com/watch?v=Lc2TA0-gZqg)
