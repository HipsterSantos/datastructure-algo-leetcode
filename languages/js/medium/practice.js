//this file is to help you redo what you've learned so far ,try coding everyting by coming from your mind
function DoublyLinkedListNode(value){
  this.data = value;
  this.next = null;
  this.prev = null;

}

function DoublyLinkedList(){
  this.head  = null;
  this.tail = null;
  this.size = 0;
}

DoublyLinkdList.prototype.addAtHed = function(value){
  if(this.head == null){
    this.head = new DoublyLinkedListNode(value);
    this.tail  = this.head;
  }else{
    var temp  = new DoublyLinkedListNode(value)
    temp.next = this.head;
    this.head  = temp;
    this.prev = temp;
  }
  this.size ++;
}
