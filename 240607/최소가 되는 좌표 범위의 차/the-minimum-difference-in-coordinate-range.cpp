#include <iostream>
#include <map>
#include <algorithm>

using namespace std;

int n,d;
map<int,int> m;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> d;
    for(int i = 0; i<n; i++) {
        int x,y;
        cin >> x >> y;

        m[x] = y;
    }

    auto it2 = m.begin();
    int x_diff = (++it2)->first - (--it2)->first;
    
    for(auto it = m.begin(); it != m.end(); it++) {
        while(it2 != m.end() && abs(it->second - it2->second) < d) {
            if(it != it2)
                x_diff = min(x_diff, it2->first - it->first);
            it2++;
        }
    }

    cout << x_diff;
    return 0;
}