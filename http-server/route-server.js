const http = require('http');
const fs = require('fs');

const path = 'new-request-logs.txt';

const myServer = http.createServer( (req, res) => {
    const ip = req.socket.remoteAddress;
    const timeStamp = new Date().toISOString();

    const log = `IP: ${ip}, Time: ${timeStamp}, ${req.url} New Request Received!\n`;

    fs.appendFile(
        path,
        log,
        (err) => {
            if (err) {
                console.log(err);
            }
            switch (req.url) {
                case '/' :
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end("Welcome to my home page!");
                        break;

                case '/about' : 
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end("I am a full stack web developer!");
                        break;

                case '/contact' : 
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end("Reach out to me at +91 9394883929");
                        break;

                default : 
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end('404 Not Found!');
            }
        }
    );
});


myServer.listen(3000, () => {
    console.log('Server is runnign on http://localhost:3000');
});