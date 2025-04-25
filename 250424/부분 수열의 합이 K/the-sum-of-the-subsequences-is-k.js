const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].trim().split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);
// Please Write your code here.

const prefixSum = arr.map((v,i) => [...arr.slice(0,i+1)]).map(v => v.reduce((total, cur) => total + cur),0);
prefixSum.unshift(0);

let answer = 0;

let size = 1;
while(size++ <= n) {
    for(let i = 0 + size; i<=n; i++) {
        const sum = prefixSum[i] - prefixSum[i-size]
        
        if(sum===k) answer++;
    }
}

console.log(answer);