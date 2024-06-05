#include <iostream>
#include <algorithm>

using namespace std;

int n;
int arr[100000];
bool visited[100001];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++)
        cin >> arr[i];

    int result = 0;
    int j = 0;
    for(int i = 0; i<n; i++) {
        while(j < n && !visited[arr[j]]) {
            visited[arr[j]] = true;
            j++;
        }

        result = max(result, j - i);

        visited[arr[i]] = false;
    }

    cout << result;
    
    return 0;
}