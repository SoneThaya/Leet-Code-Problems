// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function (strs) {
  let longest = "";

  if (strs.length === 0) {
    return longest;
  }

  let comparisonWord = strs[0];
  let comparisonIndex = 0;

  for (let comparisonLetter of comparisonWord) {
    for (let i = 1; i < strs.length; i++) {
      let currentWord = strs[i];
      let currentLetter = currentWord.charAt(comparisonIndex);

      if (
        comparisonLetter !== currentLetter ||
        comparisonIndex > currentWord.length
      ) {
        return longest;
      }
    }

    comparisonIndex++;
    longest += comparisonLetter;
  }
  return longest;
};
