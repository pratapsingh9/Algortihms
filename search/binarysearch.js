const array = [10,20,30,40,50,60,80,90,100,110];
const BinarySearcy = (array,target) => {
    const length = array.length;
    let len = array.length;
    if(len % 2 == 0) {
        len = len / 2 + 1
    }
    else if (len % 2 !== 0 ){
        len = len / 2
    }
    for(let index = 0; index  < length; index++) {
        while(array[index] !== target) {

        }
    }
}
const ch = BinarySearcy(array , 60)
console.log(ch);
