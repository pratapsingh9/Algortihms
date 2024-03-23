
function solve(num, a, b, c) {
  //base case
  if (num == 0) {
    return 0;
  }
  if (num < 0) {
    return;
  }
  let ans1 = solve(num - a, a, b, c);
  let ans2 = solve(num - b, a, b, c);
  let ans3 = solve(num - c, a, b, c);

  let answer = Math.max(ans1, Math.max(ans2, ans3));
  return answer;
}

const FindDuplicateNumber = (array) => {
  let length = array.length;
  array.sort();

  for (let index = 0; index < array.length; index++) {
    if (array[index] == array[index + 1]) {
      return false
    }  
  }
  return true;
};

let array = [0,8,5345346,246,2]
console.log(FindDuplicateNumber(array))
