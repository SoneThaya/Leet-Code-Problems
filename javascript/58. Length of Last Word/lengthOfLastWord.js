// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Example 2:

// Input: s = " "
// Output: 0

var lengthOfLastWord = function (s) {
  let lastWordLength = 0;
  let beforeFirstNonEmptyChar = true;

  if (s.length === 0) {
    return 0;
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) !== " ") {
      lastWordLength++;
      beforeFirstNonEmptyChar = false;
    } else {
      if (!beforeFirstNonEmptyChar) {
        break;
      }
    }
  }

  return lastWordLength;
};
