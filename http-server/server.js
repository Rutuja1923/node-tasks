const http = require('http');
const fs = require('fs');

const path = 'request-logs.txt';

function logRequest(ip, timeStamp) {
    const log = `IP: ${ip}, Time: ${timeStamp}\n`;

    fs.appendFile(
        path,
        log,
        (err) => {
            if (err) {
                console.log(err);
            }
        }
    );
}

const myServer = http.createServer( (req, res) => {
    const ip = req.socket.remoteAddress;
    const timeStamp = new Date().toISOString();

    logRequest(ip, timeStamp);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Your request has been logged!');
});


myServer.listen(3000, () => {
    console.log('Server is runnign on http://localhost:3000');
});