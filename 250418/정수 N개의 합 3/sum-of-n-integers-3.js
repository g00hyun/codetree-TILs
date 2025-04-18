const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
const prefixGridSum = Array(n+1).fill().map(v => Array(n+1).fill(0));

for(let i = 1; i<=n; i++)
    for(let j = 1; j<=n; j++)
        prefixGridSum[i][j] = prefixGridSum[i-1][j] + prefixGridSum[i][j-1] - prefixGridSum[i-1][j-1] + grid[i-1][j-1];

let answer = Number.MIN_SAFE_INTEGER;
for(let i = 1; i<=n-k+1; i++)
    for(let j = 1; j<=n-k+1; j++)
        answer = Math.max(answer, prefixGridSum[i+k-1][j+k-1] - prefixGridSum[i+k-1][j-1] - prefixGridSum[i-1][j+k-1] + prefixGridSum[i-1][j-1]);

console.log(answer);
// prefixGridSum.forEach(list => {
//     list.forEach(v => process.stdout.write(v + " "))
//     console.log()
// })