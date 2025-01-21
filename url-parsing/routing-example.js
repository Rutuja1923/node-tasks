const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    const path = parsedUrl.pathname;

    switch (path) {
        case '/':
        case '/home':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to the Home Page!');
            break;

        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Learn more about us!');
            break;

        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Reach out to us anytime!');
            break;

        case '/help':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('How can we assist you?');
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found. The page you are looking for does not exist.');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
