def binarysearch(array, key, end, start=0):
    if len(array) == 0:
        return False
    if start > end:
        return
    mid = start + (end - start) / 2
    if array[mid] == key:
        return mid
    if array[mid] > key:
        return binarysearch(array, start, mid - 1, key)
    else:
        return binarysearch(array, mid + 1, end, key)


def printSubsequentstring(string, outputString, index, length):
    if index >= length:
        print(outputString)
        return

    # excluding the string
    printSubsequentstring(string, outputString, index + 1, length)
    outputString = outputString + string[index]
    printSubsequentstring(string, outputString, index + 1, length)


def substring(string, index, output, length):
    if index >= length:
        print(output)
        return

    substring(string, index + 1, output, length)
    output = output + string[index]
    substring(string, index + 1, output, length)



def fib(n):
    if n == 1:
        return 1
    if n == 2:
        return 2
    else:
        return fib(n - 1) + fib(n - 2)


def findmaxarray(array, index=0, sortedindex=1):
    if len(array) == 0:
        return -1
    if len(array) - 1 <= sortedindex:
        return True

    if array[index] < array[sortedindex]:
        return findmaxarray(array, index + 1, sortedindex + 1)
    else:
        return "array is not sorted"


def largestelement(array):
    if not array:
        return None

    maxindex = 0

    for i in range(0, len(array)):
        if array[i] >= maxindex:
            maxindex = i

    return array[maxindex]


array = [1, 2, 3, 4, 5, 6, 6.5, 8, 10]


def checknumneeds(n, target, callstack=None):
    if callstack is None:
        callstack = []
    if n >= target:
        return callstack
    else:
        callstack.append(n)
        return checknumneeds(n + 1, target, callstack)


def selectionsort(array):
    arrayLength = len(array)
    for i in range(0,arrayLength-1):
        index = i
        for j in range(i,arrayLength-1):
            secondindex = j
            if array[index] > array[secondindex]:
                index = secondindex
    if index != i:
        temp = array[index]
        array[index] = array[i]
        array[i] = temp
    return array
    



array = [3,6,2,1,8,7,4,5,3,1];


print(selectionsort(array))
    