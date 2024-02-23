const Insetion = (array) => {
    for (let index = 0; index < array.length; index++) {
        let current  = index;
        let previous = index - 1;
        while(previous >=0 && array[previous] > array[current]) {
            array[previous + 1] = array[previous];
            previous--;
        }
        array[previous + 1 ] = array[current];
    }
    return array;
}

const insetsorters = (arr) => {
    let len = arr.length;
    for(let i = 0; i<len; i++) {
        let cur = i;
        let prev = i-1;
        while(prev >= 0 && arr[prev] > arr[cur]) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = arr[cur];
    }
    return arr;
}

const insertionSortList = function(head) {
    const len = head.length;
    for(let i  = 0 ; i< len; i++) {
        let curr = i;
        let prev = i-1;
        while(prev >= 0 && head[prev]>head[curr]){
            head[prev+1] = head[prev];
            prev--;
        }
        head[prev + 1 ] = head[curr]
    }
    return head;
};

const data  = [10,5,6,56,45,4,4,651,6];


console.log(insertionSortList(data));