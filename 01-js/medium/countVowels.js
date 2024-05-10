/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Check if the clean string is equal to its reverse
  return cleanStr.split("") === cleanStr.split("").reverse();
}

module.exports = countVowels;
