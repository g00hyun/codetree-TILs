const fs = require("fs");

let input = Number(fs.readFileSync(0).toString());

console.log(`Your score is ${input} point.`);