const fs = require('fs');

fs.appendFileSync('sample.txt',`${Date.now()} Welcome\n`);