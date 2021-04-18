// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function (nums) {
  // creates a set of unique numbers
  let numbers = new Set();

  // loops over all numbers in the array
  for (let num of nums) {
    // checks if the number is in Set
    if (!numbers.has(num)) {
      // add to Set if not
      numbers.add(num);
    } else {
      // if it is in Set it is a duplicate
      return true;
    }
  }
  // if no duplicates
  return false;
};
