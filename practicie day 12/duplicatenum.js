const arrays = [1,2,3,4,5];

const sorted = arrays.sort((a,b)  => a-b)


let sortedaryas = (arr,i=0) => {
    if(arr.length-1 <= i) {
        return true
    }

    if(arr[i] == arr[i+1]) {
        return false
    }
    else{
        return sortedaryas(arr,i+1)
    }
}

console.log(sortedaryas(arrays))