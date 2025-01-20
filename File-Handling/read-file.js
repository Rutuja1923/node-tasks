const fs  = require('fs');

//asynchronous
fs.readFile(
    'message.txt',
    'utf-8',
    (err , data) => {
        if (err) {
            return console.error(err);
        }
        console.log(`The data read : ${data}`);
    }
);