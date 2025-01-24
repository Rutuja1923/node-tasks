const http = require('http');
const fs = require('fs');
const url = require('url');


let users = [];

function logRequest(req) {
    const ip = req.socket.remoteAddress;
    const timeStamp = new Date().toISOString();

    const log = `IP: ${ip}, Time: ${timeStamp}, ${req.method}  ${req.url} New Request Received!\n`;

    fs.appendFile(
        "request_logs.txt", 
        log, 
        (err) => {
            if (err) {
                console.error("Error logging request:", err);
            }
    });
}


const myServer = http.createServer( (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname !== "/favicon.ico") {
        //add request ingormation into the file
        logRequest(req);
    }

    //home page
    if (pathname === '/' && req.method === 'GET') {
        const user = users[0];
        const profilePic = user?.profilePic ? `<img src="${user.profilePic}" alt="Profile Picture">` : "";
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(
            `<h1>Welcome to the Home Page!</h1>
            ${user ? 
                `<h2>Hello, ${user.username}!</h2>` 
                : ''
            }
            <p><a href='/about'>About Us</a></p>
            <p><a href='/signup'>Sign Up</a></p>

            ${user ? 
                `<form action="/update" method="POST">
                    <label for="email">Update Email:</label>
                    <input type="email" name="email" id="email" placeholder="Enter new email" required>
                    <button type="submit">Update (PATCH)</button>
                </form>
          
                <form action="/delete" method="POST">
                    <button type="submit">Delete User</button>
                </form>`
               : '<p>No users found. Sign up to add a user.</p>'
            }
        `);
    }
    
    //about us page
    else if (pathname === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>About Us</h1><p>We are learning Node.js!</p>`);
    }

    //sign up page - get
    else if (pathname === '/signup' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(
            `<h1>Sign Up</h1>
            <form method='POST' action='/signup'>
                <label for = 'username'>Username :</label>
                <input type = 'text' name = 'username' id = 'username' placeholder = 'enter username' required>
                <br><br>
                <label for = 'email'>Email :</label>
                <input type = 'email' name='email' id = 'email' placeholder = 'enter email' required>
                <br><br>
                <label for = 'pwd'>Password :</label>
                <input type='password' name='pwd' id = 'pwd' placeholder = 'enter password' required>
                <br><br>
                <button type='submit'>Sign Up</button>
          </form>
        `);
      }

    //sign up page - on submitting form
    else if (pathname === '/signup' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const params = new URLSearchParams(body);
            const username = params.get('username');
            const email = params.get('email');
            const password = params.get('password');
            users.push({ username, email, password});
            res.writeHead(302, { Location: '/' }); //redirecting to home page
            res.end();
        });
    }

    //update user email - PATCH method demo
    else if (pathname === '/update' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const params = new URLSearchParams(body);
            const email = params.get('email');

            if (users.length > 0) {
                if (email) {
                    users[0].email = email;
                }
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("User email updated successfully!");
            } 
            else {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("No user found to update!");
            }
        });
    }

    //delete user - DELETE method demo
    else if (pathname === '/delete' && req.method === 'POST') {
        if (users.length > 0) {
            users.pop();    //delete last user
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end('User deleted successfully!');
        } 
        else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end('No user found to delete!');
        }
    }

    //invalid page
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`<h1>404 Not Found</h1><p>The page you're looking for doesn't exist.</p>`);
    }

});

myServer.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
