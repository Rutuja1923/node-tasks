const fs = require('fs');

fs.unlink(
    'message.txt',
    (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('deleted file successfully');
    }
);