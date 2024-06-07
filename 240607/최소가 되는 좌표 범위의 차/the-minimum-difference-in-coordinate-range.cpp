#include <iostream>
#include <map>
#include <algorithm>
#include <climits>

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
    int x_diff = INT_MAX;
    bool y_diff = true;

    for(auto it = m.begin(); it != m.end(); it++) {
        
        while(it2 != m.end()) {
            if(abs(it2->second - it->second) >= d) {
                x_diff = min(x_diff, abs(it2->first - it->first));
                break;
            }

            it2++;
        }
        
    }

    if(x_diff != INT_MAX)
        cout << x_diff;
    else
        cout << -1;
    return 0;
}