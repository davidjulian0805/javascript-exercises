const repeatString = function(words, times) {

   if (times < 0) return 'ERROR';
   let result = "";
   for (let i = 0; i < times; i++){
    result += words;
   }
   return result;

};

console.log(repeatString('hey', 0));  

// Do not edit below this line
module.exports = repeatString;