function Node(value){
  this.data = value;
  this.next = null;
}

function SinglyLinkedList(){
  this.head = null;
  this.size = 0;
}
  return this.size == 0;
}
SinglyLinkedList.prototype.insert = function(value){
  if(this.head == null){
    this.head  = new Node(value);
  }
  else{
    var temp = this.head;
    this.head = new Node(value);
    this.head.next = temp ;
  }
  this.size ++;
}
function AddNode(){
  var currentHead = this.head;
  while(currentHead.)
}
