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
  let dummy = new ListNode(0);
  dummy.next = head;

  let runner = dummy;
  let walker = dummy;

  for (let i = 1; i <= n + 1; i++) {
    runner = runner.next;
  }

  while (runner !== null) {
    runner = runner.next;
    walker = walker.next;
  }

  walker.next = walker.next.next;
  return dummy.next;
};
