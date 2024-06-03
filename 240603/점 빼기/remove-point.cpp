#include <iostream>
#include <set>
#include <utility>

using namespace std;

int n,m;
set<pair<int,int>> s;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;

    while(n--) {
        int x,y;
        cin >> x >> y;

        s.insert(make_pair(x,y));
    }

    while(m--) {
        int x;
        cin >> x;

        auto it = s.lower_bound(make_pair(x,1));
        if(it != s.end()) {
            cout << it->first << ' ' << it->second << endl;
            s.erase(make_pair(it->first, it->second));
        }
        else
            cout << -1 << ' ' << -1 << endl;
        
    }
    return 0;
}