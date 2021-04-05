// Given an unsorted integer array nums, find the smallest missing positive integer.

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1

var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] != i + 1 && nums[i] > 0 && nums[i] <= nums.length) {
      if (nums[nums[i] - 1] == nums[i]) {
        nums[i] = 0;
        break;
      }

      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }
  let index = 0;
  for (index; index < nums.length; index++) {
    if (nums[index] !== index + 1) {
      break;
    }
  }
  return index + 1;
};
