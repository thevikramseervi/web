/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
   let res = numbers[0];
   const len = numbers.length
   for (let i = 0; i < len; i++) {
    if (numbers[i] > res) {
        res = numbers[i];
    }
   }
   return res;
}

module.exports = findLargestElement;
