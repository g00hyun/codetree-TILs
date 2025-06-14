const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const num = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const moveDir = input.slice(1 + n, 1 + 2 * n).map(line => line.split(' ').map(Number));
const [r, c] = input[1 + 2 * n].split(' ').map(Number);

// Please Write your code here.
const dx = [0,-1,-1,0,1,1,1,0,-1]
const dy = [0,0,1,1,1,0,-1,-1,-1]
let answer = 0;

function InRange(x,y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function CanGo(x,y,prevNum) {
    return InRange(x,y) && num[x][y] > prevNum;
}

function Backtracking(x,y,cnt) {
    answer = Math.max(answer, cnt);

    const dir = moveDir[x][y];

    for(let i = 0; i<n; i++) {
        const nx = x + dx[dir]*i, ny = y + dy[dir]*i;
        if(CanGo(nx,ny,num[x][y]))
            Backtracking(nx,ny,cnt+1);
    }
}

Backtracking(r-1, c-1, 0);
console.log(answer)