const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

const dp = Array(n + 1).fill(0)

dp[0] = 1
dp[1] = 1
dp[2] = 2

for(let i = 3; i <= n; i++) {
    let calc = 0
    for(let j = 0; j<i; j++)
        calc += dp[j] * dp[i - j - 1]
    dp[i] = calc
}

console.log(dp[n])