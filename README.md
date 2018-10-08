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
npm i ws express --save
```

## References
1. [Node.js installation instructions](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
1. [Visualizing Data in Realtime with WebSocket and D3 (YouTube talk)](https://www.youtube.com/watch?v=Lc2TA0-gZqg)
