const insetionSort = (array) => {
    for(let index = 0 ; index < array.length; index++) {
        let current = array[index];
        let previousIndex = index-1;
        while(previousIndex >= 0 && array[previousIndex] > current) {
            array[previousIndex+1] = array[previousIndex]
            previousIndex--;
        }
        array[previousIndex+1] = current
    }
    return array
}
const array1 = [10,5,6,6,9,5,6]

console.log(insetionSort(array1));


const InsertionSorting = (array) =>{
    const length = array.length;
    for(let index = 0; index < array.length; index++) {
        let current= index;
        let previous = index-1;
        while(previous >= 0  && array[previous] > array[current]) {
            array[previous+1] = array[previous]
            previous--;
        }
        array[previous+1] = array[current]
    }
    return array;
}
console.log(InsertionSorting(array1));
const insetionSortDescending = (array) => {
    for (let index = 0; index < array.length; index++) {
        let currenindex = array[index];
        let previousIndex = index-1;
        while(previousIndex >= 0 && array[previousIndex] < currenindex) {
            array[previousIndex+1]  = array[previousIndex];
            previousIndex--;
        }
        array[previousIndex+1] = currenindex;
    }
    return array;
}

const array = [50,500,150,200];
console.log(InsertionSorting(array));
console.log(insetionSort(array));


