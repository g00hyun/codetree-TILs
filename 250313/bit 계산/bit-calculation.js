class Set {
    constructor() {
        this.s = 0;
    }

    add(x) {
        this.s = this.s + 1 << x;
    }

    del(x) {
        this.s = this.s - 1 << x;
    }

    print(x) {
        return this.s >> x & 1
    }

    toggle(x) {
        this.s = this.s ^ 1 << x;

    }

    clear() {
        this.s = 0;
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

customSet.add(5)

console.log(customSet.s)