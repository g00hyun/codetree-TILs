const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const q = new Int16Array(n).fill(-1)
const rowVisited = new Int8Array(n).fill(false)

const Permutation = (cnt) => {
    if(cnt === n) {
        answer = Math.max(answer, q.map((row, col) => grid[row][col]).reduce((a,b) => a+b))
        return;
    }

    for(let i = 0; i<n; i++) {
        if(rowVisited[i]) continue;

        rowVisited[i] = true;
        q[cnt] = i;
        Permutation(cnt+1);
        q[cnt] = -1;
        rowVisited[i] = false;
    }
}

let answer = Number.MIN_SAFE_INTEGER;
Permutation(0)
console.log(answer)