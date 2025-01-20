const fs = require('fs');
const path = "sample.txt";

console.log("Attempting to open the file...");

fs.open(
    path, 
    "r+", 
    (err, fd) =>{
    if (err) {
        if (err.code === "ENOENT"){
            console.error(`Error: File "${path}" does not exist.`);
        } 
        else{
            console.error(`An error occurred while opening the file: ${err.message}`);
        }
        return;
    }

    console.log(`File "${path}" opened successfully with file descriptor: ${fd}`);

    fs.close(fd, (closeErr) => {
        if (closeErr){
            console.error(`Error closing the file: ${closeErr.message}`);
        } 
        else{
            console.log(`File "${path}" closed successfully.`);
        }
    });
});
