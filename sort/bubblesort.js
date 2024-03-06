const { MiddlewareNotFoundError } = require("next/dist/shared/lib/utils");

const array = [3,6,2,1,8,7,4,5,3,1];



const BubbleSortAccesnding = (array) => {
    let len = array.length;
    for (let index = 0; index < array.length; index++) {
        for (let secondindex = index + 1; secondindex < array.length; secondindex++) {
            if(array[index] > array[secondindex]) {
                let temp = array[index];
                array[index] = array[secondindex];
                array[secondindex] = temp;
            }
        }
    }
    return array;
}

const bubblesortdecesending = (array) => {
    let len = array.length;
    for (let index = 0; index < array.length; index++) {
        for (let secondindex = index + 1; secondindex < array.length; secondindex++) {
            if(array[index] < array[secondindex]) {
                let temp = array[index];
                array[index] = array[secondindex];
                array[secondindex] = temp;
            }
        }
    }
    return array;
}

console.log(bubblesortdecesending(array));
console.log(BubbleSortAccesnding(array));


module.exports = {
    BubbleSortAccesnding
}