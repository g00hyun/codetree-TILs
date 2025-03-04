const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, currX, currY] = input[0].split(' ').map(Number);
let grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const dx = [-1,1,0,0], dy = [0,0,-1,1]

const InRange = (x,y) => {
    return 0 <= x && x < n && 0 <= y && y < n;
}

const SelectDir = (x,y) => {
    for(let i = 0; i<4; i++) {
        const nx = x + dx[i], ny = y + dy[i]
        if(InRange(nx,ny) && grid[x][y] < grid[nx][ny])
            return i;
    }

    return -1
}

const Solution = (x,y) => {
    const answer = []
    x--, y--;
    let dir = SelectDir(x,y);
    answer.push(grid[x][y])
    while(dir !== -1) {
        x += dx[dir], y += dy[dir];
        answer.push(grid[x][y])
        dir = SelectDir(x,y);
    }

    return answer
}

console.log(Solution(currX, currY).join(' '))