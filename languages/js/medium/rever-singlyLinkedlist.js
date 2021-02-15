//reverse a linkedlis
function reverseSingleLinkedList(sll){
  var node  = sll.head;
  var pre = null;
  while(node){
    var temp = node.next;
    node.next = prev;
    prev = node;
    if(!temp)
      break;
      node = temp;
  }
  return node;
}
