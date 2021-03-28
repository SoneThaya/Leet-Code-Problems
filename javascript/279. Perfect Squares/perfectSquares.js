// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

// Example 1:

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

var numSquares = function (n) {
  let square_root = 1;
  let arr = [];

  for (let i = 1; i < n + 1; i++) {
    if (i === square_root * square_root) {
      arr[i] = 1;
      square_root++;
    } else {
      let min = i;
      for (let j = square_root - 1; j > 0; j--) {
        min = Math.min(min, 1 + arr[i - j * j]);
      }
      arr[i] = min;
    }
  }

  return arr[n];
};
