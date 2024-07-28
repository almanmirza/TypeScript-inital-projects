var WordCounter = /** @class */ (function () {
    function WordCounter() {
    }
    WordCounter.countWords = function (text) {
        // Remove any leading/trailing whitespace and split the string by whitespace
        var words = text.trim().split(/\s+/);
        // Filter out any empty strings and return the length of the array
        return words.filter(function (word) { return word.length > 0; }).length;
    };
    return WordCounter;
}());
// Example usage:
var text1 = "Hello, this is a simple word counter.";
var text2 = "This is a test.";
var text3 = "   Leading and trailing spaces   should be ignored.   ";
console.log("Text: \"".concat(text1, "\" has ").concat(WordCounter.countWords(text1), " words."));
console.log("Text: \"".concat(text2, "\" has ").concat(WordCounter.countWords(text2), " words."));
console.log("Text: \"".concat(text3, "\" has ").concat(WordCounter.countWords(text3), " words."));
