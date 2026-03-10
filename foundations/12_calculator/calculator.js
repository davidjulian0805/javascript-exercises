const add = (num1, num2) => {
	return num1 + num2;
};

const subtract = (num1, num2) => {
	return num1 - num2;
};

const sum = (num1, num2) => {
	return num1 / num2;
};

const multiply = (num1, num2) =>{
return num1 * num2;
};

const power = (num1, num2) =>{
	return num1 ** num2;
};

const factorial = (n) => {
  if (n < 0) {
    return "Undefined"; 
  }
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i; 
  }
  return result;
};


console.log(add(5,4));
console.log(power(5,4));
console.log(factorial(6));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
