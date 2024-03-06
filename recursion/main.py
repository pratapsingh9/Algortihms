def binarysearch(array,key,end,start=0):
    if len(array) == 0 :
        return False
    if start > end:
        return 
    mid = start + (end  - start) / 2
    if array[mid] == key:
        return mid
    if array[mid] > key:
        return binarysearch(array,start,mid-1,key)
    else:
        return binarysearch(array,mid+1,end,key)

def printSubsequentstring(string,outputString,index,length):
    if index >= length:
        print(outputString)
        return 
    
    #excluding the string 
    printSubsequentstring( string, outputString, index+1,length)
    outputString = outputString + string[index]
    printSubsequentstring(string,outputString,index+1,length)
    
# string = "pratapsinghsisodiya"
# length = len(string)
# outputstring = ""

# print(printSubsequentstring(string,outputstring,0,length))



def substring(string,index,output,length):
    if index >= length:
        print(output);
        return
    
    substring(string,index+1,output,length);
    output =  output + string[index]
    substring(string,index+1,output,length)
    
    
    
def fib(n):
    if n == 1:
        return 1
    if n == 2:
        return 2
    else:
        return fib(n-1) + fib(n-2) 


def encode(string):
    answer = string.encode

print(fib(34))

name = "pratap"
index = 0
output = ""
length = len(name)


# print(substring(name,index,output,length))