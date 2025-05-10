const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

const dp = Array(n).fill(-1);
dp[0] = 0;
for(let i = 0; i<n; i++)
    for(let j = 0; j<i; j++) {
        if(dp[j] === -1) continue;
        if(j+arr[j] >= i)
            dp[i] = Math.max(dp[i], dp[j] + 1);
    }

let answer = 0;
dp.forEach(v => answer = Math.max(answer, v))
console.log(answer)