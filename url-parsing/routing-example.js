const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

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

        case '/search':
            const userName = query.username;
            if (userName) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Hey ${userName}, Have a good day!`);
            } 
            else {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Please provide a username query parameter.');
            }
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
