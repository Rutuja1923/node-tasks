const http = require('http');

const server = http.createServer( (request , response) => {
    console.log('new request recieved!');
    console.log(request.headers);
    response.writeHead(200, { "content-Type": "text/plain" });
    response.end("Hello , I'm the server response!");
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});