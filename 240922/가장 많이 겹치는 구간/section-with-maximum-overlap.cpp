#include <iostream>
#include <algorithm>
using namespace std;

int n;
int check[200001];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;

    int finishIdx = 0;
    while(n--) {
        int a, b;
        cin >> a >> b;

        finishIdx = max(finishIdx, b);

        check[a]++;
        check[b]--;
    }

    int now = 0;
    int result = 0;
    for(int i = 1; i<=finishIdx; i++) {
        now += check[i];
        result = max(result, now);
    }

    cout << result;
    return 0;
}