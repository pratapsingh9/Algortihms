#include <bits/stdc++.h>
using namespace std;

int countinversion(int *arr, int n)
{
    int count = 0;
    for (int i = 0; i < n; ++i){
        for (int j = 0; j < n; ++j){
            if (arr[i] > arr[j]){
                ++count;
            }
        }
    }
    return count;
}

int main()
{
    cout << "hello world" << endl;
    int myarr[5] = {5,4,3,2,1};
    int length = sizeof(myarr)/sizeof(myarr[0]);
    int ans = countinversion(myarr , length);
    cout << ans << endl;
    return 0;
}