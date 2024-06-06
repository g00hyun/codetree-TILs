#include <iostream>
#include <algorithm>
#include <climits>

using namespace std;

int n;
int arr[100000];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++)
        cin >> arr[i];

    sort(arr, arr+n);

    int j = n-1;
    int result = INT_MAX;
    for(int i = 0; i<n; i++) {
        while(j >= 0 && result >= abs(arr[j] + arr[i])) {
            result = min(result, abs(arr[j] + arr[i]));
            j--;
        }
    }

    cout << result;
    return 0;
}