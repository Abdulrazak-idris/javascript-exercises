const reverseString = function (word) {
	let text = "";
	for (let i = 1; i <= word.length; i++) {
		text += word.substr(word.length - i, 1);
	}
	return text;
};

// Do not edit below this line
module.exports = reverseString;
