// Given a linked list, swap every two adjacent nodes and return its head.

// Example 1:

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]

var swapPairs = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let runner = dummy;

  while (runner.next !== null && runner.next.next !== null) {
    let r1 = runner.next;
    let r2 = runner.next.next;

    runner.next = r2;
    r1.next = r2.next;
    r2.next = r1;

    runner = runner.next.next;
  }

  return dummy.next;
};
