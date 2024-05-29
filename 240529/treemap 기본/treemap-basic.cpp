#include <iostream>
#include <map>

using namespace std;

int n;
map<int, int> m;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++) {
        string s;
        int k,v;
        cin >> s;

        if(s == "add") {
            cin >> k >> v;
            m[k] = v;
        }
        
        if(s == "find") {
            cin >> k;
            m.find(k) != m.end() ? cout << m[k] : cout << "None";
            cout << endl;
        }

        if(s == "remove") {
            cin >> k;
            m.erase(k);
        }

        if(s == "print_list") {
            if(m.begin() == m.end()) cout << "None";
            else
                for(auto it = m.begin(); it != m.end(); it++)
                    cout << it->second << ' ';
            cout << endl;
        }
    }
    return 0;
}