class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class LinkedList(Node):
    def __init__(self):
        self.head = Node(None)
        self.size = 0
    def isEmpty(self):
        return self.size == 0

    def insert(self,value):
        if self.head == None:
            self.head = Node(value)
        else:
            temp = Node(value)
            tem.next = self.head
            self.head = temp
        self.size = self.size+1

    def remove(self,value):
