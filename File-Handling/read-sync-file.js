const fs = require('fs');

const fileContent = fs.readFileSync('test.txt' , 'utf-8');

console.log(`File content : ${fileContent}`);