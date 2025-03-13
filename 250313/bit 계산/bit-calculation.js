class Set {
    constructor() {
        this.s = 0;
    }

    add(x) {
        this.s = this.s + (1 << x);
    }

    del(x) {
        if((this.s >> x) & 1)
            this.s = this.s ^ (1 << x);
    }

    print(x) {
        console.log((this.s >> x) & 1)
    }

    toggle(x) {
        this.s = this.s ^ (1 << x);

    }

    clear() {
        this.s = 0;
    }
}
const S = new Set();

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const q = Number(input[0]);
let idx = 1;
for (let i = 0; i < q; i++) {
    const [command, num] = input[idx++].split(" ");
    const x = num !== undefined ? Number(num) : undefined;
    
    // Please Write your code here.
    if(command === 'add') S.add(x)
    else if(command === 'delete') S.del(x)
    else if(command === 'print') S.print(x)
    else if(command === 'toggle') S.toggle(x)
    else S.clear()
}