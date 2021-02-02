class Empty(Exception):
    """Error attempting to accessana element from an empty container"""
    pass
class ArrayStack:
    """implementation of LIFO stack"""
    def __init__(self):
        self.data = []
    def __len__(self):
        return len(self.data)
    def is_empty(self):
        return len(self.data) == 0
    def push(self,d):
        self.data.append(d)
    def top(self):
        if self.is_empty():
            raise Empty('Stack is empty')
        return self.data[-1]
    def pop(self):
        if self.is_empty():
            raise Empty('Stack is empty')
        return self.data.pop()
