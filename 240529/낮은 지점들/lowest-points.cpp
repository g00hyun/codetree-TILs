#include <iostream>
#include <unordered_map>
#include <algorithm>

using namespace std;

int n;
unordered_map<int, int> un_m;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i= 0; i<n; i++) {
        int x, y;
        cin >> x >> y;

        if(un_m.find(x) == un_m.end())
            un_m[x] = y;
        else
            un_m[x] = min(un_m[x], y);
    }

    int result = 0;
    for(auto it = un_m.begin(); it != un_m.end(); it++) {
        result += it->second;
    }

    cout << result;

    return 0;
}