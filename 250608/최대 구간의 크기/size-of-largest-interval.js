const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    segments.push({ a, b });
}
// Please Write your code here.

const horizon = new Map();
segments.forEach(({a,b}) => {
    horizon.has(a) ? horizon.set(a, horizon.get(a) + 1) : horizon.set(a, 1);
    horizon.has(b) ? horizon.set(b, horizon.get(b) - 1) : horizon.set(b, -1);
})

const check = [...horizon].sort((a,b) => a[0] - b[0]);

const q = [0];
check.map(v => v[1]).reduce((total, cur, index) => {
    const cal = total + cur;
    if(cal === 0) {
        q.push(index);
        q.push(index+1);
    }
    return cal;
}, 0)

q.pop();
const qq = q.map(v => check[v][0])

let answer = 0;
for(let i = 0; i<q.length; i=i+2) {
    answer = Math.max(answer, qq[i+1] - qq[i]);
}

console.log(answer)