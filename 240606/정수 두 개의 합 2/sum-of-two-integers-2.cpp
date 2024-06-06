#include <iostream>
#include <algorithm>

using namespace std;

int n, m;
int arr[100000];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;
    for(int i = 0; i<n; i++)
        cin >> arr[i];

    sort(arr, arr+n);

    // 중간으로 투포인터 모음
    int i, j;

    i = 0, j = n-1;

    int cnt = 0;
    while(i < j) {
        while(j > i && arr[i] + arr[j] > m) {
            j--;
        }

        cnt += j-i;

        i++;
    }

    cout << cnt;

    return 0;
}