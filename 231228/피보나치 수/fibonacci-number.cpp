#include <iostream>
#include <cstring>

using namespace std;

// tabluation

// int n;
// int dp[46];

// int main() {
//     // 여기에 코드를 작성해주세요.
//     cin >> n;

//     dp[1] = dp[2] = 1;
//     for(int i = 3; i<=n; i++)
//         dp[i] = dp[i-1] + dp[i-2];
    
//     cout << dp[n];
//     return 0;
// }

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//memoization

int n;
int memo[46];

int recursive(int val) {
    if(memo[val] != -1) return memo[val];

    if(val <= 2) memo[val] = 1;
    else memo[val] = recursive(val-1) + recursive(val-2);

    return memo[val];
}

int main() {
    cin >> n;

    memset(memo, -1, sizeof(int) * (n+1));

    recursive(n);

    cout << memo[n];
}