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

DoublyLinkedList.prototype.deleteAHead = function(){
  var toReturn  = null;
  if(this.head != null){
    toRetur = this.head.data ;
    if(this.tail == this.head){
      this.head = null;
      this.tail = null;
    }else{
      this.head = this.head.next;
      this.head.prev = null;
    }
  }
  this.size--;
  return toReturn;
}

DoublyLinkedList.prototype.deleteAtTail = function(){
  var toReturn = null;
  if(this.tail != toReturn){
    toReturn = this.tail.data;
    if(this.tail == this.head){
      this.head =null;
      this.tail = null;
    }else{
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }
  this.size--;
  return toReturn;
}

DoublyLinkedList.prototype.findStartingHead = function(value){
  var curr = this.head;
  while(curr.next){
    if(curr.data == value){
      return true;
    }
    curr = curr.next;
  }
  return false;
}

DoublyLinkedlist.prototype.findAtTail = function(value){
  var curr = this.head ;
  while(curr.prev){
    if(curr.data == value){
      return true;
    }
    curr = curr.prev;
  }
  return false;
}


//practice DoulbyLinkedList
function DoublyLinkedListNode(data){
  this.data  = data;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList(){
  this.head = null;
  this.tail = null;
  this.size = 0;
}
DoublyLinkedList.prototype.isEmpty = function(){
  return this.size === 0;
}
//inserting at head of doubly linked list
DoublyLinkedList.prototype.addAtFront = function(value){
  if(this.head == null){
    this.head = new DoublyLinkedListNode(value);
    this.tail = this.head;
  }
  else{
  var tmp = new DoublyLinkedListNode(value);
  tmp.next =  this.head;
  this.head.prev = tmp;
  this.head = tmp;
  }
  this.size++;
}

DoublyLinkedList.prototype.insertAtTail = function(value){
  if(this.tail===null){
    this.tail = new DoublyLinkedList(value);
    this.head = this.tail;
  }
  else{
    var tmp = new DoublyLinkedlistNode(value);
    tmp.next = this.tail;
    this.tail.next = tmp;
    this.tail = tmp;
  }
  this.size++;
}

DoublLinkedList.prototype.deleteAtHead = function(){
  var toReturn = null;
  if(this.head !== null){
    toReturn this.head.data;
    if(this.tail == this.head){
      this.head = null;
      this.tail = null;
    }
    else{
      this.head  =this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return toReturn ;
  }
}

//Deletion at the Tail

DoublyLinkedList.prototype.deleteAtTail = function(){
  var toReturn = null;
  if(this.tail !== null) {
    toReturn = this.tail.data;
    if(this.tail == this.head){
      this.head = null;
      this.tail = null;
    }else{
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }
  this.size--;
  return toReturn;
}

DoublyLinkedList.prototype.findStartringHead  =function(value){
  var curretnHead = this.head;
  while(currentHead.next){
    if(currentHead.data == value){
      return true;
    }
    curretnHea = currentHead.next;
  }
  return false;

}



//Challlenge ,reversing a linkedLisdt
