const leapYears = (lYear) => {
 const isYearDivBy4 = lYear % 4;
 const isCentury = lYear % 100 === 0;
  const isYearDivisibleByFourHundred = lYear % 400 === 0;


  if(
   isYearDivBy4 
  ) {
    return console.log(`Your year is leap year`);
   
  }
  else{
  return console.log(`Your year is not leap year`);
  
  }
};

console.log(leapYears(2032));

// Do not edit below this line
module.exports = leapYears;
