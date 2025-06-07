const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    segments.push({ a, b });
}
// Please Write your code here.

const sortedSeg = segments.sort((a,b) => a.a - b.a)
console.log(sortedSeg)

const arr1d = [];
segments.forEach(({a,b}) => {
    arr1d
})