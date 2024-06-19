const fs = require("fs");

let input = Number(fs.readFileSync(0).toString());

console.log((input * 30.48).toFixed(1));