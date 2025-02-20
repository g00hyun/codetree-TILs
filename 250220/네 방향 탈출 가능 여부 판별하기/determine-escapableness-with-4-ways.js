class Queue {
    constructor() {
        this.arr = []
        this.head = -1
        this.tail = -1
    }

    empty() {
        return this.head === this.tail
    }

    push(e) {
        this.arr.push(e)
        this.tail++
    }

    pop() {
        if(this.empty()) {
            throw new Error("Queue size is 0")
        }
        return this.arr[++this.head]
    }

    front() {
        if(this.empty())
            throw new Error("Queue size is 0")
        return this.arr[this.head + 1]
    }

    size() {
        return this.tail - this.head
    }
}

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const [n,m] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(v => v.split(' ').map(Number))

const visited = Array(n).fill().map(v => Array(m).fill(false))
const q = new Queue()

const InRange = (x, y) => 0 <= x && x < n && 0 <= y && y < m

const CanGo = (x, y) => {
    if(!InRange(x,y)) return false;
    if(visited[x][y]) return false;
    if(!arr[x][y]) return false;
    return true;
}

const BFS = () => {
    const dx = [0,0,1,-1]
    const dy = [1,-1,0,0]

    while(!q.empty()) {
        const [x,y] = q.pop()

        for(let dir = 0; dir < 4; dir++) {
            const nx = x + dx[dir]
            const ny = y + dy[dir]

            if(CanGo(nx,ny)) {
                q.push([nx,ny])
                visited[nx][ny] = true
            }
        }
    }
}

q.push([0,0])
visited[0][0] = true;
BFS()

if(visited[n-1][m-1]) console.log(1)
else console.log(0)