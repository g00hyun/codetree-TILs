#include <iostream>
#include <unordered_set>

using namespace std;

int n;
unordered_set<int> un_s;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++) {
        string s;
        int k;
        cin >> s >> k;

        if(s == "add") {
            un_s.insert(k);
        }

        if(s == "remove") {
            un_s.erase(k);
        }

        if(s == "find") {
            (un_s.find(k) != un_s.end()) ? cout << "true" :  cout << "false";
            cout << endl;
        }
    }
    return 0;
}