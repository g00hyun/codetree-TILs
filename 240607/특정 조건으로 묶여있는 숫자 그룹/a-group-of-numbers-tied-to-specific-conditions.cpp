#include <iostream>
#include <algorithm>
#include <map>

using namespace std;

int n,k;
int arr[50000];
map<int,int> m;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> k;
    for(int i = 0; i<n; i++)
        cin >> arr[i];

    sort(arr, arr+n);

    int j = 0;
    int cnt = 0;
    for(int i = 0; i<n; i++) {
        while(j < n && arr[j] - arr[i] <= k) {
            j++;
        }

        if(i < j)
            m[j-i]++;
    }

    auto it = m.end();
    it--;
    
    int result = 0;
    if(it->second == 1) {
        result += it->first;
        it--;
        result += it->first;
    }
    else {
        result += 2*(it->first);
    }

    cout << result;

    return 0;
}