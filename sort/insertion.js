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

const insetionsorts = (arrays) => {
    const length = arrays.length
    for(let index=0;index<length;index++ ) {
        let currentindex = index;
        let previousIndex = currentindex-1;
        while(previousIndex >= 0 && arrays[currentindex] > arrays[previousIndex]) {
            arrays[previousIndex+1] = arrays[previousIndex]
            previousIndex--
        }
        arrays[previousIndex+1] = arrays[currentindex]
    }
    return arrays
}
// const DesiInsertionSort = )=

const arrays = [0,345,35,35035,305,35353,50345,35345,345];

console.log(insetionsorts(arrays))

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



