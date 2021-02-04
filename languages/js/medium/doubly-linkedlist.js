function DLNode(data){
  this.data = data ;
  this.next = null;
  this.prev = null;
}

function LinkedList(){
  this.head = null;
  this.tail = null;
  this.size =0;
}
LinkedList.prototype.isEmpty = function(){
  return this.size === 0 ;
}

LinkedList.prototype.addAtFront = function(value){
  if(this.head == null){
    this.head - new DLNode(value);
    this.tail  = this.head;
  }else{
    var temp = new DLNode(value)
    this.head.next = this.head;
    this.head.prev = temp;
    this.head = temp;
  }
}

LinkedList.prototype.addAtTail = function(value){
  if(this.tail === null ){
    this.tail = new DLNode(value);
    this.head = this.tail;
  }else{

    this.tail.prev = this.tail;
    this.tail.next = temp;
    this.tail = temp
  }
}
