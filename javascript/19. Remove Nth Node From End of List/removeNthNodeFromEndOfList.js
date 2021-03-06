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
  const prehead = new ListNode();

  prehead.next = head;

  let cur = prehead;
  let count = 0;
  nth = null;

  while (cur) {
    nth = count === n ? prehead : nth && nth.next;
    count++;
    cur = cur.next;
  }

  nth.next = nth.next.next;

  return prehead.next;
};
