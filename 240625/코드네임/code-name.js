class Agent {
    constructor(name = null, score = 0) {
        this.name = name;
        this.score = score;
    }
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let agents = Array(5).fill(new Agent());

let idx = 0;
input.split('\n').map((s) => {
    const [a,b] = s.split(' ');

    agents[idx] = new Agent(a,b);

    idx++;
})

agents.sort((a,b) => {
    return a.score - b.score;
})

console.log(agents[0].name, agents[0].score);