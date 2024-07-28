class WordCounter {
    static countWords(text: string): number {
        // Remove any leading/trailing whitespace and split the string by whitespace
        const words = text.trim().split(/\s+/);
        // Filter out any empty strings and return the length of the array
        return words.filter(word => word.length > 0).length;
    }
}

// Example usage:
const text1 = "Hello, this is a simple word counter.";
const text2 = "This is a test.";
const text3 = "   Leading and trailing spaces   should be ignored.   ";

console.log(`Text: "${text1}" has ${WordCounter.countWords(text1)} words.`);
console.log(`Text: "${text2}" has ${WordCounter.countWords(text2)} words.`);
console.log(`Text: "${text3}" has ${WordCounter.countWords(text3)} words.`);
