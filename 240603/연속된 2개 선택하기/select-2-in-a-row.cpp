#include <iostream>
#include <algorithm>

using namespace std;

int n;
int arr[10001];
int dp[10001];
int accum[10001];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 1; i<=n; i++)
        cin >> arr[i];

    dp[1] = arr[1];
    accum[1] = 1;
    for(int i = 2; i<=n; i++) {
        if (accum[i-1] == 2) {
            int val1 = dp[i-1];
            int val2 = dp[i-2] + arr[i];

            dp[i] = max(val1, val2);
            accum[i] = (val1 > val2) ? 0 : 1;
        }
        else {
            dp[i] = dp[i-1] + arr[i];
            accum[i] = accum[i-1] + 1;
        }
    }

    cout << dp[n];
    
    return 0;
}