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
    this.prev =
     temp;
  }
  this.size ++;
}


DoublyLinked.prototype.remove = function(value){
  if(this.tail == null){
    this.tail = new DoublyLinkedListNode(value);
    this.head = this.tail;
  }
  else{
    var temp = new DoublyLinkedListNode(value);
    temp.prev = this.tail ;
    this.tail  = temp;
  }
  this.size++;

}

DoublyLinkdeList.prototype.addAtMidddle = function(value){
   curr = this.head  || this.tail;
   prev = curr;
   while(curr.next){
     prev.prev = next = curr;
     curr.prev = prev
     curr.next = prev.next
     this.size++;
     break;
   }

}
