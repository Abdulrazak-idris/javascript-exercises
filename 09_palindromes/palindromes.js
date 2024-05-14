const palindromes = function (a) {
    let replacedWords = a.replace(/[,. " "]/g, "");
    let myElement = "";
    let length = replacedWords.length - 1;
    let punctuation = "";

        for (let i = length; i >= 0; i--) {
        if (replacedWords[i] === "!") {
            punctuation += replacedWords[i];
        } else {
            myElement += replacedWords[i];
        }
    }
    let result = myElement + punctuation;
        
        if (result.toUpperCase() === replacedWords.toUpperCase()) {
            return true;
        } else {
            return false
        }
}

// Do not edit below this line
module.exports = palindromes;
