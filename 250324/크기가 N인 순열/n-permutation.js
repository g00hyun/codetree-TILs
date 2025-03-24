const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

const q = []
const visited = Array(n+1).fill(false)
const Permutation = () => {
    if(q.length === n) {
        console.log(q.join(' '))
        return;
    }

    for(let i = 1; i<=n; i++) {
        if(visited[i]) continue;

        q.push(i);
        visited[i] = true;
        Permutation();
        visited[i] = false;
        q.pop();
    }
}

Permutation()