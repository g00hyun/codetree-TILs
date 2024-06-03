#include <iostream>
#include <set>

using namespace std;

int n, m;
set<int> s;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;

    for(int i = 0; i<n; i++) {
        int tmp;
        cin >> tmp;

        s.insert(tmp);
    }

    for(int i = 0; i<m; i++) {
        int tmp;
        cin >> tmp;

        if(s.lower_bound(tmp) != s.end())
            cout << *s.lower_bound(tmp) << endl;
        else
            cout << -1 << endl;
    }

    return 0;
}