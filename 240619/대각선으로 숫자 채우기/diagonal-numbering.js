const fs = require("fs");

let [n,m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let arr = Array(n).fill(0).map(() => Array(m).fill(0));

let init = 0;
let stack = 1;
for(let i = 0; i<n; i++) {
    init += stack++;
    arr[i][0] = init;
}

let val = 1;
let level = 0;
while(level < n+m) {
    for(let i = 0; i<n; i++) {
        for(let j = 0; j<m; j++) {
            if(level === i + j)
                arr[i][j] = val++;
        }
    }
    level++;
}

for(let i = 0; i<n; i++) {
    let s = '';
    for(let j = 0; j<m; j++) {
        s += arr[i][j] + ' ';
    }
    console.log(s);
}