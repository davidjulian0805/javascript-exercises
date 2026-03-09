const removeFromArray = function(array, ...removeFromArray) {

    return array.filter(item => !removeFromArray.includes(item));


};

const storage = ["hA", "hsa", "sjaids"];
const result = removeFromArray(storage, "hA");


console.log(result);
// Do not edit below this line
module.exports = removeFromArray;
