#include <iostream>

using namespace std;

int n;
int dp[1001];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;

    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    for(int i = 4; i<=n; i++)
        dp[i] = (dp[i-2] + dp[i-1]) % 10007;
    
    cout << dp[n];
    return 0;
}