#include <iostream>
#include <algorithm>
#include <climits>

using namespace std;

int n,s;
int arr[100000];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> s;
    for(int i = 0; i<n; i++)
        cin >> arr[i];
    
    int sum = 0;
    int result = INT_MAX;
    int j = 0;
    for(int i = 0; i<n; i++) {
        while(j < n && sum+arr[j] < s) {
            sum += arr[j];
            j++;
        }
        // cout << j << ' ';

        result = min(result, j - i + 1);

        sum -= arr[i];
    }

    cout << result;
    return 0;
}