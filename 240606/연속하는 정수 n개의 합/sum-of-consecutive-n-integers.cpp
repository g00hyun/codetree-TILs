#include <iostream>
#include <algorithm>

using namespace std;

int n,m;
int arr[100000];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;
    for(int i = 0; i<n; i++)
        cin >> arr[i];
    
    int result = 0;
    int sum = 0;
    int j = 0;
    for(int i = 0; i<n; i++) {
        while(j<n && sum+arr[j] <= m) {
            sum += arr[j];
            j++;
        }

        if(sum == m)
            result++;
        
        sum -= arr[i];
    }

    cout << result;
    return 0;
}