#include <iostream>

using namespace std;

int n;
long long dp[1001];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;

    dp[0] = 1;
    dp[1] = 2;
    for(int i = 2; i<=n; i++) {
        dp[i] = (2 * dp[i-1] + 3 * dp[i-2]) % 1000000007;
        for(int j = i-3; j>=0; j--)
            dp[i] = (dp[i] + dp[j] * 2) % 1000000007;
    }

    cout << dp[n];
    return 0;
}