const fs = require('fs');
const path = "sample.txt"; 

console.log("Opening file using openSync!");

try {
    const fd = fs.openSync(path, "r+");
    console.log(`File "${path}" opened successfully with file descriptor:`, fd);

    fs.closeSync(fd);
    console.log(`File "${path}" closed successfully.`);

} 
catch (err) {
    if (err.code === "ENOENT") {
        console.error(`Error: File "${path}" does not exist.`);
    } 
    else {
        console.error(`Error opening/closing the file: ${err.message}`);
    }
}
