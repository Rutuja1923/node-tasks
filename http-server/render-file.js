const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer( (request , response) => {
    if (request.url == '/'){
        const file = path.join(__dirname , '..' , 'public' , 'index.html');

        fs.readFile(file, 'utf-8', (error , data) => {
            if (error) {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.end("Server Error: Unable to load index.html");
                return;
            }

            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(data);
        });
    }
    else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("404 Not Found");
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});