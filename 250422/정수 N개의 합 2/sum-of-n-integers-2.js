const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

const prefixSum = [];
arr.forEach((v,i) => {
    i>0 ? prefixSum.push(v + prefixSum[i-1]) : prefixSum.push(v);
})

let answer = Number.MIN_SAFE_INTEGER;
for(let i = 0; i<=n-k; i++) {
    answer = Math.max(answer, prefixSum[i+k-1] - prefixSum[i] + arr[i]);
}

console.log(answer);