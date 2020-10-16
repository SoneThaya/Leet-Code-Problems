// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

var convert = function (s, numRows) {
  let len = s.length;
  if (len <= 2) return s;
  let a = [];
  let row = 0;
  let isDown = true;

  for (let i = 0; i < len; i++) {
    if (!a[row]) {
      a[row] = s.charAt(i);
    } else {
      a[row] += s.charAt(i);
    }

    if (row === numRows - 1) isDown = false;
    if (row === 0) isDown = true;
    row = isDown ? row + 1 : row - 1;
  }

  let newS = "";
  a.forEach(function (element, index) {
    newS += element;
  });

  return newS;
};
