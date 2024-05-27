#include <iostream>
#include <unordered_map>

using namespace std;

unordered_map<int, int> un_m;

int n, m;
int arr[100000];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;
    for(int i = 0; i < n; i++) {
        int tmp;
        cin >> tmp;
        un_m[tmp]++;
    }

    for(int i = 0; i<m; i++) {
        int tmp;
        cin >> tmp;
        cout << un_m[tmp] << ' ';
    }
    return 0;
}