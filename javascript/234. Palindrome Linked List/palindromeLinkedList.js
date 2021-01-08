// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

var isPalindrome = function (head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = head;
  slow = reverse(slow);

  while (slow !== null) {
    if (slow.val !== fast.val) {
      return false;
    }

    slow = slow.next;
    fast = fast.next;
  }

  return true;
};

let reverse = function (head) {
  let prevNode = null;

  while (head !== null) {
    let nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }

  return prevNode;
};
