const fs = require("fs");

//asynchronous
fs.writeFile(
    "message.txt",
    "Hello There , Welcome to File System Tasks!", 
    (err) => {
        if (err) {
            return console.error(err);
        }
        console.log("Data written successfully to the newly created file!");
    }
);