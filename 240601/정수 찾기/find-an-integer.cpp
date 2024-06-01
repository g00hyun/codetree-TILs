#include <iostream>
#include <unordered_set>

using namespace std;

int n,m;
unordered_set<int> s;
int arr[100000];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++) {
        int tmp;
        cin >> tmp;

        s.insert(tmp);
    }
    cin >> m;
    for(int i = 0; i<m; i++)
        cin >> arr[i];

    for(int i = 0; i<m; i++)
        s.find(arr[i]) != s.end() ? cout << 1 << endl : cout << 0 << endl;

    return 0;
}