#include <iostream>
#include <unordered_map>
#include <string>
#include <cctype>

using namespace std;

int n, m;
unordered_map<string, int> un_m;
string sarr[100001];

bool isNumber(const string& str) {
  return str.find_first_not_of("0123456789") == string::npos;
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;

    for(int i = 1; i<=n; i++)
        cin >> sarr[i];

    for(int i = 1; i<=n; i++)
        un_m[sarr[i]] = i;

    for(int i = 1; i<=m; i++) {
        string tmp;
        cin >> tmp;

        if(isNumber(tmp)) {
            cout << sarr[stoi(tmp)] << endl;
        }
        else
            cout << un_m[tmp] << endl;
    }
    return 0;
}