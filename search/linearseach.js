const array = [10,50,6,0,40,850,456,0,8,50,4,84];


const LinearSearch = (array , target) => {
    let len = array.length;
    for (let index = 0; index < array.length; index++) {
        console.log(array[index])
    }
    for (let index = 0; index < array.length; index++) {
        if(array[index]==target) {
            return `value is at ${index + 1} place`
        }
    }
}


console.log
console.log(LinearSearch(array ,50));