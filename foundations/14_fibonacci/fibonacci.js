const fibonacci = function(fib) {
 if(fib <=1) return fib;

   let prev = 0, curr = 1;
  for (let i = 2; i <= fib; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
};

console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;
