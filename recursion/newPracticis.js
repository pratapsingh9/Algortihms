const { normalizeConfig } = require("next/dist/server/config");
const { renderToHTML } = require("next/dist/server/render");

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

let left = "(";
let right = ")";

const leapyearcheck = (array, length, object, index = 0) => {
  if (index > length - 1) {
    return;
  }
};
