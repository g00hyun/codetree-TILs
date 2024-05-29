#include <iostream>
#include <map>

using namespace std;

int n;
map<int, int> m;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++) {
        int tmp;
        cin >> tmp;
        
        if(m.find(tmp) == m.end())
            m[tmp] = i+1;
    }

    for(auto it = m.begin(); it != m.end(); it++) {
        cout << it->first << ' ' << it->second << endl;
    }
    return 0;
}