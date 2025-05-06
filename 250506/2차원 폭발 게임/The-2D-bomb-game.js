const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const numbers2d = input.slice(1, Number(n) + 1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
const interval = Array(n).fill(-1);
const nextArr = Array(n).fill().map(v => Array(n).fill(0));

const InitInterval = () => {
    for(let i = 0; i<n; i++)
        interval[i] = -1;
}

const InitNextArr = () => {
    for(let i = 0; i<n; i++)    
        for(let j = 0; j<n; j++)
            nextArr[i][j] = 0;
}

const Numbers2dFromNextArr = () => {
    for(let i = 0; i<n; i++)    
        for(let j = 0; j<n; j++)
            numbers2d[i][j] = nextArr[i][j];
}

// O(n^3) => O(n^2)
// s와 e는 증가하는 방향으로 진행되기에 for + while은 제곱연산이 수행되지 않음
const Eliminate = () => {
    // 터진 흔적이 있는지 없는지 판별
    let isBoom = false;

    for(let j = 0; j<n; j++) {
        InitInterval();

        let s = -1;
        for(let e = 0; e<n; e++) {
            while(s<n && numbers2d[e][j] !== numbers2d[s+1][j])
                s++;
            
            const size = e - s;
            if(size >= m && numbers2d[e][j] !== 0)
                interval[s+1] = e;
        }

        // 위 연산도 중복해서 연산하는 과정이 없음
        for(let i = 0; i<n; i++)
            if(interval[i] !== -1)
                for(let a = i; a <= interval[i]; a++)
                    numbers2d[a][j] = 0;

        if(interval.some(v => v !== -1))
            isBoom = true;
    }

    return isBoom;
}

// O(n^2)
const Gravitiy = () => {
    InitNextArr();

    for(let j = 0; j<n; j++) {
        const tmp = [];
        for(let i = 0; i<n; i++) {
            if(numbers2d[i][j] !== 0)
                tmp.push(numbers2d[i][j]);
        }

        let tmpSize = tmp.length;
        let xindex = n-1;
        while(tmpSize--) {
            nextArr[xindex--][j] = tmp.pop();
        }
    }

    Numbers2dFromNextArr();
}

// O(n^2)
const ForwardRotation90 = () => {
    InitNextArr();

    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            nextArr[i][j] = numbers2d[n-1-j][i];

    Numbers2dFromNextArr();
}

// 만약, 터진 이후에도 같은 열에 행 기준으로 봤을 때 연속으로 M개 이상의 같은 숫자가 있는 경우
// 터져야 할 폭탄이 없을 때 까지 조건에 맞게 폭탄을 터트리는 것을 반복
// O((n^3 + n^2 + n^3 + n^2) * n/2) => O(n^4)
// const LoopEliminate = () => {
//     while(1) {
//         // M개 이상 연결된 경우 폭파
//         Eliminate();

//         // 중력 적용
//         Gravitiy();

//         // 터지고 남은 갯수
//         const curr = numbers2d.map(CountArrByEliminateZeroValue).reduce((a,b) => a+b);

//         // M개 이상 연결된 경우 폭파
//         Eliminate();

//         // 중력 적용
//         Gravitiy();

//         // 한번 더 터지고 남은 갯수
//         const next = numbers2d.map(CountArrByEliminateZeroValue).reduce((a,b) => a+b);

//         if(curr === next) break;
//     }
// }

// 만약, 터진 이후에도 같은 열에 행 기준으로 봤을 때 연속으로 M개 이상의 같은 숫자가 있는 경우
// 터져야 할 폭탄이 없을 때 까지 조건에 맞게 폭탄을 터트리는 것을 반복
const LoopEliminate = () => {
    while(1) {
        // M개 이상 연결된 경우 폭파
        if(!Eliminate()) break;

        // 중력 적용
        Gravitiy();
    }
}

const Turn = () => {
    // 시계방향 90 회전
    ForwardRotation90();

    // 중력 적용
    Gravitiy();
}

const ZeroFilter = (v) => v !== 0;
const CountArrByEliminateZeroValue = (v) => v.filter(ZeroFilter).length;

// O(n^4 * k)
const Solution = (k) => {
    // k번 동안 반복
    // O(k)
    while(k--) {
        // O(n^4)
        LoopEliminate();

        // console.log(`###[Start]#######`)
        // numbers2d.forEach(v => console.log(v.join(' ')))
        // console.log();

        // O(n^2)
        Turn();

        // numbers2d.forEach(v => console.log(v.join(' ')))
        // console.log(`###[End]#######`)
        // console.log()
    }

    // 회전 이후에도 터질게 남아있다면 마지막으로 터트리기
    LoopEliminate();

    // 남은 갯수 출력
    console.log(numbers2d.map(CountArrByEliminateZeroValue).reduce((a,b) => a+b))
}

Solution(k);
