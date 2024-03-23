def checkinversion(array,number):
    count = 0
    for i in range(number):
        for j in range(i+1,number):
            count += 1
    return count



number = [3,2,1]

print(checkinversion(number,len(number)))

print(number[::1])


def mergesort(arr):
    if len(arr) > 1:
        mid = len(arr) / 2
        left = arr[:mid]
        right = arr[mid:]

        mergesort(left)
        mergesort(right)

        i = j = k = 0

        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                arr[k] = arr[i]
                i += 1
            else:
                arr[k] = arr[j]
                j += 1
            k += 1

        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1

        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1

    return arr


arr = [234,256,25,23,1613,56,51]

mergesort(arr)

print(sortedaray)