const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const [n,m] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(v => v.split(' ').map(Number))

function isHappySeq(seq) {
    for(let i = 0; i<n; i++) {
        const target = seq[i];
        let streak = 1;

        for(let j = i + 1; j<n; j++) {
            if(target === seq[j]) streak++;
            else break;
        }
        
        if(streak >= m) return true;
    }
    return false;
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
