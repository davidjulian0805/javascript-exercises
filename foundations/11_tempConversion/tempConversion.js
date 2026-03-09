const convertToCelsius = (c1) =>  {
  const celciusConversion = (c1 - 32) * 5/9;
  return celciusConversion;

};


const convertToFahrenheit = (c2) => {
  const fahrenheitConversion = (c2 * 9/5) + 32;
  return fahrenheitConversion;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(32));

// Do not edit below this line
/*
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
*/