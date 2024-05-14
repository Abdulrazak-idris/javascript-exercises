const add = function (a, b) {
  return Number(a) + Number(b);
};

const subtract = function (a, b) {
  return Number(a) - Number(b);
};

const sum = function (arr) {
  return arr.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, currentValue) => total * currentValue, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let factorial = 1;
  while (n > 1) {
    factorial *= n;
    n--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
