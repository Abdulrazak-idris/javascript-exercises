const sumAll = function (num, num2) {
  let total = 0;
  if (typeof num != "number" || typeof num2 != "number") {
    return "ERROR";
  } else if (num < 0 || num2 < 0) {
    return "ERROR";
  } else if (num <= num2) {
    for (let i = num; i <= num2; i++) {
      total += i;
    }
  } else {
    for (let i = num; i >= num2; i--) {
      total += i;
    }
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
