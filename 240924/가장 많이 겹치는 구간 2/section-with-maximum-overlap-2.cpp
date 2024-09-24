#include <iostream>
#include <algorithm>
#include <climits>
using namespace std;

int n;
int arr[100000001];
int endIdx = INT_MIN;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++) {
        int a,b;
        cin >> a >> b;

        arr[a]++, arr[b]--;
        endIdx = max(endIdx, b);
    }

    int count = 0;
    int result = 0;
    for(int i = 1; i<=endIdx; i++) {
        count += arr[i];
        result = max(result, count);
    }

    cout << result;

    return 0;
}