#include <bits/stdc++.h>
using namespace std;

int linearsearch(int *arr, int n, int target)
{
    for (int i = 0; i < n; i++)
    {
        if (arr[i] == target)
        {
            return i;
        }
    }
}

void insertionsort(int *array, int n)
{
    for (int index = 0; index < n; index++)
    {
        int currentIndex = array[index];
        int previouIndex = index - 1;
        while (previouIndex >= 0 && array[previouIndex] > currentIndex)
        {
            array[previouIndex + 1] = array[previouIndex];
            previouIndex--;
        }
        array[previouIndex + 1] = currentIndex;
    }
}
int selectionsort(int *arr, int length)
{
    for (int index = 0; index < length; index++)
    {
        int minimum = index;
        for (int secondindex = index + 1; secondindex < length; secondindex++)
        {
            int seconmin = secondindex;
            if (arr[minimum] > arr[seconmin])
            {
                seconmin = minimum;
            }
        }
        if (minimum != index)
        {
            int temp = arr[index];
            arr[index] = arr[minimum];
            arr[minimum] = temp;
        }
    }
}

void helloword()
{
    cout << "hello world guys" << endl;
}

bool palindrome(string input){
    string output = input;
    reverse(output.begin(),output.end());
    if(output == input) {
        return true;
    }
    else{
        return false;
    }

}

int bubblesort(int *arr, int n)
{
    for (int i = 0; i < n; i++)
    {
        /* code */
        for (int j = i + 1; j < n; j++)
        {
            /* code */
            if (arr[i] > arr[j])
            {
                swap(arr[i], arr[j]);
            }
        }
    }
}

int main()
{
    // cout << helloword << endl;
    helloword();
    return 0;
}
