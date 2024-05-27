#include <iostream>
#include <unordered_map>
#include <string>

using namespace std;

unordered_map<int, int> m;
int n;
string s;
int k,v;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++) {
        cin >> s;

        if(s == "add") {
            cin >> k >> v;
            m[k] = v;
        }

        if(s == "find") {
            cin >> k;
            if(m.find(k) != m.end())
                cout << m[k] << endl;
            else
                cout << "None" << endl;
        }

        if(s == "remove") {
            cin >> k;
            m.erase(k);
        }
    }
    return 0;
}