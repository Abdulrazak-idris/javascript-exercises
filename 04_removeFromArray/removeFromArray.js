const removeFromArray = function (array, num, num2, num3, num4) {
  let newArray = [];
  for (const item of array) {
    if (item === num || item === num2 || item === num3 || item === num4) {
      continue;
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
