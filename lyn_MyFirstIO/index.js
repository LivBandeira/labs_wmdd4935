const fs = require('fs');

let files = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
console.log(files);
