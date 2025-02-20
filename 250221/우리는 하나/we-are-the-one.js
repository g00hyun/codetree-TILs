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

    pop() {
        if (this.empty())
            throw new Error("Queue is Empty")
        return this.q[++this.head]
    }

    size() {
        return this.tail - this.head
    }

    front() {
        if (this.empty())
            throw new Error("Queue is Empty")
        return this.q[this.head + 1]
    }
}

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const [n,k,u,d] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(v => v.split(' ').map(Number))

const visited = Array(n).fill().map(v => Array(n).fill(false))
let visited2

const q = new Queue()

const InRange = (x,y) => 0<=x && x<n && 0<=y && y<n;

const CanGo = (x,y) => {
    if(!InRange(x,y)) return false;
    if(visited2[x][y]) return false;
    return true;
}

const BFS = () => {
    const dx = [0,0,1,-1], dy = [1,-1,0,0];

    while(!q.empty()) {
        const [x,y] = q.pop()

        for(let dir = 0; dir < 4; dir++){
            const nx = x + dx[dir], ny = y + dy[dir];

            if(CanGo(nx, ny)) {
                const diff = Math.abs(arr[x][y] - arr[nx][ny])
                if(diff >= u && diff <= d) {
                    q.push([nx,ny])
                    visited2[nx][ny] = true
                }
            }
        }
    }
}

const nodes = []
const Backtracking = () => {
    if(nodes.length === k) {
        visited2 = Array(n).fill().map(v => Array(n).fill(false))
        nodes.forEach(([x,y]) => {
            q.push([x,y])
            visited2[x][y] = true
        })
        BFS()

        let cnt = 0;
        visited2.forEach(arr => arr.forEach(v => v ? cnt++ : ""))

        result = Math.max(result, cnt)
        return
    }

    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++) {
            if(visited[i][j]) continue;

            nodes.push([i,j])
            visited[i][j] = true;
            Backtracking()
            visited[i][j] = false;
            nodes.pop()
        }
}

let result = 0
Backtracking()
console.log(result)