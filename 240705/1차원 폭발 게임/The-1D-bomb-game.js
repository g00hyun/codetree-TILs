const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = input[0].split(' ').map(Number);
let bombs = input.slice(1,1+n).map(Number);

let range = [null];
while(range.length) {
    range.length = 0;
    let j = 0;

    for(let i = 0; i < bombs.length; i++) {
        while(j < bombs.length && bombs[i] === bombs[j]) {
            j++;
        }

        if(j - i >= m) {
            range.push([i,j]);
            i = j-1;
        }
    }

    range.reverse().forEach(elem => {
        const s = elem[0];
        const e = elem[1];

        bombs = [...bombs.slice(0,s), ...bombs.slice(e)];
    })
}

console.log(bombs.length)
bombs.forEach(val => console.log(val))