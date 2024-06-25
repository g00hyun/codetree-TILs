class Agent {
    constructor(secretCode, meetingArea, time) {
        this.secretCode = secretCode;
        this.meetingArea = meetingArea;
        this.time = time;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
const [a,b,c] = input;

const agent1 = new Agent(a,b,c);

console.log(`secret code : ${agent1.secretCode}
meeting point : ${agent1.meetingArea}
time : ${agent1.time}`)