const BinarySearcRecursion = (array,starting,ending,key) => {
  if(starting>=ending) {
    return ;
  }
  let mid = starting + (ending - starting) / 2;
  if(arr[mid] == key) {
    return mid;
  } 

}