const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("")

const s = input.filter((v,idx) => idx%2 === 1).reverse().join("")
console.log(s)