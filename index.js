require('dotenv').config();
const cluster = require('cluster');
var numCPUs = require('os').cpus().length;

const Server = require('./model/server');

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    const server = new Server();
    server.listen(); 
}

