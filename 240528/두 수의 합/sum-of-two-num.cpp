#include <iostream>
#include <unordered_map>
#include <algorithm>

using namespace std;

unordered_map<int, int> un_m;
int n,k;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> k;
    for(int i = 0; i<n; i++) {
        int tmp;
        cin >> tmp;

        un_m[tmp]++;
    }

    int result = 0;
    for(auto it = un_m.begin(); it != un_m.end(); it++) {
        int v1 = it->first;
        int v2 = k - v1;

        if(v1 == v2)
            result += it->second * (it->second -1);
        else if(un_m.find(v2) != un_m.end())
            result += it->second * un_m[v2];
    }
    
    cout << result/2;
    return 0;
}