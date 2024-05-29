#include <iostream>
#include <map>

using namespace std;

int n;
map<string, int> m;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++) {
        string s;
        cin >> s;

        m[s]++;
    }

    for(auto it = m.begin(); it != m.end(); it++)
        cout << it->first << ' ' << it->second << endl;
    return 0;
}