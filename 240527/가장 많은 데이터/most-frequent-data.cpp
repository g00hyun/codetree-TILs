#include <iostream>
#include <unordered_map>
#include <string>
#include <algorithm>

using namespace std;

int n;
unordered_map<string,int> un_m;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;

    int maximum = 0;
    for(int i = 0; i<n; i++) {
        string s;
        cin >> s;
        // un_m[s]++;
        
        maximum = max(maximum, ++un_m[s]);
    }

    cout << maximum;
    return 0;
}