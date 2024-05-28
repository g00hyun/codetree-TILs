#include <iostream>
#include <unordered_map>
#include <algorithm>
#include <vector>

using namespace std;

unordered_map<int, int> un_m;
int n, k;
int maximum = 0;
vector<int> v;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> k;
    for(int i = 0; i<n; i++) {
        int tmp;
        cin >> tmp;

        maximum = max(maximum, ++un_m[tmp]);
    }

    while(k--) {
        for(auto it = un_m.begin(); it != un_m.end(); it++) {
            if(maximum == it->second) {
                v.push_back(it->first);
                un_m.erase(it->first);
                break;
            }
        }
    }

    for(auto i : v)
        cout << i << ' ';
    return 0;
}