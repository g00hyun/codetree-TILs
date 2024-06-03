#include <iostream>
#include <set>
#include <utility>

using namespace std;

int n,m;
set<pair<int,int>> s;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;

    for(int i = 0; i<n; i++) {
        int x,y;
        cin >> x >> y;

        s.insert(make_pair(x,y));
    }

    for(int i = 0; i<m; i++) {
        int x,y;
        cin >> x >> y;

        pair<int,int> tmp = make_pair(x,y);
        if(s.lower_bound(tmp) != s.end())
            cout << (*s.lower_bound(tmp)).first << ' ' << (*s.lower_bound(tmp)).second << endl;
        else
            cout << -1 << ' ' << -1 << endl;
    }
    return 0;
}