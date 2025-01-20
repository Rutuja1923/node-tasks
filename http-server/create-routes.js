const http = require('http');

const myServer = http.createServer( (request , response) => {
    if (request.url == '/') {
        response.writeHead(200, { "content-Type": "text/plain" });
        response.end("Welcome to root of the server");
    }
    else if (request.url == '/about') {
        response.writeHead(200, { "content-Type": "text/plain" });
        response.end("About us : We are in love with the server");
    }
    else if (request.url == '/contact') {
        response.writeHead(200, { "content-Type": "text/plain" });
        response.end("Contact us : Call us at 696");
    }
    else {
        response.writeHead(404);
        response.end('Page Not Found ! Please check the URL !');
    }
});


myServer.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});
