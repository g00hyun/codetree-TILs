const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));

// Please Write your code here.
const q = []
const time = Array(n).fill().map(v => Array(n).fill(-1))

const Init = () => {
    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            if(grid[i][j] === 2) {
                time[i][j] = 0;
                q.push([i,j]);
            } 
}

const CanGo = (x,y) => {
    if(!(0<=x && x<n && 0<=y && y<n)) return false;
    if(time[x][y] !== -1) return false;
    return true;
}

const BFS = () => {
    const dx=[1,-1,0,0], dy=[0,0,1,-1];

    while(q.length>0) {
        const [x,y] = q.shift();

        for(let i = 0; i<4; i++) {
            const nx = x + dx[i], ny = y + dy[i];

            if(CanGo(nx,ny) && grid[nx][ny] === 1) {
                q.push([nx,ny]);
                time[nx][ny] = time[x][y] + 1;
            }
        }
    }
}

const Post = () => {
    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            if(grid[i][j] === 1 && time[i][j] === -1) 
                time[i][j] = -2
}

Init();
BFS();
Post();

console.log(time.map(v => v.join(' ')).join('\n'))
