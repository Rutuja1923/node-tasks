const math = require("../modules/math");
//console.log(math);

let res1 = math.sum(8,10);
let res2 = math.diff(8,2);
let res3 = math.product(4,5);
let res4 = math.divide(10,2);
let res5 = math.divide(4,0);

console.log(`PI = ${math.pi}`);
console.log(`G = ${math.g}`);
console.log(`sum(8,10) : ${res1}`);
console.log(`diff(8,2) : ${res2}`);
console.log(`product(4,5) : ${res3}`);
console.log(`divide(10,2) : ${res4}`);
console.log(`divide(4,0) : ${res5}`);

