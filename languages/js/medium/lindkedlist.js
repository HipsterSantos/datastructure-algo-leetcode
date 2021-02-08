function Node(value){
  this.data = value;
  this.next = null;
}

function wholeList(n){
  this.head = null;
  this.size ++;
}
//adding insert function in the middle of linkedList
function addInMiddle(value){
  var prev =this.head;
  while(prev != null){
    var newone = new Node(value);
    newone.next = prev.next;
    prev.next = newone;
    prev = newone
    prev.size++;
    break;
  }
  return prev;
}


function addInStart(n){
  if(this.head == null){
    this.head = new Node(n);
  }
  else{
    var backup = new Node(n);
    backup.next = this.head;
    this.head = backup;
  }
  this.size ++;
}


function getElementInIndex(n){
  var temp = this.head,
  count = 0;
  while(temp != null)
  count++;
  whether(n,count);
    temp = temp.next;
    if
  }
}

whether(me,who){
  if(me == who)
    break;
}
