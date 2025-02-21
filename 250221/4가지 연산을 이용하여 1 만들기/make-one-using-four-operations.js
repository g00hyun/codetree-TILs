class Queue {
    constructor() {
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
const n = Number(fs.readFileSync(0).toString().trim())

const minus1 = (v) => v-1
const plus1 = (v) => v+1
const div2 = (v) => Math.trunc(v/2)
const div3 = (v) => Math.trunc(v/3)

const method = {
    0: minus1,
    1: plus1,
    2: div2,
    3: div3
}

const canPM1 = (v) => true
const canDiv2 = (v) => v%2 === 0
const canDiv3 = (v) => v%3 === 0

const canMethod = {
    0: canPM1,
    1: canPM1,
    2: canDiv2,
    3: canDiv3
}

const q = new Queue()
const step = Array(n).fill(-1)

const CanGo = (number) => {
    if(step[number] !== -1) return false;
    if(number >= n) return false;
    return true
}

const BFS = () => {
    while(!q.empty()) {
        const number = q.pop()

        for(let i = 0; i<4; i++) {
            if(canMethod[i](number)) {
                const nnumber = method[i](number)

                if(CanGo(nnumber)) {
                    q.push(nnumber)
                    step[nnumber] = step[number] + 1
                }
            }
        }
    }
}

q.push(n)
step[n] = 0
BFS()

console.log(step[1])
