#include <iostream>

using namespace std;

int n,m;
int arr1[100000];
int arr2[100000];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;
    for(int i = 0; i<n; i++)
        cin >> arr1[i];
    for(int i = 0; i<m; i++) 
        cin >> arr2[i];

    int j = 0;
    for(int i = 0; i<m; i++) {
        while(j < n && arr1[j] != arr2[i]) {
            j++;
        }
        if(arr1[j] == arr2[i])
            arr2[i] = -1;
    }

    bool isSub = true;
    for(int i = 0; i<m; i++)
        if(arr2[i] != -1)
            isSub = false;
    
    isSub ? cout << "Yes" : cout << "No";
    return 0;
}