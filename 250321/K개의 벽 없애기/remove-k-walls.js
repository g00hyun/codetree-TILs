class Queue {
    constructor () {
        this.q = []
        this.head = -1
        this.tail = -1
    }

    push(e) {
        this.q.push(e);
        this.tail++;
    }

    pop() {
        if(this.empty())
            throw new Error('Queue is Empty');
        return this.q[++this.head];
    }

    empty() {
        return this.tail === this.head;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const [r1, c1] = input[1 + n].split(' ').map(Number);
const [r2, c2] = input[2 + n].split(' ').map(Number);

// Please Write your code here.
const q = new Queue();
const visited = Array(n).fill().map(v => Array(n).fill().map(v => Array(k+1).fill(false)));
const time = Array(n).fill().map(v => Array(n).fill(-1))

const CanGo = (x,y,bricks) => {
    if(!(0<=x && x<n && 0<=y && y<n)) return false;
    if(visited[x][y][bricks]) return false;
    return true; 
}

const BFS = () => {
    const dx = [1,-1,0,0], dy = [0,0,1,-1];

    while(!q.empty()) {
        const [x,y,bricks] = q.pop();

        if(x === r2-1 && y === c2-1){
            return time[x][y];
        }

        for(let i = 0; i<4; i++) {
            const nx = x + dx[i], ny = y + dy[i];

            if(CanGo(nx,ny,bricks)) {
                if(grid[nx][ny] === 1 && bricks > 0) {
                    q.push([nx,ny,bricks - 1]);
                    visited[nx][ny][bricks] = true;
                    time[nx][ny] = Math.max(time[nx][ny], time[x][y] + 1)
                }
                else if (grid[nx][ny] === 0) {
                    q.push([nx,ny,bricks]);
                    visited[nx][ny][bricks] = true;
                    time[nx][ny] = Math.max(time[nx][ny], time[x][y] + 1)
                }
            }
        }
    }
}

q.push([r1-1, c1-1, k, 0])
visited[r1-1][c1-1][k] = true;
time[r1-1][c1-1] = 0;

const answer = BFS();

console.log(answer ? answer : -1)