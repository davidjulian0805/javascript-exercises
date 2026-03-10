const palindromes =  (pal) => {
 const cleanedStr = pal.toLowerCase().replace(/[^a-z0-9]/g, '');
  

  const reversedStr = cleanedStr.split('').reverse().join('');
  
  
  return cleanedStr === reversedStr;
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
