/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
    return head;
  }
  
  // Initialize a new dummy node to serve as the new head of the list.
  const dummy = new ListNode();
  dummy.next = head;
  
  // Initialize three pointers to help us swap the nodes.
  let prev = dummy;
  let first = head;
  let second = head.next;
  
  while (first && second) {
    // Swap the pair of nodes by manipulating their pointers.
    first.next = second.next;
    second.next = first;
    prev.next = second;
    
    // Move the pointers forward to the next pair of nodes.
    prev = first;
    first = first.next;
    
    // Check if there's another pair of nodes to swap.
    if (first) {
      second = first.next;
    }
  }
  
  // Return the new head of the list.
  return dummy.next;
};