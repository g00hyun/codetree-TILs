const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const [n,m] = input[0].split(' ').map(Number)
const ladder = input.slice(1).map(v => v.split(' ').map(Number)).sort((a,b) => {
    if(a[1] !== b[1]) return a[1] - b[1]
    else a[0] - b[0]
})
const isPass = []

const UsingLadder = () => isPass.filter(v => v === true).length

const Play = (isInit = false) => {
    const result = []

    for(let i = 1; i<=n; i++) {
        let now = i;
        // console.log(`Let's Go => [${now}]`)
        
        for(let j = 0; j<m; j++) {
            if(!isInit && !isPass[j]) continue

            if(ladder[j][0] === now) {
                // console.log(`moved : ${now} -> ${now+1}`)
                now++
                continue
            }

            if(ladder[j][0] + 1 === now) {
                // console.log(`moved : ${now} -> ${now-1}`)
                now--
                continue
            }
        }

        result.push(now)
    }

    return result
}

const Backtracking = () => {
    if(isPass.length === m) {
        const curResult = Play()
        if(initResult.join('') === curResult.join(''))
            result = Math.min(result, UsingLadder())
        return
    }
    isPass.push(true)
    Backtracking()
    isPass.pop()

    isPass.push(false)
    Backtracking()
    isPass.pop()
}

const initResult = Play(true);
let result = 15
Backtracking()
console.log(result)
