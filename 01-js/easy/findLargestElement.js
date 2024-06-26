/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  //   if (numbers.length == 0) return undefined;
  //   let lg = numbers[0];
  //   for (let i = 0; i < numbers.length; i++) {
  //     if (lg < numbers[i]) {
  //       lg = numbers[i];
  //     }
  //   }
  //   return lg;

  if (numbers.length == 0) return undefined;

  let lg = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    lg = Math.max(lg, numbers[i]);
  }

  return lg;
}

module.exports = findLargestElement;
