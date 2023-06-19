# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def removeNthFromEnd(self, head, n):
        length = 0
        curr = head
        while curr:
            length += 1
            curr = curr.next

        # Calculate the index of the node to be removed from the beginning of the list
        index = length - n

        # Handle special cases where the head needs to be removed
        if index == 0:
            return head.next

        # Traverse the list again and remove the node at the calculated index
        curr = head
        for i in range(index - 1):
            curr = curr.next
        curr.next = curr.next.next

        return head
        