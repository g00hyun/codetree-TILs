#include <iostream>
#include <algorithm>

using namespace std;

int n;
int dp[1001];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;

    dp[2] = 1;
    dp[3] = 1;
    dp[4] = 1;
    for(int i = 5; i<=n; i++) {
        dp[i] = (dp[i-2] + dp[i-3]) % 10007;
    }

    cout << dp[n];
    return 0;
}