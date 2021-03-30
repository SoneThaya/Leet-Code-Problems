// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []

var rightSideView = function (root) {
  let result = [];

  function traverse(node, depth) {
    if (!node) {
      return;
    }

    if (!result[depth]) {
      result[depth] = node.val;
    }

    traverse(node.right, depth + 1);
    traverse(node.left, depth + 1);
  }

  traverse(root, 0);
  return result;
};
