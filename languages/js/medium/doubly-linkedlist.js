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
