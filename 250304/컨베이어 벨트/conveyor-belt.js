const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const u = input[1].trim().split(' ').map(Number);
const d = input[2].trim().split(' ').map(Number);

// Please write your code here.

const Solution = (t) => {
    while(t--) {
        u.unshift(d.pop())
        d.unshift(u.pop())
    }
}

Solution(t)
console.log(u.join(' '))
console.log(d.join(' '))