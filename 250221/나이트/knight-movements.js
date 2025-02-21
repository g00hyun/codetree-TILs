class Queue {
    constructor () {
        this.q = []
        this.head = -1
        this.tail = -1
    }

    empty() {
        return this.head === this.tail
    }

    push(e) {
        this.q.push(e)
        this.tail++
    }

    pop () {
        if(this.empty())
            throw new Error("Queue is empty")
        return this.q[++this.head]
    }

    front() {
        if(this.empty())
            throw new Error("Queue is empty")
        return this.q[this.head + 1]
    }

    size() {
        return this.tail - this.head
    }
}

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const [r1,c1,r2,c2] = input[1].split(' ').map(Number)

const q = new Queue()
const step = Array(n).fill().map(v => Array(n).fill(-1))

const InRange = (x,y) => 0<=x && x<n && 0<=y && y<n

const CanGo = (x,y) => {
    if(!InRange(x,y)) return false;
    if(step[x][y] !== -1) return false;
    return true;
}

const BFS = () => {
    const dx = [-2,-2,-1,-1,1,1,2,2], dy = [1,-1,2,-2,2,-2,1,-1]

    while(!q.empty()) {
        const [x,y] = q.pop()

        for(let i = 0; i<8; i++) {
            const nx = x + dx[i], ny = y + dy[i]

            if(CanGo(nx,ny)) {
                q.push([nx,ny])
                step[nx][ny] = step[x][y] + 1
            }
        }
    }
}

q.push([r1-1,c1-1])
step[r1-1][c1-1] = 0
BFS()

console.log(step[r2-1][c2-1])