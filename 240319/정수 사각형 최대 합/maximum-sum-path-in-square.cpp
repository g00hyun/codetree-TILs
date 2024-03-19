#include <iostream>
#include <algorithm>

using namespace std;

int n; 
int arr[100][100];
int dp[100][100];

void Initalization() {
    dp[0][0] = arr[0][0];
    for(int i = 1; i<n; i++)
        dp[i][0] = dp[i-1][0] + arr[i][0];

    for(int j = 1; j<n; j++)
        dp[0][j] = dp[0][j-1] + arr[0][j];
    
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<n; j++)
            cin >> arr[i][j];
    
    Initalization();

    for(int i = 1; i<n; i++)
        for(int j = 1; j<n; j++)
            dp[i][j] = arr[i][j] + max(dp[i][j-1], dp[i-1][j]);
    
    cout << dp[n-1][n-1];
    return 0;
}