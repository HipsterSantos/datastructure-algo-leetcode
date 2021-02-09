function DoublyNode(value){
  this.data = value;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList(){
  this.head = null;
  this.tail = null;
  this.size = 0;
}

function isEmpty(){
  return this.size ===0;
}
