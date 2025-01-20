//path - C:\.vscode\Node-Js-Tasks\file-system\message.txt

const path = require('path');

const filePath = 'C:\\.vscode\\Node-Js-Tasks\\file-system\\message.txt';

const parsedPath = path.parse(filePath) ;

//console.log(parsedPath);
console.log(`Root : ${parsedPath.root}`);
console.log(`Directory : ${parsedPath.dir}`);
console.log(`Base : ${parsedPath.base}`);
console.log(`Extension : ${parsedPath.ext}`);
console.log(`Name : ${parsedPath.name}`);


