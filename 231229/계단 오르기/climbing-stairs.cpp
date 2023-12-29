#include <iostream>
#include <algorithm>

using namespace std;

int n;
int dp[1001];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;

    dp[0] = 0;
    dp[1] = 0;
    dp[2] = 1;
    dp[3] = 1;
    for(int i = 4; i<=n; i++) {
        if(dp[i-2] != 0)
            dp[i] += dp[i-2];
        if(dp[i-3] != 0)
            dp[i] += dp[i-3];
        dp[i] %= 10007;
    }
    
    cout << dp[n];
    return 0;
}