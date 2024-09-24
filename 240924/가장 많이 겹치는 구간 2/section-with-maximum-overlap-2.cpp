#include <iostream>
#include <algorithm>
#include <climits>
#include <map>
using namespace std;

int n;
int arr[100000001];
int endIdx = INT_MIN;
map<int, int> m;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++) {
        int a,b;
        cin >> a >> b;

        m[a]++, m[b]--;
        endIdx = max(endIdx, b);
    }

    int count = 0;
    int result = 0;
    for(auto i : m) {
        count += i.second;
        result = max(result, count);
    }

    cout << result;

    return 0;
}