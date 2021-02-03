function Noded(data){
  this.data = data;
  this.next = null;
}

function LinkedList(){
  this.head = null;
  this.size = 0;
}

//how insert a node to a linkedList

LinkedList.prototype.isEmpty = function(){
  return this.size == 0;
}

LinkedList.prototype.insert = function(value){
  if(this.head == null){
    this.head = new Node(value);
  }else{
    var temp = this.head;
    var head = new Node(value)
    this.head.next = temp;
  }
  this.size++;
}


LinkedList.prototype.insertAtMiddle = function(value){
  var prev = this.head ;
  var current = new Node(value);
  current.next = prev.next;
  prev.next = current;
  this.size ++;
}
//how to remove a node from a linked list by checking its value

// LinkedList.prototype.remove = function(value){
//   var currentHead = this.head;
//   if(currentHead.data == value){
//     this.head = currentHead.next
//     this.size --;
//   }else{
//     var prev = currentHead;
//     while(currentHead.next){
//       if(currentHead.data  == value){
//         prev.next = currentHead.next;
//         prev = currentHead;
//         currentHead = currentHead.next;
//         break;
//       }
//       prev = currentHead;
//       currentHead = currenthead.next;
//     }
//     if(currentHead.data == value){
//       prev.next = null;
//     }
//     this.size --;
//   }
// }

LinkedList.prototype.remove = function(value){
  var currentHead = this.head ;
  if(currentHead.data == value){
    this.head = currentHead.next ;
    this.size --;
  }else{
    var prev = currrentHead;
    while(currentHead.next){
      if(currentHead.data == value){
        prev.next = currentHead.next ;
        prev = currentHead;
        currentHead = currentHead.next;
        break;
      }
      prev = currentHead;
      currentHead  = currentHead.next;
    }
    if(currentHead.data == value){
      prev.next = null;
    }
  }
  this.size --;
}

LinkedList.prototype.find  = function(value){
  var currentHead = this.head;
  while(currentHead.next){
    if(currentHead.data == value){
      return true;
    }
    currentHead = currentHead.next;
  }
  return false;
}
