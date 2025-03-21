const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, t] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const marbles = input.slice(1 + n, 1 + n + m).map(line => line.split(' ').map(Number));

// Please Write your code here.
let pos = Array(n).fill().map(v => Array(n).fill(0))
const q = marbles.map(list => list.map(v => v-1))

const Put = () => {
    while(q.length>0) {
        const [x,y] = q.shift();
        pos[x][y]++;
    }
}

const Search = () => {
    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            if(pos[i][j] === 1)
                Move(i,j);
}

const Move = (x,y) => {
    const dx = [-1,1,0,0], dy = [0,0,-1,1];

    let maxval = -1;
    let index = 0;
    for(let i = 0; i<4; i++) {
        const nx = x + dx[i], ny = y + dy[i];

        if(0<=nx && nx<n && 0<=ny && ny<n) {
            if(maxval < grid[nx][ny]) {
                maxval = grid[nx][ny]
                index = i;
            }
        }
    }

    if(maxval !== -1) {
        q.push([x + dx[index], y + dy[index]])
    }
}

for(let i = 0; i<t; i++) {
    Put()
    Search()
    pos = Array(n).fill().map(v => Array(n).fill(0))
}
Put()

let answer = 0;
pos.forEach(v => answer += v.filter(a => a===1).length)
console.log(answer)

