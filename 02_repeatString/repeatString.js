const repeatString = function (input, num) {
	if (num === 0 || input === "") {
		return "";
	} else if (num < 0) {
		return "ERROR";
	} else {
		let repeatedString = input;
		for (let i = 1; i < num; i++) {
			repeatedString += input;
		}
		return repeatedString;
	}
};

// Do not edit below this line
module.exports = repeatString;
