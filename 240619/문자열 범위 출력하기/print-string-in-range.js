const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let result = '';
for(let i = 2; i<10; i++)
    result += input[i];
console.log(result);