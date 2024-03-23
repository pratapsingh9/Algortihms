function lastoccur(string, target) {
  let length = string.length;
  for (let i = length - 1; i > 0; i--) {
    if (target == string[i]) {
      return "target finded at " + i;
    }
  }
  return string;
}



const lastword = (
  string,
  target,
  length = string.length - 1,
  index = length,
  lastIndex
) => {
  if (index < 0) {
    return lastIndex;
  }
  if (string[index] == target) {
    lastIndex = index;
    return lastword(string, target, length, index - 1, lastIndex);
  } else {
    return lastword(string, target, length, index - 1, lastIndex);
  }
};
//chekc inpnut where things can come so much as yoiu knwo where we knoe wthi slike if we need such 468498
const string = "pratapsinghsisodiya";
let length = string.length;
const target = "s";

console.log(lastword(string, target))

