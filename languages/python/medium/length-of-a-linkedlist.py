# class LLNode:
#     def __init__(self, val, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def solve(self, node):
        f = 0
        while node != None:
            f=f+1
            node = node.next
        return f
# class LLNode:
#     def __init__(self, val, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def solve(self, node):
        f = 0
        if node != None:
            while node:
                f=f+1
                node = node.next
            return f
        else:
            return f
