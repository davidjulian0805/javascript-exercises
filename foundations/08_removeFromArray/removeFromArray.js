const removeFromArray = function(array, ...removeFromArray) {
    return array.filter(item => !removeFromArray.includes(item));
};

const storage = [1, 2, 3, 4];
const result = removeFromArray(storage, 1, 3);


console.log(result);
// Do not edit below this line
module.exports = removeFromArray;
