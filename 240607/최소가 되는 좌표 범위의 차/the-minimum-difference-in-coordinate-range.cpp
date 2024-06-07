#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
#include <set>

using namespace std;

int n,d;
vector<pair<int,int>> v;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> d;
    for(int i = 0; i<n; i++) {
        int x,y;
        cin >> x >> y;

        v.push_back(make_pair(x,y));
    }

    sort(v.begin(), v.end());

    int j = 0;
    int x_diff = INT_MAX;

    // int localMin, localMax;
    // localMin = localMax = v[0].second;
    set<int> s;
    
    for(int i = 0; i<n; i++) {
        
        while(j < n) {
            s.insert(v[j].second);
            
            if(*s.rbegin() - *s.begin() >= d) {
                x_diff = min(x_diff, abs(v[j].first - v[i].first));
                break;
            }

            j++;
        }

        s.erase(v[i].second);
        
    }

    if(x_diff != INT_MAX)
        cout << x_diff;
    else
        cout << -1;
    return 0;
}