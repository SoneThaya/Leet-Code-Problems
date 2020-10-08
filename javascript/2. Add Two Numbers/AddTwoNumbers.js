// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let node = head;
  // carry over variable set to 0
  let carry = 0;

  // traverse linked list while there is l1 or l2
  while (l1 || l2) {
    // if l1 is present grab l1's value if not make it 0
    let l1Value = l1 ? l1.val : 0;
    // if l2 is present grab l2's value if not make it 0
    let l2Value = l2 ? l2.val : 0;

    // adds
    let sum = l1Value + l2Value + carry;
    // reset carry to 0
    carry = 0;
    let newValue = sum;

    // if sum is greater than 9, carry = 1
    if (sum > 9) {
      newValue = sum % 10;
      carry = 1;
    }

    node.next = new ListNode(newValue);
    node = node.next;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry) {
    node.next = new ListNode(carry);
  }

  return head.next;
};
