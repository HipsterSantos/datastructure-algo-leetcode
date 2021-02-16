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
        curr =  self.head
        if curr.data  = value:
            self.head = self.head.next
            self.size = self.size-1
        else:
            prev  = curr
            while curr != None:
                prev.next = curr.next
                prev = curr 
            prev = curr
            curr  = curr.next
