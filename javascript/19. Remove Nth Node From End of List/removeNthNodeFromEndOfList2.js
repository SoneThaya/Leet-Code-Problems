// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

var removeNthFromEnd = function (head, n) {
  const start = new ListNode(null);
  start.next = head;

  let fast = start;
  while (n-- > 0) {
    fast = fast.next;
  }

  let slow = start;

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  const target = slow.next;
  slow.next = target.next;
  target.next = null;

  return start.next;
};
