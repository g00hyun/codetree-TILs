const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].split(' ').map(Number);

// Please Write your code here.

const dp = Array(n).fill(1);
dp[0] = 1;
for(let i = 0; i<n; i++) {
    for(let j = 0; j<i; j++) {
        if(a[i] > a[j]) {
            dp[i] = Math.max(dp[i], dp[j]+1)
        }
    }
}

console.log(dp.reduce((now, cur) => Math.max(now, cur)))