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
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let sum = new ListNode(-1);
    let head = sum;

    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let digitSum = val1 + val2 + carry;

        if (digitSum > 9) {
        digitSum %= 10;
        carry = 1;
        } else {
        carry = 0;
        }

        sum.next = new ListNode(digitSum);

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        sum = sum.next;
    }

    return head.next;
    
};