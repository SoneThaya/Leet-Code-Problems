// Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

// Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

// Example 1:

// Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
// Output: true
// Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
// Example 2:

// Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
// Output: false
// Example 3:

// Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
// Output: true
// Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

var canThreePartsEqualSum = function (arr) {
  let total = arr.reduce((a, b) => a + b, 0);

  if (total % 3) {
    return false;
  }
  let target = Math.floor(total / 3);

  let accum = 0;
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (counter === 2) {
      return true;
    }
    accum += arr[i];
    if (accum === target) {
      counter += 1;
      accum = 0;
    }
  }

  return false;
};
