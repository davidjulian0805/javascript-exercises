const reverseString = function(string) {


    const words = string.split(' ');

    const reversedWords = words.map(word => {

        return word.split('').reverse().join('');
        
    });

    const output = reversedWords.join(' ');

    return output;
};

console.log(reverseString('Hello World'));

// Do not edit below this line
module.exports = reverseString;
