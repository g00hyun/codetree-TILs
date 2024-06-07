#include <iostream>
#include <algorithm>

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
    int result = abs(arr[0] + arr[n-1]);
    for(int i = 0; i<n; i++) {
        while(i < j && arr[i] + arr[j] >= 0) {
            result = min(result, abs(arr[i] + arr[j]));
            j--;
        }

        if(i != j)
            result = min(result, abs(arr[i] + arr[j]));
    }

    cout << result;
    return 0;
}