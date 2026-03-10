const people = [
  { name: "Carly", birth: 1942, death: 1970 },
  { name: "Ray", birth: 1962, death: 2011 },
  { name: "Jane", birth: 1912, death: 1941 }
];

const findTheOldest = function(po) {
return po.reduce((oldest, current) =>{
      const oldestAge = oldest.death - oldest.birth;
    const currentAge = current.death - current.birth;
    
    return oldestAge > currentAge ? oldest : current;
});
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
