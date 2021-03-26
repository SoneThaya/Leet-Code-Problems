// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

var mapOfNumbers = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  if (!digits.length) {
    return [];
  }

  let lastDigitPossiblities = [""];

  for (let i = 0; i < digits.length; i++) {
    let newPossiblities = [];

    for (let x = 0; x < lastDigitPossiblities.length; x++) {
      for (let letter of mapOfNumbers[digits[i]]) {
        newPossiblities.push(lastDigitPossiblities[x].concat(letter));
      }
    }

    if (i == digits.length - 1) {
      return newPossiblities;
    }

    lastDigitPossiblities = newPossiblities;
  }
};
