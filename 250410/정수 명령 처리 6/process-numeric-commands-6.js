const h = require("collections/heap")

const pq = new h();

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

commands.forEach(v => {
    let [c, a] = v.split(' ');
    if(a) a = Number(a);

    if(c === 'push')
        pq.push(a)
    else if(c === 'pop')
        console.log(pq.pop())
    else if(c === 'size')
        console.log(pq.length)
    else if(c === 'empty')
        console.log(pq.length === 0 ? 1 : 0)
    else if(c === 'top')
        console.log(pq.peek())
})