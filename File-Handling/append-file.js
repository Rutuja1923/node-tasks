const fs  = require('fs');

fs.appendFile(
    'message.txt',
    '\nThis text will be appended in new line.',
    (err) => {
        if (err) {
            return console.error(err);
        }
        console.log(`The data appended successfully`);
    }
);