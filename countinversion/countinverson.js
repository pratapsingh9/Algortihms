



const countinversion = (arr) => {
    const length = arr.length;
    let count  = 0;
    for(let i =0; i <  length; i++) {
        for(let j = i+1; j< length; j++) {
            if(arr[i] > arr[j]) {
                if(j > i) {
                    count+1;
                }
            }
        }
    }
} 
const arrays = [4,3,2,1]

console.log(countinversion(arrays));