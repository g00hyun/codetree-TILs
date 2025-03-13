class Set {
    constructor() {
        this.s = 0;
    }

    add(x) {
        this.s = this.s + 1 << x;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const q = Number(input[0]);
let idx = 1;
for (let i = 0; i < q; i++) {
    const [command, num] = input[idx++].split(" ");
    const x = num !== undefined ? Number(num) : undefined;
    
    // Please Write your code here.
}

const customSet = new Set();

customSet.add(30)

console.log(customSet.s)