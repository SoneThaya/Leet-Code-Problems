// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

var topKFrequent = function (nums, k) {
  let keyFreq = {};

  nums.forEach((num) => {
    if (!keyFreq[num]) {
      keyFreq[num] = 1;
    } else {
      keyFreq[num]++;
    }
  });

  let freqKey = {};

  for (const key in keyFreq) {
    let freq = keyFreq[key];
    if (!freqKey[freq]) {
      freqKey[freq] = [];
    }
    freqKey[freq].push(key);
  }

  let sortedFreqs = Object.keys(freqKey).sort((a, b) => b - a);
  let res = [];
  for (let i = 0, resK = 0; i < sortedFreqs.length; i++) {
    let freq = sortedFreqs[i];
    let keys = freqKey[freq];
    for (let j = 0; j < keys.length && resK < k; j++) {
      res.push(keys[j]);
      resK++;
    }
  }
  return res;
};
