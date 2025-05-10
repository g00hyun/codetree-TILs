const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
const dp = Array(n).fill(0);

dp[0] = 1;
for(let i = 0; i<n; i++)
    for(let j = 0; j<i; j++)
        if(arr[i] < arr[j])
            dp[i] = Math.max(dp[j] + 1, dp[i]);

let answer = 0;
dp.forEach(v => answer = Math.max(answer, v))
console.log(answer)