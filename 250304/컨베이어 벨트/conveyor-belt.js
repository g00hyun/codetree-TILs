const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const u = input[1].split(' ').map(Number);
const d = input[2].split(' ').map(Number);

// Please write your code here.

const Solution = (t) => {
    while(t--) {
        const utmp = u[n-1]
        const dtmp = d[n-1]

        for(let i = n-1; i>0; i--) {
            u[i] = u[i-1]
            d[i] = d[i-1]
        }

        u[0] = dtmp, d[0] = utmp
    }
}

Solution(t)
console.log(u.join(' '))
console.log(d.join(' '))