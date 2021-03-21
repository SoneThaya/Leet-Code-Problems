// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

var isBalanced = function (root) {
  if (root === null) {
    return true;
  }

  return getHeight(root) !== -1;
};

let getHeight = function (node) {
  if (node === null) {
    return 0;
  }

  let left = getHeight(node.left);
  let right = getHeight(node.right);

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }

  return Math.max(left, right) + 1;
};
