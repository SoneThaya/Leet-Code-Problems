// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

var isAnagram = function (s, t) {
  if (s === "" && t === "") return true;
  if (s.length !== t.length) return false;

  let temp = {};

  for (let i = 0; i < s.length; i++) {
    if (!temp[s[i]]) {
      temp[s[i]] = 1;
    } else {
      temp[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (temp[t[i]]) {
      temp[t[i]]--;
    } else {
      return false;
    }
  }

  for (let key in temp) {
    if (temp[key] > 0) {
      return false;
    } else {
      return true;
    }
  }
};
