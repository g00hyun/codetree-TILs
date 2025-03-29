const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const q = [];
const rowVisited = Array(n).fill(false);
let answer = -1;

const Backtracking = (cnt) => {
    if(cnt === n) {
        answer = Math.max(answer, Math.min(...q));
        return;
    }

    for(let i = 0; i<n; i++) {
        if(rowVisited[i]) continue;

        rowVisited[i] = true;
        q.push(grid[i][cnt]);
        Backtracking(cnt+1);
        q.pop();
        rowVisited[i] = false;
    }
}

Backtracking(0);
console.log(answer);