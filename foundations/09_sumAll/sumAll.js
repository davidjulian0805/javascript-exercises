const sumAll = (a, b) => {

 if (isNaN(a) || isNaN(b) || a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return 'Error: Both inputs must be positive integers.';
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let sum = 0;
  
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  
  return sum;

};

console.log(sumAll(-1, 4));

// Do not edit below this line
module.exports = sumAll;
