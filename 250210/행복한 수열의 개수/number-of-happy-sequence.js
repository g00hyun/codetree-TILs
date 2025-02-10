const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const [n,m] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(v => v.split(' ').map(Number))

function isHappySeq(seq) {
    let streak = 1, maxStreak = 1;
    for(let i = 1; i<n; i++) {
        if(seq[i-1] === seq[i]) streak++;
        else streak = 1;

        maxStreak = Math.max(maxStreak, streak);
    }
    return maxStreak >= m;
}

let answer = 0;
for(let i = 0; i<n; i++)
    isHappySeq(arr[i]) ? answer++ : "";

for(let j = 0; j<n; j++) {
    const seq = [];
    for(let i = 0; i < n; i++)
        seq.push(arr[i][j])
    
    isHappySeq(seq) ? answer++ : "";
}

console.log(answer)
