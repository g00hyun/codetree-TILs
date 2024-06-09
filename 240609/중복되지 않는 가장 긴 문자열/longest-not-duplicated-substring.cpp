#include <iostream>
#include <algorithm>
#include <set>

using namespace std;

string s;
set<char> ss;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> s;

    int result = 0;
    int j = 0;
    for(int i = 0; i<s.size(); i++) {
        while(j<s.size() && ss.find(s[j]) == ss.end()) {
            ss.insert(s[j]);
            j++;
        }

        result = max(result, j-i);

        ss.erase(s[i]);
    }

    cout << result;
    return 0;
}