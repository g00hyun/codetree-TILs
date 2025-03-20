const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const howMany = () => {
    const lines = segments.filter((v,i) => selected[i])
    const horizon = Array(1001).fill(false)
    
    for(let i = 0; i < lines.length; i++) {
        const [a,b] = lines[i];

        for(let i = a; i<=b; i++) {
            if(horizon[i]) return false;
        }

        for(let i = a; i<=b; i++) {
            horizon[i] = true;
        }
    }

    return true;
}

const selected = []
let answer = 0;

const Backtracking = (cnt) => {
    if(cnt === n) {
        if(howMany()) answer = Math.max(answer, selected.filter(v => v).length)
        return;
    }

    for(let i = 0; i<=1; i++) {
        selected.push(i)
        Backtracking(cnt+1)
        selected.pop();
    }
}

Backtracking(0);
console.log(answer)