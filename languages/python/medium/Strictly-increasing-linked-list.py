Given the head of a singly linked list hea
d, return whether the values of the nodes
are sorted in a strictly increasing order.

# class LLNode:
#     def __init__(self, val, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def solve(self, head):
        cur = head
        prev = head
        while cur.next:
            if cur.val > prev.val:
                print('keep track')
                cur = cur.next
            else:
                return False
            cur = cur.next
        return True
