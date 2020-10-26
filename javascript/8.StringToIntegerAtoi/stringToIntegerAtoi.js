// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

// Note:

// Only the space character ' ' is considered a whitespace character.
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
 

// Example 1:

// Input: str = "42"
// Output: 42

var myAtoi = function (s) {
  s = s.trim();
  var pos_or_neg = 1;
  var num_str = "";
  for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i);
    if (i == 0 && char == "-") {
      num_str += "-";
    } else if (char >= "0" && char <= "9") {
      num_str += char;
    } else if (!(i == 0 && char == "+")) {
      break;
    }
  }
  var ans = num_str == "" || num_str == "-" ? 0 : parseInt(num_str);
  if (ans > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (ans < Math.pow(2, 31) * -1) {
    return Math.pow(2, 31) * -1;
  }
  return ans;
};
