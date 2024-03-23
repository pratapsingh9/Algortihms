

const printint = (num, start = 0, newString = []) => {
  if (num.length > start) {
  if (num.length == start) {
      console.log(num[start]);
      newString.push(num[start]);
    }
    console.log(num[start]);
    newString.push(num[start]);
    return printint(num, start + 1);
  }
};
const search = (num, i = 0) => {
  if (num.length <= i) {
    return null;
  } 
  console.log(num[i]);
  return search(num, ++i);
};

const searchSecond = (num, i = 0, n) => {
  if (n == 0) {
    return;
  }
  console.log(num[i]);
  return searchSecond(num, i + 1, n - 1);
};


const Checknumber =  (array,number,integere) => {
  if (!array) {
    return 'enter the array and other things'
  }

}


let left = "(";
let right = ")";
const leapyearcheck = (year) => {
  if(year == null) {
    return ' backchodhi mat kar lwde'
  }
  else{
    if(year % 2 == 0) {
      if(year % 4 == 0) {
        return true
      }
    }
    else{
      return false
    }
  }
}

console.log(leapyearcheck(2024))