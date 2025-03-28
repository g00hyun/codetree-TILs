const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const cost = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const q = [];
const rowVisited = Array(n).fill(false);
const colVisited = Array(n).fill(false);
let answer = Number.MAX_SAFE_INTEGER;

const Backtracking = (row) => {
    if(q.length === n) {
        // console.log(q)
        answer = Math.min(answer, q.reduce((a,b) => a+b));
        return;
    }

    if(rowVisited[row]) return;

    for(let i = 0; i<n; i++) {
        if(colVisited[i] || cost[row][i] === 0) continue;

        rowVisited[row] = true;
        colVisited[i] = true;
        q.push(cost[row][i]);
        Backtracking(i);
        colVisited[i] = false;
        q.pop();
    }

    rowVisited[row] = false;
}

Backtracking(0)
console.log(answer)