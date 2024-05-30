#include <iostream>
#include <unordered_set>

using namespace std;

int n,m;
unordered_set<int> s1;
unordered_set<int> s2;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++) {
        int tmp;
        cin >> tmp;

        s1.insert(tmp);
    }

    cin >> m;
    int arr[m] = {0,};
    for(int i = 0; i<m; i++) {
        cin >> arr[i];
    }

    for(int i : arr) {
        if(s1.find(i) != s1.end())
            cout << 1 << ' ';
        else
            cout << 0 << ' ';
    }
    return 0;
}